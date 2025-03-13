import { CircleCheckBigIcon, CircleCheckIcon, CopyIcon, TrashIcon } from "lucide-react";
import { PaletteDropdown } from "../palette/PaletteDropdown";
import { useUserInput } from "@/context/UserInputContext";
import { useTodoList } from "@/context/TodoListContext";
import { updateTodos } from "@/services/todoService";
import { useTheme } from "../themes/ThemeProvider";
import { COLORS } from "@/constants/colors";
import { CreatedAt } from "./CreatedAt";
import { Button } from "../ui/button";

export const TodoListContent = () => {
  const { todoList, setTodoList } = useTodoList();
  const { setUserInput } = useUserInput();
  const { theme } = useTheme();

  function copyTodo(key: number) {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id == key);

    setUserInput(update[0].title);
  }

  function toggleCompleteTodo(key: number) {
    const values = [...todoList];
    const update = values.map((todo) =>
      todo.id === key ? { ...todo, completed: !todo.completed } : todo
    );

    setTodoList(update);
    updateTodos(update);
  }

  function changeTodoColor(key: number, color: string) {
    const values = [...todoList];
    const update = values.map((todo) =>
      todo.id === key ? { ...todo, color: color } : todo
    );

    setTodoList(update);
    updateTodos(update);
  }

  function deleteTodo(key: number) {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id !== key);

    setTodoList(update);
    updateTodos(update);
  }

  return (
    <div className="todo-list-content">
      {todoList.map((value, index) => {
        const lightColor = COLORS.find((color) => color.colors.default === value.color)!
          .colors.light;
        const darkColor = COLORS.find((color) => color.colors.default === value.color)!
          .colors.dark;

        const completedColor =
          theme === "light"
            ? COLORS.find((color) => color.name === "gray")!.colors.light
            : COLORS.find((color) => color.name === "gray")!.colors.dark;

        const themeColor = theme === "light" ? lightColor : darkColor;
        const backgroundColor = value.completed ? completedColor : themeColor;

        return (
          <div
            key={index}
            className="todo-card"
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <div className="todo-card-header">
              <p
                className={value.completed ? "todo-card-title completed" : "todo-card-title"}
              >
                {value.title}
              </p>
            </div>
            <div className="todo-card-footer">
              <div className={value.completed ? "completed" : ""}>
                <CreatedAt value={value.createdAt} />
              </div>
              <div>
                {value.completed ? (
                  <Button
                    variant="outline"
                    size="icon"
                    className="todo-card-footer-button circle-check-button"
                    onClick={() => {
                      toggleCompleteTodo(value.id);
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
                      toggleCompleteTodo(value.id);
                    }}
                  >
                    <CircleCheckIcon />
                  </Button>
                )}
                <PaletteDropdown
                  changeTodoColor={changeTodoColor}
                  id={value.id}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="todo-card-footer-button"
                  onClick={() => {
                    copyTodo(value.id);
                  }}
                >
                  <CopyIcon />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="todo-card-footer-button"
                  onClick={() => {
                    deleteTodo(value.id);
                  }}
                >
                  <TrashIcon />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
