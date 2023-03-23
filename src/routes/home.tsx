import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import MainNav from "../components/MainNav";
import Task from "../components/Task";
import Timer from "../components/Timer";
import { ScrollArea } from "../components/ui/scrollarea";
import SoundsNav from "../components/SoundsNav";
import Header from "../components/Header";
import { useQuery} from "react-query" 
import { getAllTasks } from "../lib/getAllTasks";
import TodayTasks from "../components/TodayTasks";

function Home() {


  return (
    <>
      <section className="w-full h-full flex flex-col items-center p-2 gap-2">
        <ScrollArea className="h-full   w-full flex justify-center items-center rounded-md   p-4 ">
          <main className="flex gap-5 w-full justify-center ">
            <main className="flex flex-col max-w-md  items-center sm:w-full h-full gap-2">
              <header className="flex justify-between items-center p-2  max-w-md w-full ">
                <h1 className="font-sans text-xl">Today Tasks</h1>
                <MainNav />
              </header>
              <AddTask />
              <TodayTasks />
            </main>
            <section className="w-80 h-full mt-16">
              <div className="w-full flex justify-center items-center">
                <main className="grid grid-cols-1 gap-2 w-44 pb-10  ">
                  <div className="w-full px-5 bg-dark200 rounded-xl border border-font/20">
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
              </div>
            </section>
          </main>
        </ScrollArea>
      </section>
    </>
  );
}

export default Home;
