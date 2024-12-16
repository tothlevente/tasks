import InputProps from "@/interfaces/InputProps";
import AddTodoDialog from "../add-todo-dialog";
import HeaderTitle from "../header-title";

import { ModeToggle } from "../mode-toggle";

export default function Header({
  userInput,
  setUserInput,
  todoList,
  setTodoList,
}: InputProps) {
  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <AddTodoDialog
          userInput={userInput}
          setUserInput={setUserInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <ModeToggle />
      </div>
    </div>
  );
}
