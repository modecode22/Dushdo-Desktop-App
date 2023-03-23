import Database, { QueryResult } from "tauri-plugin-sql-api";

export async function getAllTasks(): Promise<Task[]> {
  const db = await Database.load("sqlite:test.db");

  const tasks: any = await db.select("SELECT * FROM tasks");

 
 

  return tasks.map((task:Task) => ({
    ...task,
    dueDate: new Date(task.dueDate),
    repeatDaily: Boolean(task.repeatDaily),
    completed: Boolean(task.completed),
  }));
}
