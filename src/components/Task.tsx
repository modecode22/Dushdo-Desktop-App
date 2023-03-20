import { FaCheck, FaFly, FaPlay } from "react-icons/fa";
import { GiAchievement, GiButterflyKnife, GiRocketFlight } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";
import CircleForTask from "./CircleForTask";
import TaskNav from "./TaskNav";

const Task = ({task}:{task:Task}) => {


    const value = (task.completedSubTasks * 100) / task.totalSubTasks; 


  return (
    <section className="relative   group  max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100 flex flex-col justify-between items-center">
      <header className="w-full flex justify-between  items-center gap-2 ">
        {/* <section className="w-6 h-6 rounded-lg bg-gradient-to-br from-main100 to-main200 flex justify-center items-center">
          <GiAchievement className="w-5 h-5" />
        </section> */}
        <h1>{task.name}</h1>

        <TaskNav />
      </header>
      <main className="w-full flex  items-center gap-2 justify-between">
        <div
          className={`${
            value === 100
              ? "text-main100 line-through	decoration-solid		"
              : "text-font/50"
          } text-font/50 text-xs font-bold`}
        >
          {task.completedSubTasks}/{task.totalSubTasks} Done
        </div>

        <div className="w-5 relative flex justify-center items-center">
          {value === 100 ? (
            <div className="flex justify-center items-center absolute  rounded-full  w-5 h-5 ">
              <FaCheck className="w-3 h-3" />
            </div>
          ) : null}

          <CircleForTask value={value} />
        </div>
      </main>
    </section>
  );
}

export default Task