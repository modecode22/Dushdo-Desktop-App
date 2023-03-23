import { useState, useEffect } from "react";
import { createTask } from "../lib/createTask";
import { deleteTask } from "../lib/dalateTask";
import { updateTask } from "../lib/updateTask";
import { getAllTasks } from "../lib/getAllTasks";
import {setupDatabase} from "../lib/db";
function TestForDb() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    name: "",
    description: "",
    dueDate: new Date(),
    repeatDaily: false,
    duration: 0,
    completedSubTasks: 0,
    totalSubTasks: 0,
    completed: false,
  });
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  const [forUpdate, setForUpdate] = useState<Task>({
    id: "",
    name: "",
    description: "",
    dueDate: new Date(),
    repeatDaily: false,
    duration: 0,
    completedSubTasks: 0,
    totalSubTasks: 0,
    completed: false,
  });
  
  
 
 
 
 
 
  useEffect(() => {
    async function fetchTasks() {
    await setupDatabase()
      const tasks = await getAllTasks();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);


  async function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const task = await createTask(newTask);
    setTasks([...tasks, task]);
    setNewTask({
      id: "",
      name: "",
      description: "",
      dueDate: new Date(),
      repeatDaily: false,
      duration: 0,
      completedSubTasks: 0,
      totalSubTasks: 0,
      completed: false,
    });
  }

  async function handleDeleteTask(id: string) {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  async function handleUpdateTask(task: Task) {
    await updateTask(task);
    setTasks(tasks.map((t) => (t.id === task.id ? { ...task } : { ...t })));
  }
  console.log(tasks);
  
  return (
    <div className="p-5 w-screen h-screen grid grid-rows-2 gap-5">
      <div className="rounded-lg bg-darkfont/50">
        {updateMode ? (
          <>
            {/* create task */}
            <form
              onSubmit={(e)=>{
                e.preventDefault()
                 handleUpdateTask(forUpdate);
              }}
              className="w-full flex flex-wrap justify-center items-center p-2 gap-5"
            >
              <input
                required
                defaultValue={forUpdate.id}
                placeholder="task id"
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, id: e.target.value });
                }}
              />

              <input
                required
                defaultValue={forUpdate.name}
                placeholder="task name"
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, name: e.target.value });
                }}
              />

              <input
                placeholder="task desc"
                defaultValue={forUpdate.description??""}
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, description: e.target.value });
                }}
              />
              <div className="w-full flex justify-center items-center">
                <button className="rounded-md hover:brightness-110 active:brightness-125 h-10 w-36 bg-black/80 mt-10 p-2">
                  update task
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            {/* create task */}
            <form
              onSubmit={handleCreateTask}
              className="w-full flex flex-wrap justify-center items-center p-2 gap-5"
            >
              <input
                required
                placeholder="task id"
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, id: e.target.value });
                }}
              />

              <input
                required
                placeholder="task name"
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, name: e.target.value });
                }}
              />

              <input
                placeholder="task desc"
                className="px-2 rounded-md h-10 bg-darkform "
                type="text"
                onChange={(e) => {
                  setNewTask({ ...newTask, description: e.target.value });
                }}
              />
              <div className="w-full flex justify-center items-center">
                <button className="rounded-md hover:brightness-110 active:brightness-125 h-10 w-36 bg-black/80 mt-10 p-2">
                  add task
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <div className="flex flex-col p-5 gap-2 overflow-auto bg-black/60 rounded-lg">
        {tasks.map((t) => {
          return (
            <div className="flex gap-2 ">
              <div>{t.id}</div>
              <div>{t.name}</div>
              <button
                onClick={() => {
                  handleDeleteTask(t.id);
                }}
                className="bg-red-500 p-1 rounded-md h-7 hover:bg-red-600 active:bg-red-400"
              >
                delate
              </button>
              <button
                onClick={() => {
                  setUpdateMode(true);
                  setForUpdate(t);
                }}
                className="bg-emerald-500 p-1 rounded-md h-7 hover:bg-emerald-600 active:bg-emerald-400"
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TestForDb;
