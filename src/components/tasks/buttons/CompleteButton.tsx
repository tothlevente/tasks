import { CircleCheckBigIcon, CircleCheckIcon } from "lucide-react";
import { updateTasks } from "@/services/todoService";
import { useTasks } from "@/context/TasksContext";
import { Button } from "@/components/ui/button";
import { TaskProps } from "@/types/TaskProps";

interface CompleteButtonProps {
  value: TaskProps;
}

export const CompleteButton = ({ value }: CompleteButtonProps) => {
  const { tasks, setTasks } = useTasks();

  const handleCompleteTask = () => {
    const values = [...tasks];
    const update = values.map((task) =>
      task.id === value.id ? { ...task, completed: !task.completed } : task
    );

    setTasks(update);
    updateTasks(update);
  };

  return (
    <span>
      {value.completed ? (
        <Button
          variant="outline"
          size="icon"
          className="todo-card-footer-button circle-check-button"
          onClick={() => {
            handleCompleteTask();
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
            handleCompleteTask();
          }}
        >
          <CircleCheckIcon />
        </Button>
      )}
    </span>
  );
};
