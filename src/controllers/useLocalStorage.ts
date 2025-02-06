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
export const getLocalStorage = () => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key)!)
    : [];
};

/**
 * Sets the local storage with the provided todo items and a new todo item.
 *
 * @param {TodoProps[]} todos - The existing list of todo items.
 * @param {number} id - The unique identifier for the new todo item.
 * @param {string} title - The title of the new todo item.
 * @param {boolean} completed - The completion status of the new todo item.
 * @param {Date} createdAt - The creation date of the new todo item.
 */
export const setLocalStorage = (
  todos: TodoProps[],
  id: number,
  title: string,
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
export const updateLocalStorage = (todos: TodoProps[]) => {
  localStorage.setItem(key, JSON.stringify(todos));
};

/**
 * Deletes an item from the local storage.
 *
 * @param {string} key - The key of the item to be removed from local storage.
 */
export const deleteLocalStorage = () => {
  localStorage.removeItem(key);
};
