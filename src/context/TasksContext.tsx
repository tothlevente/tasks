import { TaskProps } from "@/types/TaskProps";
import { createContext, useContext, useState } from "react";

interface tasksContextProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export const tasksContext = createContext<tasksContextProps>({
  tasks: [],
  setTasks: () => {},
});

export const tasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>{children}</tasksContext.Provider>
  );
};

export const usetasks = () => {
  const context = useContext(tasksContext);

  if (!context) {
    throw new Error("usetasks must be used within a TasksProvider");
  }

  return context;
};
