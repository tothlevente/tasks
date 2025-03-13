import { TodoListNoContent } from "./TodoListNoContent";
import { TodoListContent } from "./TodoListContent";
import { TodoProps } from "@/interfaces/TodoProps";

interface TodoListProps {
  list: TodoProps[];
  toggleCompleteTodo: (index: number) => void;
  copyTodo: (index: number) => void;
  deleteTodo: (key: number) => void;
  changeTodoColor: (key: number, color: string) => void;
}

export const TodoList = ({
  list,
  toggleCompleteTodo,
  copyTodo,
  deleteTodo,
  changeTodoColor,
}: TodoListProps) => {
  return (
    <div className="todo-list">
      {list.length === 0 ? (
        <TodoListNoContent />
      ) : (
        <TodoListContent
          list={list}
          toggleCompleteTodo={toggleCompleteTodo}
          copyTodo={copyTodo}
          deleteTodo={deleteTodo}
          changeTodoColor={changeTodoColor}
        />
      )}
    </div>
  );
};
