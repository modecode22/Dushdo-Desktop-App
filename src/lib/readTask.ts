import Database from "tauri-plugin-sql-api";

export async function readTask(id: string): Promise<Task | null> {
const db = await Database.load("sqlite:test.db");

  const result:any = await db.select(`SELECT * FROM tasks WHERE id = ?`, [id]);

  if (result.length === 0) {
    return null;
  }

  const task = result[0];
  task.dueDate = new Date(task.dueDate);
  task.repeatDaily = Boolean(task.repeatDaily);
  task.completed = Boolean(task.completed);

  return task;
}
