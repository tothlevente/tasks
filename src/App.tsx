import { getLocalStorage } from "./controllers/useLocalStorage";
import { ThemeProvider } from "@/components/theme-provider";
import { TodoProps } from "./interfaces/TodoProps";
import { useEffect, useState } from "react";

import TodoList from "./components/contents/TodoList";
import Header from "./components/contents/Header";
import Footer from "./components/contents/Footer";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  useEffect(() => {
    setTodoList(getLocalStorage());
  }, [setTodoList]);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        <Header
          userInput={userInput}
          setUserInput={setUserInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList list={todoList} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
