import { useQuery } from "react-query";
import { getAllTasks } from "../lib/getAllTasks";
import TheChart from "../components/TheChart";
import { ScrollArea } from "../components/ui/scrollarea";

const Data = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["alltasks"],
    queryFn: () => getAllTasks(),
  });

  if (isError) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  const sixDaysAgo = new Date();
  sixDaysAgo.setDate(sixDaysAgo.getDate() - 6); // set date to 6 days ago

const result: Result = (data ?? [])
  .filter((task: Task): task is Task => task.dueDate >= sixDaysAgo) // filter out tasks older than 6 days ago
  .reduce(
    (acc: Result, task: Task) => {
      const dayOfWeek = task.dueDate.getDay(); // get day of the week as a number (0-6)
      const dayOfWeekName = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ][dayOfWeek]; // map day of the week number to the correct day of the week name
      acc[dayOfWeekName].push(task);
      return acc;
    },
    {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    } as Result // assert that the initial value matches the Result type
  );


function calculateTotalHours(result: Result): ResultWithHours[] {
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
  return daysOfWeek.map((dayOfWeek: string): ResultWithHours => {
    const tasksForDay = result[dayOfWeek];
    const totalHours = tasksForDay.reduce((acc: number, task: Task) => {
      const taskHours = task.duration * task.completedSubTasks;
      return acc + taskHours;
    }, 0)
    return { day: dayOfWeek, hours: (totalHours/60).toFixed(1) };
  });
}


const tasks = calculateTotalHours(result);
const totalHoursForWeek = tasks.reduce((acc: number, task: ResultWithHours)=>{
  return acc + parseFloat(task.hours);
},0)

  const totalHours =
    data?.reduce((acc: number, task: Task) => {
      const taskHours = task.duration * task.completedSubTasks;
      return acc + taskHours;
    }, 0)
    
  const totalPomos = data?.reduce((acc: number, task: Task) => {
    const completedPomos = task.completedSubTasks;
    return acc + completedPomos;
  }, 0);
  const totalCompletedTasks = data?.filter((task: Task) => {
    return task.completed;
  }).length

  return (
    <>
      <main className="flex-col gap-5 select-none h-full w-full flex justify-center px-10 items-center text-center">
        <h1 className="text-4xl">Your Stats</h1>
        <ScrollArea className=" shadow-sm shadow-darkform bg-dark100 gap-2 h-[80%] w-full max-w-2xl p-10 md:px-10 rounded-xl border border-font/20 flex items-center flex-col ">
          <section className="px-2 grid grid-cols-2 w-full h-full gap-2">
            <div className="w-full flex flex-col items-center justify-center gap-2 p-2 aspect-video bg-darkform rounded-xl">
              <h1 className="text-6xl"> {`${totalPomos}`}</h1>
              <h3 className="text-xs">total completed pomodoros</h3>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2 p-2 aspect-video bg-darkform rounded-xl">
              <h1 className="text-6xl">
                {" "}
                {`${totalHours ? (totalHours / 60).toFixed(1):"0"}`}
              </h1>
              <h3 className="text-xs">total completed hours</h3>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2 p-2 aspect-video bg-darkform rounded-xl">
              <h1 className="text-6xl">{`${totalCompletedTasks}`}</h1>
              <h3 className="text-xs">total completed tasks</h3>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2 p-2 aspect-video bg-darkform rounded-xl">
              <h1 className="text-6xl">{totalHoursForWeek.toFixed(1)}</h1>
              <h3 className="text-xs">total completed hours this week</h3>
            </div>
          </section>

          <h1 className="py-5 text-2xl mt-5">Progress this week</h1>
          <section className=" bg-darkform rounded-xl py-5 w-full flex justify-center items-center aspect-video pr-10">
            {tasks !== undefined ? (
              <>
                <TheChart data={tasks} />
              </>
            ) : (
              <></>
            )}
          </section>
        </ScrollArea>
      </main>
    </>
  );
}

export default Data