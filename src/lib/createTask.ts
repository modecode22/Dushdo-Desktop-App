import Database from "tauri-plugin-sql-api";

export async function createTask(task: Task): Promise<Task> {
   const db = await Database.load("sqlite:test.db");


    await db.execute(
      "INSERT INTO tasks ( id, name, description, due_date, repeat_daily, duration, completed_subtasks, total_subtasks, completed ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        task.id,
        task.name,
        task.description,
        task.dueDate.toLocaleDateString(),
        task.repeatDaily ? 1 : 0,
        task.duration,
        task.completedSubTasks,
        task.totalSubTasks,
        task.completed ? 1 : 0,
      ]
    );

  return task;
}
