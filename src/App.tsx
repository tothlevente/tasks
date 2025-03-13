import { DefaultColorProvider } from "./context/DefaultColorContext";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { UserInputProvider } from "./context/UserInputContext";
import { TodoListProvider } from "./context/TodoListContext";
import { TodoList } from "./components/todos/TodoList";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        <TodoListProvider>
          <DefaultColorProvider>
            <UserInputProvider>
              <div className="site-wrapper">
                <Header />
                <TodoList />
                <Footer />
              </div>
            </UserInputProvider>
          </DefaultColorProvider>
        </TodoListProvider>
      </ThemeProvider>
    </Suspense>
  );
}
