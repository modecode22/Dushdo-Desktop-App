import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {TbPlayerPauseFilled} from 'react-icons/tb'
import { BsFillPlayFill } from "react-icons/bs";
import { FaRedoAlt } from "react-icons/fa";
import { useCurrentStore } from "../store/store";
import { updateTask } from "../lib/updateTask";
import checkSound from "../sounds/check.aac";
import timetostartSound from "../sounds/timetostart.aac";

const Timer = ({ 
  settings, 
  currentTask, 
  setUpdate, 
  update 
}: { 
  settings: Settings; 
  currentTask: Task | null; 
  setUpdate: Dispatch<SetStateAction<boolean>>; 
  update: boolean; 
}) => {
  const session = useMemo(() => 60 * settings.pomodoroLength, [settings.pomodoroLength]);
  const ShortBreak = useMemo(() => 60 * settings.shortBreakLength, [settings.shortBreakLength]);
  const LongBreak = useMemo(() => 60 * settings.longBreakLength, [settings.longBreakLength]);
  const sessionsNumBeforeLongBreak = settings.numPomodorosBeforeLongBreak;
  const checkSoundRef = useRef(new Audio(checkSound));
  const timetostartSoundRef = useRef(new Audio(timetostartSound));

  const [seconds, setSeconds] = useState(session);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState<"pomodoro" | "shortBreak" | "longBreak">("pomodoro");
  const [theNumberOfSessions, setTheNumberOfSessions] = useState(0);

  const setCurrentTask = useCurrentStore((state) => state.setCurrentTask);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    if (sessionType === "pomodoro") {
      setSeconds(session);
    } else if (sessionType === "shortBreak") {
      setSeconds(ShortBreak);
    } else if (sessionType === "longBreak") {
      setSeconds(LongBreak);
    }
    setIsRunning(false);
  }, [sessionType, session, ShortBreak, LongBreak]);

  useEffect(() => {
    let intervalId = useRef<NodeJS.Timeout>();

    if (isRunning) {
      intervalId.current = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            switch (sessionType) {
              case "pomodoro":
                if (theNumberOfSessions === sessionsNumBeforeLongBreak) {
                  clearInterval(intervalId.current!);
                  setIsRunning(false);
                  setTheNumberOfSessions(0);
                  setSessionType("longBreak");
                  if (currentTask !== null) {
                    const updatedTask = {
                      ...currentTask,
                      completedSubTasks: currentTask.completedSubTasks + 1,
                    };
                    setCurrentTask(updatedTask);
                    updateTask(updatedTask);
                    if (updatedTask.completedSubTasks === updatedTask.totalSubTasks) {
                      updatedTask.completed = true;
                      updateTask(updatedTask);
                      setCurrentTask(null);
                      setSessionType("pomodoro");
                      setUpdate((update) => !update);
                      checkSoundRef.current.play();
                      return session;
                    }
                  }
                  checkSoundRef.current.play();
                  setUpdate((update) => !update);
                  return LongBreak;
                } else {
                  clearInterval(intervalId.current!);
                  setIsRunning(false);
                  setTheNumberOfSessions(theNumberOfSessions + 1);
                  setSessionType("shortBreak");
                  if (currentTask !== null) {
                    const updatedTask = {
                      ...currentTask,
                      completedSubTasks: currentTask.completedSubTasks + 1,
                    };
                    setCurrentTask(updatedTask);
                    updateTask(updatedTask);
                    if (updatedTask.completedSubTasks === updatedTask.totalSubTasks) {
                      updatedTask.completed = true;
                      updateTask(updatedTask);
                      setCurrentTask(null);
                      setSessionType("pomodoro");
                      checkSoundRef.current.play();
                      setUpdate((update) => !update);
                      return session;
                    }
                  }
                  checkSoundRef.current.play();
                  setUpdate((update) => !update);
                  return ShortBreak;
                }
              case "shortBreak":
                clearInterval(intervalId.current!);
                setIsRunning(false);
                setSessionType("pomodoro");
                timetostartSoundRef.current.play();
                return session;
              case "longBreak":
                clearInterval(intervalId.current!);
                setIsRunning(false);
                setTheNumberOfSessions(0);
                setSessionType("pomodoro");
                timetostartSoundRef.current.play();
return session;
default:
return currentSeconds - 1;
}
}
return currentSeconds - 1;
});
}, 1000);
}return () => clearInterval(intervalId.current!);}, [isRunning, sessionType, theNumberOfSessions, sessionsNumBeforeLongBreak, currentTask, setCurrentTask, setUpdate, update, session, ShortBreak, LongBreak]);const minutes = useMemo(() => Math.floor(seconds / 60), [seconds]);
const formattedSeconds = useMemo(() => 
${seconds % 60}
.padStart(2, "0"), [seconds]);
const progressWidth = useMemo(() => 100 - (seconds * 100) / session, [seconds, session]);

return (
<>
fill-white font-bold text-sm ${progressWidth === 100 ? "stroke-main100" : "stroke-main100/50"}} value={progressWidth} strokeWidth={15} text={
${minutes}:${formattedSeconds}
} />
{currentTask === null ? ( <> Choose a task ) : ( <> {!isRunning ? ( 
{sessionType === "pomodoro" ? "Start Pomodoro" : sessionType === "shortBreak" ? "Start Short Break" : "Start Long Break"}
 ) : (

{" "}

)}

)}



);
};
export default Timer;

