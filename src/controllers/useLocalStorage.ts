import { TodoProps } from "@/interfaces/TodoProps";

export const getLocalStorage = () => {
  return localStorage.getItem("todos") !== null
    ? JSON.parse(localStorage.getItem("todos")!)
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
    "todos",
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
