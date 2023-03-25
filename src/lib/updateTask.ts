import Database from "tauri-plugin-sql-api";

export async function updateTask(task: Task): Promise<Task> {
const db = await Database.load("sqlite:test.db");

  await db.execute(
    `UPDATE tasks SET
      name = ?,
      description = ?,
      due_date = ?,
      repeat_daily = ?,
      duration = ?,
      completed_subtasks = ?,
      total_subtasks = ?,
      completed = ?
    WHERE id = ?`,
    [
      task.name,
      task.description,
      task.dueDate,
      task.repeatDaily ? 1 : 0,
      task.duration,
      task.completedSubTasks,
      task.totalSubTasks,
      task.completed ? 1 : 0,
      task.id,
    ]
  );

  return task;
}
