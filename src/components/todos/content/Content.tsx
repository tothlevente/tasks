import { useTodoList } from "@/context/TodoListContext";
import { useTheme } from "../../themes/ThemeProvider";
import { ContentFooter } from "./ContentFooter";
import { ContentHeader } from "./ContentHeader";
import { COLORS } from "@/constants/colors";

export const Content = () => {
  const { todoList } = useTodoList();
  const { theme } = useTheme();

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
            <ContentHeader value={value} />
            <ContentFooter value={value} />
          </div>
        );
      })}
    </div>
  );
};
