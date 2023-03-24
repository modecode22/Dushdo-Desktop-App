import { create } from "zustand";
import {  persist } from "zustand/middleware";

interface SideBarState {
  open: boolean;
  toggle: () => void;
}

export const useSideBarStore = create<SideBarState>()(
    persist(
      (set,get ) => ({
        open: false,
        toggle: () =>{
            const open = get().open
            open ? set({ open: false }) : set({ open: true }); 
        }
       ,
      }),
      {
        name: "sidebar",
      }
    )
);

interface SettingsState {
  settings: Settings;
  update: (newSet:Settings) => void;
}

function saveSettings(settings: Settings): void {
  localStorage.setItem("focalist-settings", JSON.stringify(settings));
}
function getSettings(): Settings {
  const storedSettings = localStorage.getItem("focalist-settings");
  if (storedSettings) {
    try {
      const savedSettings = JSON.parse(storedSettings) as Settings;
      return savedSettings;
    } catch (error) {
      console.error(`Error parsing stored settings: ${error}`);
    }
  }
  
  const defaultSettings: Settings = {
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    numPomodorosBeforeLongBreak: 4,
    autoStartNextPomodoro: false,
  };
  
  localStorage.setItem("focalist-settings", JSON.stringify(defaultSettings));
  return defaultSettings;
}
export const useSettingStore = create<SettingsState>()(
  persist(
    (set) => {
      const initsettings = getSettings();

      return {
        settings: initsettings,
        update: (newSettings: Settings) => {
          saveSettings(newSettings);
          set({ settings: newSettings });
        },
      };
    },
    {
      name: "settings",
    }
  )
);





interface TimerState {
  currentTask: TaskResult|null;
  numberOfSessions: number;
  TimerState: "pomodoro" | "shortBreak" | "longBreak";
  finish: ({
    numberOfSessions,
    TimerState,
  }: {
    numberOfSessions: number;
    TimerState: "pomodoro" | "shortBreak" | "longBreak";
  }) => void;
}




export const useCurrentStore = create<TimerState>()(
  persist(
    (set) => {
      return {
        currentTask:null ,
        TimerState: "pomodoro",
        numberOfSessions: getSettings().numPomodorosBeforeLongBreak,
        finish: ({
          numberOfSessions,
          TimerState,
        }: {
          numberOfSessions: number;
          TimerState: "pomodoro" | "shortBreak" | "longBreak";
        }) => {
          set({
            numberOfSessions,
            TimerState,
          });
        },
      };
    },
    {
      name: "currentTask",
    }
  )
);




