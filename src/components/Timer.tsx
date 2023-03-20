import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import {TbPlayerPauseFilled} from 'react-icons/tb'
import { BsFillPlayFill } from "react-icons/bs";
const Timer = () => {
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
      <section className="    rounded-xl  duration-200 transition-all group      backdrop-blur-md flex flex-col justify-between ">
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

        <div className="  h-16 rounded-xl ">
          {!isRunning ? (
            <button
              className="bottom-9 duration-100 transition-all flex z-30  w-full  h-full  justify-center items-center text-2xl font-bold rounded-full"
              onClick={handleStart}
              disabled={isRunning}
            >
              <div className=" w-16 h-16 rounded-full  flex justify-center items-center p-2">
                <BsFillPlayFill className="w-16 h-16" />
              </div>
            </button>
          ) : (
            <section className="bottom-9 gap-2 duration-100 transition-all  flex z-30  w-full  h-full  justify-center items-center text-2xl font-bold">
              <div className=" w-8 rounded-full r flex justify-center items-center p-2">
                <button
                  onClick={handlePause}
                  disabled={!isRunning}
                  className="rounded-l-full w-12 h-8 flex justify-center items-center  duration-100 transition-all"
                >
                  <TbPlayerPauseFilled className="w-8 h-8" />
                </button>
              </div>
              <div className=" w-8 rounded-full r flex justify-center items-center p-2">
                <button
                  className="rounded-l-full w-12 h-8 flex justify-center items-center  duration-100 transition-all"
                  onClick={handleReset}
                >
                  <MdOutlineReplayCircleFilled className="w-8 h-8" />
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