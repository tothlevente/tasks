import {
  getLocalStorage,
  setLocalStorage,
  updateLocalStorage,
} from "./controllers/useLocalStorage";

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

  function addTodo() {
    const id: number = Math.round(Math.random() * 10000000);
    const title: string = userInput;
    const completed: boolean = false;
    const createdAt: Date = new Date();

    const todos = [
      ...todoList,
      {
        id: id,
        title: title,
        completed: completed,
        createdAt: createdAt,
      },
    ];

    setTodoList(todos);
    setLocalStorage(todoList, id, title, completed, createdAt);
    setUserInput("");
  }

  function copyTodo(key: number) {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id == key);

    setUserInput(update[0].title);
  }

  function toggleCompleteTodo(key: number) {
    const values = [...todoList];
    const update = values.map((tudu) =>
      tudu.id === key ? { ...tudu, completed: !tudu.completed } : tudu
    );

    setTodoList(update);
    updateLocalStorage(update);
  }

  function deleteTodo(key: number) {
    const values = [...todoList];
    const update = values.filter((todo) => todo.id !== key);

    setTodoList(update);
    updateLocalStorage(update);
  }

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        <Header
          userInput={userInput}
          setUserInput={setUserInput}
          addTodo={addTodo}
        />
        <TodoList
          list={todoList}
          toggleCompleteTodo={toggleCompleteTodo}
          copyTodo={copyTodo}
          deleteTodo={deleteTodo}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
