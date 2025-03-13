import { useTodoList } from "@/context/TodoListContext";
import { getTodos } from "@/services/todoService";
import { NoContent } from "./content/NoContent";
import { Content } from "./content/Content";
import { useEffect } from "react";

export const TodoList = () => {
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {
    setTodoList(getTodos());
  }, [setTodoList]);

  return (
    <div className="todo-list">{todoList.length === 0 ? <NoContent /> : <Content />}</div>
  );
};
