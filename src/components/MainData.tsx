import { useEffect } from "react";
import { useQuery } from "react-query";

const MainData = ({ update }: { update :boolean}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todaytasks"],
  });

  if (isLoading) {
    return (
      <>
        <div className="select-none h-14 p-2  w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="select-none h-14 p-2  w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="select-none h-14 p-2  w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="select-none h-14 p-2  w-full rounded-xl bg-dark100/60 animate-pulse "></div>
      </>
    );
  }
  if (isError) {
    return <div>error in the server </div>;
  }

  // useEffect(() => {}, [update]);

  function calculateTaskStats(tasks: Task[]): {
    hoursLeft: number;
    finishedHours: number;
    finishedPomodoros: number;
    pomodorosLeft: number;
  } {
    return tasks.reduce<{
      hoursLeft: number;
      finishedHours: number;
      finishedPomodoros: number;
      pomodorosLeft: number;
    }>(
      (result, task) => {
        result.hoursLeft +=
          task.duration * (task.totalSubTasks - task.completedSubTasks);
        result.finishedHours += task.completedSubTasks * task.duration;
        result.finishedPomodoros += task.completedSubTasks;
        result.pomodorosLeft += task.totalSubTasks - task.completedSubTasks;
        return result;
      },
      {
        hoursLeft: 0,
        finishedHours: 0,
        finishedPomodoros: 0,
        pomodorosLeft: 0,
      }
    );
  }

  const stats = calculateTaskStats(data as Task[]);
  console.log(stats);
  return (
    <div className=" w-full h-full grid grid-cols-1  gap-2">
      <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
        <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
          {stats.finishedHours / 60}
        </h1>
        <h1 className="col-span-2 flex justify-center items-center">
          Hours Done
        </h1>
      </div>
      <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
        <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
          {stats.hoursLeft / 60}
        </h1>
        <h1 className="col-span-2 flex justify-center items-center">
          Hours left
        </h1>
      </div>{" "}
      <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
        <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
          {stats.finishedPomodoros}
        </h1>
        <h1 className=" col-span-2 flex justify-center items-center">
          Pomodoro Done
        </h1>
      </div>{" "}
      <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
        <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
          {stats.pomodorosLeft}
        </h1>
        <h1 className="col-span-2 flex justify-center items-center">
          Pomodoro Left
        </h1>
      </div>
    </div>
  );
};

export default MainData