import TodoListNoContent from "../todo-list-no-content";
import TodoListContent from "../todo-list-content";

import { TodoProps } from "@/interfaces/TodoProps";

export default function TodoList({
  list,
  toggleCompleteTodo,
  copyTodo,
  deleteTodo,
}: {
  list: TodoProps[];
  toggleCompleteTodo: (index: number) => void;
  copyTodo: (index: number) => void;
  deleteTodo: (key: number) => void;
}) {
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
        />
      )}
    </div>
  );
}
