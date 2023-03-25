import { useState } from "react";
import { GiEmberShot } from "react-icons/gi";
import AddTaskFormSwitch from "./AddTaskFormSwitch";
import Counter from "./Counter";
import { UniqueId } from "../lib/utils";
import { createTask } from "../lib/createTask";
import { useQuery } from "react-query";
import { updateTask } from "../lib/updateTask";



interface Props {
  task: Task;
}

const EditTaskForm = ({ task }: Props) => {
  const { refetch } = useQuery({
    queryKey: ["tasks"],
  });
  const [theTask, setTheTask] = useState<Task>({
    completed: task.completed,
    completedSubTasks: task.completedSubTasks,
    dueDate: task.dueDate,
    duration: task.duration,
    id: task.id,
    name: task.name,
    repeatDaily: task.repeatDaily,
    totalSubTasks: task.totalSubTasks,
    description: "",
  });

  async function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const thetask = await updateTask(theTask);
    refetch();
  }

  return (
    <form
      onSubmit={handleCreateTask}
      className="w-full p-2 py-5 gap-2 flex justify-center  flex-col"
    >
      <section className="flex flex-col ">
        <label className="px-3 text-sm font-normal text-font/80">
          Task name :
        </label>
        <input
          onChange={(e) => {
            setTheTask({ ...theTask, name: e.target.value });
          }}
          value={theTask.name}
          placeholder="write your task name"
          type="text"
          className="placeholder:text-font/20 focus:placeholder:text-font/50 w-full h-10 p-1 px-2 rounded-lg bg-black/40 border-2 outline-none border-main100/20 focus:border-main100"
        />
      </section>

      <section className="w-full flex justify-center ">
        <button className="mt-5 flex justify-center items-center gap-2 rounded-xl w-1/2 h-10 bg-black/80 shadow-sm shadow-black hover:bg-gradient-to-br from-main100 to-main200 duration-100 transition-all  hover:shadow-main100 active:brightness-110">
          Add task
          <GiEmberShot />
        </button>
      </section>
    </form>
  );
};

export default EditTaskForm;
