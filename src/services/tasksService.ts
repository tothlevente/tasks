import { TaskProps } from "@/types/TaskProps";

/**
 * A constant representing the storage key used to persist tasks.
 * This key is utilized to store and retrieve task data from a storage mechanism.
 */
const key = "tasks-list";

/**
 * Retrieves the list of tasks from local storage.
 *
 * @returns {any[]} An array of tasks if they exist in local storage, otherwise an empty array.
 */
export const getTasks = () => {
  return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)!) : [];
};

/**
 * Creates a new task and stores it in the local storage by appending it to the existing list of tasks.
 *
 * @param tasks - The current list of tasks.
 * @param id - The unique identifier for the new task.
 * @param title - The title of the new task.
 * @param color - The color associated with the new task.
 * @param completed - The completion status of the new task.
 * @param createdAt - The date and time when the new task was created.
 */
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

/**
 * Updates the list of tasks in the local storage.
 *
 * @param tasks - An array of task objects to be stored in local storage.
 *
 * @remarks
 * This function serializes the provided tasks array into a JSON string
 * and saves it in the local storage under a specific key.
 * Ensure that the `key` variable is defined and accessible in the scope.
 */
export const updateTasks = (tasks: TaskProps[]) => {
  localStorage.setItem(key, JSON.stringify(tasks));
};

/**
 * Deletes tasks from local storage by removing the item associated with the specified key.
 *
 * @remarks
 * This function assumes that the `key` variable is defined and accessible in the scope where this function is used.
 * Ensure that the `key` variable is properly initialized before calling this function.
 */
export const deleteTasks = () => {
  localStorage.removeItem(key);
};
