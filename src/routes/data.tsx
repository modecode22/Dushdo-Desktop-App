import { useQuery } from "react-query";
import { getAllTasks } from "../lib/getAllTasks";
import TheChart from "../components/TheChart";

const Data = () => {
 const {
    data,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["alltasks"],
    queryFn: () => getAllTasks(),
  });

if (isError){
  return <div>error</div>
}
if (isLoading) {
  return <div>loading...</div>;
}
function groupTasksByDay(tasks: Task[]): {
  [key: string]: { day: string; completed: number };
} {
  return tasks.reduce((acc, task) => {
    const day = new Date(task.dueDate).toLocaleDateString();
    if (!acc[day]) {
      acc[day] = { day, completed: 0 };
    }
    if (task.completed) {
      acc[day].completed += 1;
    }
    return acc;
  }, {} as { [key: string]: { day: string; completed: number } });
}

const groupedTasks = groupTasksByDay(data ?? []);

const taskData = Object.values(groupedTasks);

  return (
    <>
      <main className="flex-col gap-5 select-none h-full w-full flex justify-center px-10 items-center text-center">
        <h1 className="text-4xl">Your Stats</h1>
        <main className="shadow-sm shadow-darkform bg-dark100 gap-2 h-[80%] w-full max-w-2xl p-5 md:px-10 rounded-xl border border-font/20 flex items-center flex-col justify-between">
          <section className="w-full flex justify-center items-center aspect-video pr-10">

          <TheChart data={taskData} key={JSON.stringify(data)} />
          </section>
        </main>
      </main>
    </>
  );
}

export default Data