import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import MainNav from "./components/MainNav";
import Task from "./components/Task";
import Timer from "./components/Timer";
import { ScrollArea } from "./components/ui/scrollarea";
import SoundsNav from "./components/SoundsNav";
import Header from "./components/Header";
import SoundPlayer from "./components/SoundPlayer";

import war from "/Audiomachine-AboveandBeyond.mp3";
import war1 from "/Audiomachine-AbsoluteMagnitude.mp3";
import war2 from "/Audiomachine-Apotheosis.mp3";
import war3 from "/Audiomachine-AshesofTime .mp3";
import war4 from "/Audiomachine-BloodandStone.mp3";
import warImg from "/war.png";
import warwar1 from "/war1.png";
import warwar2 from "/war2.png";
import warwar3 from "/war3.png";
import warwar4 from "/war4.png";



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
    <main className="flex gap-5 h-screen">
      <main className="w-full  h-full overflow-hidden ">
        <Header />
        <main className="pb-20 grid grid-cols-8  gap-2 px-10 rounded-lg p-5   w-full h-full">
          <ScrollArea className="col-span-2   w-full h-full bg-dark100 rounded-xl p-5  ">
            <main className="grid md:grid-cols-2 gap-2 w-full ">
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war} img={warImg} />
              </div>
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war1} img={warwar1} />
              </div>
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war1} img={warwar1} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war2} img={warwar2} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war3} img={warwar3} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war4} img={warwar4} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war1} img={warwar1} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war2} img={warwar2} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war3} img={warwar3} />
              </div>{" "}
              <div className="w-full flex justify-center items-center h-full">
                <SoundPlayer src={war4} img={warwar4} />
              </div>{" "}
            </main>
          </ScrollArea>
          <ScrollArea className="col-span-4   w-full h-full  rounded-xl p-5  ">
            <main className="overflow-hidden   w-full  flex  items-center  flex-col">
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
            </main>
          </ScrollArea>

          <ScrollArea className="col-span-2   w-full h-full  rounded-xl p-5  ">
            <main className="grid grid-cols-1 gap-2 w-full max-w-xs ">
              <div className="w-full px-10">
                <Timer />
              </div>

              <div className=" w-full h-full grid grid-cols-1  gap-2">
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
            </main>
          </ScrollArea>
          <main className="col-span-2"></main>
        </main>
      </main>
    </main>
  );
}

export default App;
