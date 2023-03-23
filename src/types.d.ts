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
interface TaskResult {
  id: string;
  name: string;
  description: string;
  due_date: Date;
  repeatDaily: boolean;
  duration: number;
  completed_subtasks: number;
  total_subtasks: number;
  completed: boolean;
}