import { getTodos, createTodo, updateTodos } from "./services/todoService";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { TodoList } from "./components/todos/TodoList";
import { Suspense, useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { TodoProps } from "./interfaces/TodoProps";
import { COLORS } from "./constants/colors";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [defaultColor, setDefaultColor] = useState<string>(
    COLORS.find((color) => color.name === "gray")!.colors.default
  );

  useEffect(() => {
    setTodoList(getTodos());
  }, [setTodoList]);

  function addTodo() {
    const id: number = Math.round(Math.random() * 10000000);
    const title: string = userInput;
    const completed: boolean = false;
    const createdAt: Date = new Date();
    const color = defaultColor;

    const todos = [
      ...todoList,
      {
        id: id,
        title: title,
        color: color,
        completed: completed,
        createdAt: createdAt,
      },
    ];

    setTodoList(todos);
    createTodo(todoList, id, title, color, completed, createdAt);
    setUserInput("");
  }

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
    <Suspense fallback="loading">
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        <div className="site-wrapper">
          <Header
            list={todoList}
            setList={setTodoList}
            userInput={userInput}
            setUserInput={setUserInput}
            addTodo={addTodo}
            defaultColor={defaultColor}
            setDefaultColor={setDefaultColor}
          />
          <TodoList
            list={todoList}
            toggleCompleteTodo={toggleCompleteTodo}
            copyTodo={copyTodo}
            deleteTodo={deleteTodo}
            changeTodoColor={changeTodoColor}
          />
          <Footer />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}
