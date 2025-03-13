import { useTodoList } from "@/context/TodoListContext";
import { updateTodos } from "@/services/todoService";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { todoList, setTodoList } = useTodoList();

  const handleDeleteTodo = () => {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id !== id);

    setTodoList(update);
    updateTodos(update);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="todo-card-footer-button"
      onClick={() => {
        handleDeleteTodo();
      }}
    >
      <TrashIcon />
    </Button>
  );
};
