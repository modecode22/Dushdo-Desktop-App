import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {TbPlayerPauseFilled} from 'react-icons/tb'
import { BsFillPlayFill } from "react-icons/bs";
import { FaRedoAlt } from "react-icons/fa";
import { useSettingStore } from "../store/store";
const Timer = () => {

  const settings = useSettingStore(state=>state.settings)


  const session = 1500
  const [seconds, setSeconds] = useState(session);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            clearInterval(intervalId!);
            setIsRunning(false);
            return session;
          }
          return currentSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId!);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setSeconds(session);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = `${seconds % 60}`.padStart(2, "0");
const progressWidth = 100-(seconds * 100) / session;

  return (
    <>
      <section className="      duration-200 transition-all group      backdrop-blur-md flex flex-col justify-between ">
        <div className="p-1">
          <CircularProgressbar
            className={`fill-white font-bold text-sm ${
              progressWidth === 100 ? "stroke-main100" : "stroke-main100/50"
            }  `}
            value={progressWidth}
            strokeWidth={15}
            text={`${minutes}:${formattedSeconds}`}
          />
        </div>

        <div className=" p-2 h-16 rounded-xl ">
          {!isRunning ? (
            <button
              className=" bg-darkform  active:brightness-110 shadow-sm shadow-black hover:shadow-main100 duration-100 transition-all flex z-30  w-full  h-full  justify-center items-center text-2xl font-bold rounded-full"
              onClick={handleStart}
              disabled={isRunning}
            >
              <div className=" w-full h-full rounded-full  flex justify-center items-center p-2 hover:bg-gradient-to-br from-main100 to-main200">
                <BsFillPlayFill className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
              </div>
            </button>
          ) : (
            <section className="bg-darkform shadow-sm hover:shadow-main100 shadow-black rounded-full  duration-100 transition-all  flex z-30  w-full  h-full  justify-center items-center text-2xl font-bold">
              <div className=" w-full h-full rounded-full  flex justify-center items-center ">
                <button
                  onClick={handlePause}
                  disabled={!isRunning}
                  className="active:brightness-110 rounded-l-full hover:bg-gradient-to-br from-main100 to-main200 w-full  h-full flex justify-center items-center  duration-100 transition-all"
                >
                  <TbPlayerPauseFilled className="w-4 h-4 sm:w-6 sm:h-6  " />
                </button>
              </div>
              <div className=" w-full h-full rounded-full  flex justify-center items-center  hover:bg-gradient-to-br from-main100 to-main200">
                <button
                  className="active:brightness-110 rounded-r-full hover:bg-gradient-to-br from-main100 to-main200 w-full  h-full flex justify-center items-center  duration-100 transition-all"
                  onClick={handleReset}
                >
                  <FaRedoAlt className="w-4 h-4 sm:w-6 sm:h-6 " />
                </button>{" "}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

export default Timer