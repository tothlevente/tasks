import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { TodoListProvider } from "./context/TodoListContext";
import { TodoList } from "./components/todos/TodoList";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { COLORS } from "./constants/colors";
import { Suspense, useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");

  const [defaultColor, setDefaultColor] = useState<string>(
    COLORS.find((color) => color.name === "gray")!.colors.default
  );

  return (
    <Suspense fallback="loading">
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        <TodoListProvider>
          <div className="site-wrapper">
            <Header
              userInput={userInput}
              setUserInput={setUserInput}
              defaultColor={defaultColor}
              setDefaultColor={setDefaultColor}
            />
            <TodoList setUserInput={setUserInput} />
            <Footer />
          </div>
        </TodoListProvider>
      </ThemeProvider>
    </Suspense>
  );
}
