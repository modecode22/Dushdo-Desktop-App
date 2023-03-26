import { useState } from "react";
import Counter from "../components/Counter";
import { useSettingStore } from "../store/store";
import SaveSettingsBtn from "../components/SaveSettingsBtn";
interface Settings {
  pomodoroLength: number; // The length of a pomodoro session in minutes
  shortBreakLength: number; // The length of a short break in minutes
  longBreakLength: number; // The length of a long break in minutes
  numPomodorosBeforeLongBreak: number; // The number of pomodoros before a long break
  autoStartNextPomodoro: boolean; // Whether the app should automatically start the next pomodoro after a break
  // darkMode: boolean; //todo Whether the app should use a dark color scheme
}
const Settings = () => {

  const oldSettings = useSettingStore((state)=>state.settings)
  const [settings, setSettings] = useState(oldSettings);
  const [pomodoroLength, setPomodoroLength] = useState(settings.pomodoroLength)
  const [shortBreakLength, setShortBreakLength] = useState(settings.shortBreakLength)
  const [longBreakLength, setLongBreakLength] = useState(settings.longBreakLength)
  const [numPomodorosBeforeLongBreak, setNumPomodorosBeforeLongBreak] = useState(settings.numPomodorosBeforeLongBreak);


  // todo add this fn
    // const [autoStartNextPomodoro, setAutoStartNextPomodoro] = useState(
    //   settings.numPomodorosBeforeLongBreak
    // );

  return (
    <main className="select-none h-full w-full flex justify-center p-5 items-center text-center">
      <main className="shadow-sm shadow-darkform bg-dark100 gap-2 h-[70%] w-full max-w-sm p-5 md:px-10 rounded-xl border border-font/20 flex items-center flex-col justify-between">
        <main className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium select-none">
            Pomodoro Settings
          </h1>
          <section className=" w-full gap-2 p-2 flex flex-col items-center justify-center">
            <section className=" flex gap-5 justify-between items-center ">
              <label className="w-48 px-1 text-sm font-normal text-font/80">
                Time For Pomodoro :
              </label>
              <Counter
                count={pomodoroLength}
                setCount={setPomodoroLength}
                max={160}
                min={20}
                by={5}
              />
            </section>
            <section className=" flex gap-5 justify-between  items-center ">
              <label className="w-48 px-1 text-sm font-normal text-font/80">
                Short Break Time :
              </label>
              <Counter
                count={shortBreakLength}
                setCount={setShortBreakLength}
                max={30}
                min={5}
                by={5}
              />
            </section>
            <section className=" flex gap-5 justify-between  items-center ">
              <label className="w-48 px-1 text-sm font-normal text-font/80">
                Long Break Time :
              </label>
              <Counter
                count={longBreakLength}
                setCount={setLongBreakLength}
                max={120}
                min={15}
                by={5}
              />
            </section>
            <section className=" flex gap-5 justify-between  items-center ">
              <label className="w-48 px-1 text-sm font-normal text-font/80">
                number of sessions before long break:
              </label>
              <Counter
                count={numPomodorosBeforeLongBreak}
                setCount={setNumPomodorosBeforeLongBreak}
                max={30}
                min={1}
                by={1}
              />
            </section>
          </section>
        </main>
        <section className="select-none  w-full flex justify-center items-center">
          <SaveSettingsBtn
            newSettings={{
              pomodoroLength,
              shortBreakLength,
              longBreakLength,
              numPomodorosBeforeLongBreak,
              autoStartNextPomodoro: false,
            }}
          />
        </section>
      </main>
    </main>
  );
}

export default Settings