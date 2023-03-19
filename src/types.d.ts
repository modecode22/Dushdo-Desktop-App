declare module "*.mp3" {
  const src: string;
  export default src;
}


interface Task {
  id: string;
  name: string;
  description?: string;
  dueDate: Date;
  repeatDaily: boolean;
  duration: number; // in minutes
  subTasks?: SubTask[];
  completedSubTasks: number;
  totalSubTasks: number;
  completed: boolean;
}

interface SubTask {
  id: string;
  name: string;
  description?: string;
  duration: number; // in minutes
  completed: boolean;
}