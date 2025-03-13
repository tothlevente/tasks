import { useTodoList } from "@/context/TodoListContext";
import { TodoListNoContent } from "./TodoListNoContent";
import { TodoListContent } from "./TodoListContent";
import { getTodos } from "@/services/todoService";
import { useEffect } from "react";

export const TodoList = () => {
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {
    setTodoList(getTodos());
  }, [setTodoList]);

  return (
    <div className="todo-list">
      {todoList.length === 0 ? <TodoListNoContent /> : <TodoListContent />}
    </div>
  );
};
