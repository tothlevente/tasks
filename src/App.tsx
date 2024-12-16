import { ThemeProvider } from "@/components/theme-provider";

import TodoList from "./components/contents/TodoList";
import Header from "./components/contents/Header";
import Footer from "./components/contents/Footer";
import ListProps from "./interfaces/ListProps";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState<ListProps[]>([]);

  console.log(todoList);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Header />
      <TodoList />
      <Footer />
    </ThemeProvider>
  );
}
