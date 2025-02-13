import TodoListNoContent from "../TodoListNoContent";
import TodoListContent from "../TodoListContent";

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
