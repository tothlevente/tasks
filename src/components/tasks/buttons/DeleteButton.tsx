import { updateTasks } from "@/services/tasksService";
import { useTasks } from "@/context/TasksContext";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { tasks, setTasks } = useTasks();

  const handleDeleteTask = () => {
    const values = [...tasks];
    const update = values.filter((task) => task.id !== id);

    setTasks(update);
    updateTasks(update);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="task-card-footer-button"
      onClick={() => {
        handleDeleteTask();
      }}
    >
      <TrashIcon />
    </Button>
  );
};
