import { useDefaultColor } from "@/context/DefaultColorContext";
import { useUserInput } from "@/context/UserInputContext";
import { useTodoList } from "@/context/TodoListContext";
import { createTodo } from "@/services/todoService";
import { ModeToggle } from "../themes/ModeToggle";
import { Settings } from "../settings/Settings";
import { CirclePlusIcon } from "lucide-react";
import { ContentInput } from "./ContentInput";
import { HeaderTitle } from "./HeaderTitle";
import { Button } from "../ui/button";

export const Header = () => {
  const { userInput, setUserInput } = useUserInput();
  const { todoList, setTodoList } = useTodoList();
  const { defaultColor } = useDefaultColor();

  const maxLength = 50;

  function handleAddTodo() {
    const id: number = Math.round(Math.random() * 10000000);
    const title: string = userInput;
    const completed: boolean = false;
    const createdAt: Date = new Date();
    const color = defaultColor;

    const todos = [
      ...todoList,
      {
        id: id,
        title: title,
        color: color,
        completed: completed,
        createdAt: createdAt,
      },
    ];

    setTodoList(todos);
    createTodo(todoList, id, title, color, completed, createdAt);
    setUserInput("");
  }

  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <ContentInput
          addTodo={handleAddTodo}
          maxLength={maxLength}
        />
        <div className="header-min-container">
          <Button
            variant="outline"
            size="icon"
            style={{ marginRight: "5px" }}
            onClick={() => handleAddTodo()}
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
