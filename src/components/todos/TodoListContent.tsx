import { CircleCheckBigIcon, CircleCheckIcon, CopyIcon, TrashIcon } from "lucide-react";
import { PaletteDropdown } from "../palette/PaletteDropdown";
import { useTheme } from "../themes/ThemeProvider";
import { TodoProps } from "@/interfaces/TodoProps";
import { COLORS } from "@/constants/colors";
import { Button } from "../ui/button";

import CreatedAt from "./CreatedAt";

interface TodoListContentProps {
  list: TodoProps[];
  toggleCompleteTodo: (index: number) => void;
  copyTodo: (index: number) => void;
  deleteTodo: (key: number) => void;
  changeTodoColor: (key: number, color: string) => void;
}

export default function TodoListContent({
  list,
  toggleCompleteTodo,
  copyTodo,
  deleteTodo,
  changeTodoColor,
}: TodoListContentProps) {
  const { theme } = useTheme();

  return (
    <div className="todo-list-content">
      {list.map((value, index) => {
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
}
