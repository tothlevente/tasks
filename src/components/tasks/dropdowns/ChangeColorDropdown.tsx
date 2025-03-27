import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PaintBucketIcon, PaletteIcon } from "lucide-react";
import { updateTasks } from "@/services/tasksService";
import { Colors, COLORS } from "@/constants/colors";
import { useTasks } from "@/context/TasksContext";
import { TaskProps } from "@/types/TaskProps";
import { Button } from "../../ui/button";

interface ChangeColorDropdownProps {
  value: TaskProps;
}

export const ChangeColorDropdown = ({ value }: ChangeColorDropdownProps) => {
  const { tasks, setTasks } = useTasks();

  function handleColorChange(color: Colors) {
    const values = [...tasks];
    const update = values.map((task) =>
      task.id === value.id ? { ...task, color: color.colors.default } : task
    );

    setTasks(update);
    updateTasks(update);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="task-card-footer-button"
          disabled={value.completed}
        >
          <PaletteIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        className="min-w-5"
      >
        {COLORS.map((color, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleColorChange(color)}
          >
            <PaintBucketIcon color={color.colors.default} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
