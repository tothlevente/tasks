import { useUserInput } from "@/context/UserInputContext";
import { useTasks } from "@/context/TasksContext";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

interface CopyButtonProps {
  id: number;
}

export const CopyButton = ({ id }: CopyButtonProps) => {
  const { setUserInput } = useUserInput();
  const { tasks } = useTasks();

  const handleCopyTask = () => {
    const values = [...tasks];
    const update = values.filter((task) => task.id == id);

    setUserInput(update[0].title);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="todo-card-footer-button"
      onClick={() => {
        handleCopyTask();
      }}
    >
      <CopyIcon />
    </Button>
  );
};
