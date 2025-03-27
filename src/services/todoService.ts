import { TaskProps } from "@/types/TaskProps";

const key = "tasks";

export const getTasks = () => {
  return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)!) : [];
};

export const createTasks = (
  tasks: TaskProps[],
  id: number,
  title: string,
  color: string,
  completed: boolean,
  createdAt: Date
) => {
  localStorage.setItem(
    key,
    JSON.stringify([
      ...tasks,
      {
        id: id,
        title: title,
        color: color,
        completed: completed,
        createdAt: createdAt,
      },
    ])
  );
};

export const updateTasks = (tasks: TaskProps[]) => {
  localStorage.setItem(key, JSON.stringify(tasks));
};

export const deleteTasks = () => {
  localStorage.removeItem(key);
};
