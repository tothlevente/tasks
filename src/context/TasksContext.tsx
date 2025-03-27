import { TaskProps } from "@/types/TaskProps";
import { createContext, useContext, useState } from "react";

interface TasksContextProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => {},
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }

  return context;
};
