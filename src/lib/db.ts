import Database from "tauri-plugin-sql-api";

export async function setupDatabase() {
const db = await Database.load("sqlite:test.db");

  await db.execute(
    `CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      name TEXT,
      description TEXT,
      due_date TEXT,
      repeat_daily INTEGER,
      duration INTEGER,
      completed_subtasks INTEGER,
      total_subtasks INTEGER,
      completed INTEGER
    );`
  );
}
