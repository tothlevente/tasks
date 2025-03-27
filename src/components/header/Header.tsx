import { useDefaultColor } from "@/context/DefaultColorContext";
import { CirclePlusIcon, NotepadTextIcon } from "lucide-react";
import { useUserInput } from "@/context/UserInputContext";
import { createTasks } from "@/services/tasksService";
import { useTasks } from "@/context/TasksContext";
import { ModeToggle } from "../themes/ModeToggle";
import { Settings } from "../settings/Settings";
import { HeaderInput } from "./HeaderInput";
import { Button } from "../ui/button";

export const Header = () => {
  const { userInput, setUserInput } = useUserInput();
  const { defaultColor } = useDefaultColor();
  const { tasks, setTasks } = useTasks();

  const maxLength = 50;

  function handleAddTasks() {
    const id: number = Math.round(Math.random() * 10000000);
    const title: string = userInput;
    const completed: boolean = false;
    const createdAt: Date = new Date();
    const color = defaultColor;

    const taskValue = [
      ...tasks,
      {
        id: id,
        title: title,
        color: color,
        completed: completed,
        createdAt: createdAt,
      },
    ];

    setTasks(taskValue);
    createTasks(tasks, id, title, color, completed, createdAt);
    setUserInput("");
  }

  return (
    <div className="header">
      <div className="header-title">
        <NotepadTextIcon />
        <p>Tasks</p>
      </div>
      <div className="header-container">
        <HeaderInput
          addTasks={handleAddTasks}
          maxLength={maxLength}
        />
        <div className="header-min-container">
          <Button
            variant="outline"
            size="icon"
            style={{ marginRight: "5px" }}
            onClick={() => handleAddTasks()}
            disabled={userInput.length === 0 || userInput.length > maxLength}
          >
            <CirclePlusIcon />
          </Button>
          <Settings />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
