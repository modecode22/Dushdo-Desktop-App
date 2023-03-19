import AddTask from "./components/AddTask";
import MainNav from "./components/MainNav";
import Task from "./components/Task";
import Timer from "./components/Timer";
import { ScrollArea } from "./components/ui/scrollarea";

function App() {
  const tasks: Task[] = [
    {
      id: "1",
      name: "Complete Math Homework",
      description: "Complete questions 1-10 in Chapter 5 of the textbook",
      dueDate: new Date("2023-03-22T18:00:00Z"),
      repeatDaily: false,
      duration: 90,
      completedSubTasks: 10,
      totalSubTasks: 10,
      completed: false,
    },
    {
      id: "3",
      name: "Paint Living Room",
      description: "Paint the living room walls and ceiling",
      dueDate: new Date("2023-03-25T12:00:00Z"),
      repeatDaily: false,
      duration: 240,
      completedSubTasks: 1,
      totalSubTasks: 3,
      completed: false,
    },

    {
      id: "4",
      name: "Go for a Hike",
      description: "Hike to the top of a nearby mountain",
      dueDate: new Date("2023-03-27T10:00:00Z"),
      repeatDaily: false,
      duration: 180,
      completedSubTasks: 2,
      totalSubTasks: 4,
      completed: false,
    },
    {
      id: "5",
      name: "Prepare for Job Interview",
      description:
        "Research the company and practice answering interview questions",
      dueDate: new Date("2023-03-24T16:00:00Z"),
      repeatDaily: false,
      duration: 120,
      completedSubTasks: 2,
      totalSubTasks: 5,
      completed: false,
    },
    {
      id: "6",
      name: "Write Blog Post",
      description: "Write a blog post on a topic of interest",
      dueDate: new Date("2023-03-28T23:59:59Z"),
      repeatDaily: false,
      duration: 90,
      completedSubTasks: 1,
      totalSubTasks: 3,
      completed: false,
    },
  ];


  return (
    <>
      <Timer />
      <main className="flex justify-center items-center w-full h-full">
        <main className=" flex flex-col  items-center w-full h-full gap-5 p-5">
          <header className="flex justify-between items-center px-5 max-w-md w-full gap-60">
            <h1 className="font-sans text-xl">Today Tasks</h1>
            <MainNav />
          </header>
          <main className="flex flex-col items-center mt-5 gap-10 w-full h-full px-10">
            {/* <section className="flex items-center gap-5">
              <button></button>
            </section> */}
            <ScrollArea className=" h-80 max-w-md w-full  rounded-md   p-4">
              <main className="flex flex-col  items-center w-full h-full gap-2">
                <AddTask />
                {tasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </main>
            </ScrollArea>
          </main>
        </main>
      </main>
    </>
  );
}

export default App;
