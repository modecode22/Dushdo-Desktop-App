import { useState } from "react";
import { GiEmberShot } from "react-icons/gi";
import AddTaskFormSwitch from "./AddTaskFormSwitch";
import Counter from "./Counter";
import { UniqueId } from "../lib/utils";
import { createTask } from "../lib/createTask";
import { useQuery } from "react-query";
import {} from "@radix-ui/react-dialog";
import { useSettingStore } from "../store/store";



interface Props {
  close: React.MutableRefObject<HTMLButtonElement|null>;
}

const AddTaskForm = ({ close }:Props) => {
  const { refetch } = useQuery({
    queryKey: ["todaytasks"],
  });

  const settings = useSettingStore(state=> state.settings)
  const [count, setCount] = useState<number>(4);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(settings.pomodoroLength);
  const [task, setTask] = useState<Task>({
    completed: false,
    completedSubTasks: 0,
    dueDate: new Date(),
    duration: duration,
    id: UniqueId(),
    name: "",
    repeatDaily: enabled,
    totalSubTasks: count,
    description: "",
  });


  async function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const thetask = await createTask(task);
    //  setTasks([...tasks, task]);
    setCount(4);
    setEnabled(false);
    //todo make duration changeable
    setDuration(25);
    setTask({
      id: UniqueId(),
      name: "",
      description: "",
      dueDate: new Date(),
      repeatDaily: enabled,
      duration: duration,
      completedSubTasks: 0,
      totalSubTasks: count,
      completed: false,
    });
    refetch();
    close.current?.click()
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
            setTask({ ...task, name: e.target.value });
          }}
          required
          maxLength={50}
          value={task.name}
          placeholder="write your task name"
          type="text"
          className="placeholder:text-font/20 focus:placeholder:text-font/50 w-full h-10 p-1 px-2 rounded-lg bg-black/40 border-2 outline-none border-main100/20 focus:border-main100"
        />
      </section>
      <section
        onClick={() => {
          setTask({ ...task, totalSubTasks: count });
        }}
        className="px-2 flex gap-5 justify-between pr-10 items-center "
      >
        <label className="px-1 text-sm font-normal text-font/80">
          Number of rounds :
        </label>
        <Counter count={count} setCount={setCount} max={20} />
      </section>
      <section
        onClick={() => {
          setTask({ ...task, repeatDaily: enabled });
        }}
        className="px-2 flex gap-5 justify-between pr-10 items-center "
      >
        <label className="px-1 text-sm font-normal text-font/80">
          Repeat :
        </label>
        <div className="px-5">
          <AddTaskFormSwitch enabled={enabled} setEnabled={setEnabled} />
        </div>
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

export default AddTaskForm