import { TodoProps } from "@/interfaces/TodoProps";
import { createContext, useContext, useState } from "react";

interface TodoListContextProps {
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  setTodoList: () => {},
});

export const TodoListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = () => {
  const context = useContext(TodoListContext);

  if (!context) {
    throw new Error("useTodoList must be used within a TodoListProvider");
  }

  return context;
};
