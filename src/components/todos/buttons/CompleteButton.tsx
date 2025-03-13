import { CircleCheckBigIcon, CircleCheckIcon } from "lucide-react";
import { useTodoList } from "@/context/TodoListContext";
import { updateTodos } from "@/services/todoService";
import { TodoProps } from "@/interfaces/TodoProps";
import { Button } from "@/components/ui/button";

interface CompleteButtonProps {
  value: TodoProps;
}

export const CompleteButton = ({ value }: CompleteButtonProps) => {
  const { todoList, setTodoList } = useTodoList();

  const handleCompleteTodo = () => {
    const values = [...todoList];
    const update = values.map((todo) =>
      todo.id === value.id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodoList(update);
    updateTodos(update);
  };

  return (
    <span>
      {value.completed ? (
        <Button
          variant="outline"
          size="icon"
          className="todo-card-footer-button circle-check-button"
          onClick={() => {
            handleCompleteTodo();
          }}
        >
          <CircleCheckBigIcon />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="todo-card-footer-button"
          onClick={() => {
            handleCompleteTodo();
          }}
        >
          <CircleCheckIcon />
        </Button>
      )}
    </span>
  );
};
