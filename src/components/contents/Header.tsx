import AddTodoDialog from "../add-todo-dialog";
import HeaderTitle from "../header-title";

import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <AddTodoDialog />
        <ModeToggle />
      </div>
    </div>
  );
}
