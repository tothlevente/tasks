import { useUserInput } from "@/context/UserInputContext";
import { useTodoList } from "@/context/TodoListContext";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

interface CopyButtonProps {
  id: number;
}

export const CopyButton = ({ id }: CopyButtonProps) => {
  const { setUserInput } = useUserInput();
  const { todoList } = useTodoList();

  const handleCopyTodo = () => {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id == id);

    setUserInput(update[0].title);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="todo-card-footer-button"
      onClick={() => {
        handleCopyTodo();
      }}
    >
      <CopyIcon />
    </Button>
  );
};
