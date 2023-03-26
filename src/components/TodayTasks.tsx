import { getAllTasks } from '../lib/getAllTasks';
import {useQuery} from "react-query"
import Task from './Task';
import { deleteTask } from '../lib/dalateTask';
import { updateTask } from '../lib/updateTask';
import { useCurrentStore } from '../store/store';
import { getTasksForCurrentDay } from '../lib/getTodayTasks';
import { useEffect } from 'react';
const TodayTasks = ({ update }: { update :boolean}) => {
  const currentTask = useCurrentStore((state) => state.currentTask);
  const setCurrentTask = useCurrentStore((state) => state.setCurrentTask);

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["todaytasks"],
    queryFn: () => getTasksForCurrentDay(),
    //? all tasks
    //  queryFn: () => getAllTasks(),
  });
  async function handleDeleteTask(id: string) {
    await deleteTask(id);
    // data?.filter((task) => task.id !== id)
    refetch();
    if (currentTask !== null) {
      currentTask.id === id ? setCurrentTask(null) : null;
    }
  }

  console.log(data, "home page");

  async function handleUpdateTask(task: Task) {
    await updateTask(task);
    data?.map((t) => (t.id === task.id ? { ...task } : { ...t }));
  }

  useEffect(() => {
    refetch()
  }, [update]);

  if (isLoading) {
    return (
      <>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
        <div className="max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100/60 animate-pulse "></div>
      </>
    );
  }
  if (isError) {
    return <div>error in the server </div>;
  }

  return (
    <>
      {data?.map((task) => (
        <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
      ))}{" "}
    </>
  );
};

export default TodayTasks