import AddTask from "./AddTask";
import Header from "./Header";
import MainNav from "./MainNav";
import SoundsNav from "./SoundsNav";
import Task from "./Task";
import Timer from "./Timer";
import { ScrollArea } from "./ui/scrollarea";

const AppOne = () => {
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
       {
         id: "7",
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
         id: "8",
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
    <main className="w-full h-screen  overflow-hidden">
      <Header />
      <ScrollArea className="  h-full  w-full flex justify-center items-center rounded-md   ">
        <main className=" gap-5 p-5 w-full h-full   ">
          <section className="h-full overflow-hidden   w-full  flex  items-center  flex-col">
            <SoundsNav />
            <main className="max-w-md px-4 w-full h-full flex justify-center items-center p-2 gap-2">
              <div className=" w-full h-full grid grid-cols-2  gap-2">
                <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
                  <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
                    5
                  </h1>
                  <h1 className="col-span-2 flex justify-center items-center">
                    Hours Done
                  </h1>
                </div>
                <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
                  <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
                    7
                  </h1>
                  <h1 className="col-span-2 flex justify-center items-center">
                    Hours left
                  </h1>
                </div>{" "}
                <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
                  <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
                    10
                  </h1>
                  <h1 className=" col-span-2 flex justify-center items-center">
                    Pomodoro Done
                  </h1>
                </div>{" "}
                <div className="border overflow-hidden border-font/10 hover:border-font/50  bg-dark200   rounded-xl  duration-100 transition-all group   w-full h-14 backdrop-blur-md grid grid-cols-3">
                  <h1 className="bg-darkform col-span-1 rounded-lg h-full text-2xl flex justify-center items-center">
                    10
                  </h1>
                  <h1 className="col-span-2 flex justify-center items-center">
                    Pomodoro Left
                  </h1>
                </div>
              </div>
              <Timer />
            </main>
            <header className="flex justify-between items-center px-5 max-w-md w-full gap-60">
              <h1 className="font-sans text-xl">Today Tasks</h1>
              <MainNav />
            </header>

            <ScrollArea className="h-full  max-w-md w-full flex justify-center items-center rounded-md   p-4">
              <main className="flex flex-col  items-center w-full h-full gap-2">
                <AddTask />
                {tasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </main>
            </ScrollArea>
          </section>
        </main>
      </ScrollArea>
    </main>
  );
}

export default AppOne