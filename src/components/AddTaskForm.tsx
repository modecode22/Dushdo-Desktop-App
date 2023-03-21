import { useState } from "react";
import { GiEmberShot } from "react-icons/gi";
import AddTaskFormSwitch from "./AddTaskFormSwitch";
import Counter from "./Counter";




const AddTaskForm = () => {
    const [count, setCount] = useState<number>(4);
  const [enabled, setEnabled] = useState<boolean>(true);


    return (
      <form className="w-full p-2 py-5 gap-2 flex justify-center  flex-col">
        <section className="flex flex-col ">
          <label className="px-3 text-sm font-normal text-font/80">
            Task name :
          </label>
          <input
            placeholder="write your task name"
            type="text"
            className="placeholder:text-font/20 focus:placeholder:text-font/50 w-full h-10 p-1 px-2 rounded-lg bg-black/40 border-2 outline-none border-main100/20 focus:border-main100"
          />
        </section>
        <section className="px-2 flex gap-5 justify-between pr-10 items-center ">
          <label className="px-1 text-sm font-normal text-font/80">
            Number of rounds :
          </label>
          <Counter count={count} setCount={setCount} max={20} />
        </section>
        <section className="px-2 flex gap-5 justify-between pr-10 items-center ">
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
}

export default AddTaskForm