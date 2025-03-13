import { useTodoList } from "@/context/TodoListContext";
import { TodoListNoContent } from "./TodoListNoContent";
import { TodoListContent } from "./TodoListContent";
import { getTodos } from "@/services/todoService";
import { useEffect } from "react";

interface TodoListProps {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoList = ({ setUserInput }: TodoListProps) => {
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {
    setTodoList(getTodos());
  }, [setTodoList]);

  return (
    <div className="todo-list">
      {todoList.length === 0 ? (
        <TodoListNoContent />
      ) : (
        <TodoListContent setUserInput={setUserInput} />
      )}
    </div>
  );
};
