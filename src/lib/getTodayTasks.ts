import Database from "tauri-plugin-sql-api";

export async function getTasksForCurrentDay(): Promise<Task[]> {
  const db = await Database.load("sqlite:test.db");

  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString();
  const query = `
    SELECT * FROM tasks 
    WHERE due_date = ?`;

  const tasks :any = await db.select(query, [currentDateString]);

  
  return tasks.map((task: TaskFromDb):Task => ({
    repeatDaily: Boolean(task.repeat_daily),
    completed: Boolean(task.completed),
    completedSubTasks:task.completed_subtasks,
    description:task.description,
    id:task.id,
    dueDate:task.due_date,
    duration:task.duration,
    name:task.name,
    totalSubTasks:task.total_subtasks,
  }));
}

