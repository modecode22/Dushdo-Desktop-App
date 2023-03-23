import Database from "tauri-plugin-sql-api";

export async function deleteTask(id: string): Promise<void> {
  const db = await Database.load("sqlite:test.db");

  await db.execute("DELETE FROM tasks WHERE id = ?", [id]);
}
