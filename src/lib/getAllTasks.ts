import Database, { QueryResult } from "tauri-plugin-sql-api";


export async function getAllTasks(): Promise<Task[]> {
  const db = await Database.load("sqlite:test.db");

  const tasks: any = await db.select("SELECT * FROM tasks");

  return tasks.map((task: TaskFromDb):Task=>({
    repeatDaily: Boolean(task.repeat_daily),
    completed: Boolean(task.completed),
    completedSubTasks: task.completed_subtasks,
    description: task.description,
    id: task.id,
    dueDate: task.due_date,
    duration: task.duration,
    name: task.name,
    totalSubTasks: task.total_subtasks,
  }));
}

