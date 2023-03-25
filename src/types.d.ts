declare module "*.mp3" {
  const src: string;
  export default src;
}
interface SqliteDb {
  execute: (query: string, bindValues?: unknown[]) => Promise<QueryResult>;
  query: <T>(query: string, bindValues?: unknown[]) => Promise<T[]>;
}


interface Task {
  id: string;
  name: string;
  description?: string | null;
  dueDate: Date;
  repeatDaily: boolean;
  duration: number; // in minutes
  completedSubTasks: number;
  totalSubTasks: number;
  completed: boolean;
}

interface TaskFromDb {
  id: string;
  name: string;
  description?: string | null;
  due_date: Date;
  repeat_daily: boolean;
  duration: number; // in minutes
  completed_subtasks: number;
  total_subtasks: number;
  completed: boolean;
}




interface Settings {
  pomodoroLength: number; // The length of a pomodoro session in minutes
  shortBreakLength: number; // The length of a short break in minutes
  longBreakLength: number; // The length of a long break in minutes
  numPomodorosBeforeLongBreak: number; // The number of pomodoros before a long break
  autoStartNextPomodoro: boolean; // Whether the app should automatically start the next pomodoro after a break
  // darkMode: boolean; //todo Whether the app should use a dark color scheme
}