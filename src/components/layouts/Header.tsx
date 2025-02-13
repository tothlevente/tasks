import ContentInput from "../ContentInput";
import HeaderTitle from "../HeaderTitle";
import Settings from "../Settings";

import { TodoProps } from "@/interfaces/TodoProps";
import { CirclePlusIcon } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

export default function Header({
  list,
  setList,
  userInput,
  setUserInput,
  addTodo,
}: {
  list: TodoProps[];
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}) {
  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <ContentInput
          userInput={userInput}
          setUserInput={setUserInput}
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
            list={list}
            setList={setList}
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
