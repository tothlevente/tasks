import { TodoProps } from "@/interfaces/TodoProps";

const key = "todos";

export const getLocalStorage = () => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key)!)
    : [];
};

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

export const updateLocalStorage = (todos: TodoProps[]) => {
  localStorage.setItem(key, JSON.stringify(todos));
};

export const deleteLocalStorage = () => {
  localStorage.removeItem(key);
};
