import { SelectedLanguageProvider } from "./context/SelectedLanguageContext";
import { DefaultColorProvider } from "./context/DefaultColorContext";
import { UserInputProvider } from "./context/UserInputContext";
import { TasksList } from "./components/tasks/TasksList";
import { ThemeProvider } from "@/context/ThemeContext";
import { TasksProvider } from "./context/TasksContext";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider defaultTheme="light">
        <TasksProvider>
          <SelectedLanguageProvider>
            <DefaultColorProvider>
              <UserInputProvider>
                <div className="site-wrapper">
                  <Header />
                  <TasksList />
                  <Footer />
                </div>
              </UserInputProvider>
            </DefaultColorProvider>
          </SelectedLanguageProvider>
        </TasksProvider>
      </ThemeProvider>
    </Suspense>
  );
}
