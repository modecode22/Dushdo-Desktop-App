import { Form, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ScrollArea } from "../components/ui/scrollarea";
import SoundPlayer from "../components/SoundPlayer";

import { useSideBarStore } from "../store/store";

import rain from "/rain.png";
import water from "/water.png";
import nature from "/nature.png";
import fire from "/fire.png";
import brownnoise from "/brownnoise.png";
import rainSound from "/rain.aac";
import waterSound from "/water.aac";
import natureSound from "/nature.aac";
import fireSound from "/fire.aac";
import brownnoiseSound from "/brownnoise.aac";

const Rout = () => {


     const open = useSideBarStore((state)=>state.open)
    return (
      <main className="w-screen h-screen overflow-hidden ">
        <Header />
        <main className="  w-full pb-10  h-full flex">
          <section
            className={` ${
              open ? "w-32" : "w-0"
            } duration-200 transition-all h-full `}
          >
            <ScrollArea
              className={`col-span-2 duration-200  w-full   h-full bg-dark200 py-2   } `}
            >
              <main className="grid gap-2 px-4 w-full  ">
                <div className="w-full flex justify-center items-center h-full">
                  <SoundPlayer src={brownnoiseSound} img={brownnoise} />
                </div>{" "}
                <div className="w-full flex justify-center items-center h-full">
                  <SoundPlayer src={rainSound} img={rain} />
                </div>
                <div className="w-full flex justify-center items-center h-full">
                  <SoundPlayer src={waterSound} img={water} />
                </div>
                <div className="w-full flex justify-center items-center h-full">
                  <SoundPlayer src={natureSound} img={nature} />
                </div>{" "}
                <div className="w-full flex justify-center items-center h-full">
                  <SoundPlayer src={fireSound} img={fire} />
                </div>{" "}
              </main>
            </ScrollArea>
          </section>
          <Outlet />
        </main>
      </main>
    );
};

export default Rout;
