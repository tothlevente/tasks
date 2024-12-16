import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/contents/Header";
import TodoList from "./components/contents/TodoList";
import Footer from "./components/contents/Footer";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState();

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
