import CirclePlus from "../icons/circle-plus";
import HeaderTitle from "../header-title";

import { TodoProps } from "@/interfaces/TodoProps";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Header({
  userInput,
  setUserInput,
  todoList,
  setTodoList,
}: {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}) {
  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: Math.round(Math.random() * 10000000),
        title: userInput,
        completed: false,
        createdAt: new Date(),
      },
    ]);

    setUserInput("");
  };

  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <Input
          type="text"
          placeholder="Add your todo here. Click save when you're done."
          value={userInput}
          onChange={(item) => {
            setUserInput(item.target.value);
          }}
        />
        <Button
          variant="outline"
          size="icon"
          style={{ marginRight: "5px" }}
          onClick={() => addTodo()}
          disabled={userInput.length === 0}
        >
          <CirclePlus />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
