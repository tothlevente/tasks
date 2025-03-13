import { useTodoList } from "@/context/TodoListContext";
import { createTodo } from "@/services/todoService";
import { ModeToggle } from "../themes/ModeToggle";
import { Settings } from "../settings/Settings";
import { CirclePlusIcon } from "lucide-react";
import { ContentInput } from "./ContentInput";
import { HeaderTitle } from "./HeaderTitle";
import { Button } from "../ui/button";

interface HeaderProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  defaultColor: string;
  setDefaultColor: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({
  userInput,
  setUserInput,
  defaultColor,
  setDefaultColor,
}: HeaderProps) => {
  const { todoList, setTodoList } = useTodoList();

  function addTodo() {
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
          userInput={userInput}
          setUserInput={setUserInput}
          addTodo={addTodo}
        />
        <div className="header-min-container">
          <Button
            variant="outline"
            size="icon"
            style={{ marginRight: "5px" }}
            onClick={() => addTodo()}
            disabled={userInput.length === 0}
          >
            <CirclePlusIcon />
          </Button>
          <Settings
            defaultColor={defaultColor}
            setDefaultColor={setDefaultColor}
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
