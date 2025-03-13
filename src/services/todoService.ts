import { TodoProps } from "@/interfaces/TodoProps";

/**
 * The key used to store and retrieve the to-do list items from local storage.
 */
const key = "todos";

/**
 * Retrieves an item from local storage and parses it as JSON.
 *
 * @returns {any[]} The parsed JSON object if the item exists, otherwise an empty array.
 */
export const getTodos = () => {
  return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)!) : [];
};

/**
 * Sets the local storage with the provided todo items and a new todo item.
 *
 * @param todos - The current list of todo items.
 * @param id - The unique identifier for the new todo item.
 * @param title - The title of the new todo item.
 * @param color - The color associated with the new todo item.
 * @param completed - The completion status of the new todo item.
 * @param createdAt - The creation date of the new todo item.
 */
export const createTodo = (
  todos: TodoProps[],
  id: number,
  title: string,
  color: string,
  completed: boolean,
  createdAt: Date
) => {
  localStorage.setItem(
    key,
    JSON.stringify([
      ...todos,
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
 * Updates the local storage with the provided list of todos.
 *
 * @param {TodoProps[]} todos - The array of todo items to be stored in local storage.
 */
export const updateTodos = (todos: TodoProps[]) => {
  localStorage.setItem(key, JSON.stringify(todos));
};

/**
 * Deletes an item from the local storage.
 *
 * @param {string} key - The key of the item to be removed from local storage.
 */
export const deleteTodos = () => {
  localStorage.removeItem(key);
};
