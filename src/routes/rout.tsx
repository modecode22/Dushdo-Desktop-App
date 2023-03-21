import { Form, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ScrollArea } from "../components/ui/scrollarea";
import SoundPlayer from "../components/SoundPlayer";

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
import { useSideBarStore } from "../store/store";

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
                  </div>
                </main>
              </ScrollArea>
            </section>
            <Outlet />
          </main>
        </main>
    );
};

export default Rout;
