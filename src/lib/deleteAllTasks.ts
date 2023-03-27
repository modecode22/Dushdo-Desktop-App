import Database from "tauri-plugin-sql-api";

export async function deleteAllTasks() {
  const db = await Database.load("sqlite:test.db");

  await db.execute("DELETE FROM tasks;");
}
