import { TodoProps } from "@/interfaces/TodoProps";
import { Button } from "../ui/button";

import CircleCheckMin from "../icons/circle-check-min";
import CircleCheck from "../icons/circle-check";
import Trash from "../icons/trash";
import Copy from "../icons/copy";

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
      <div className="todo-list-content">
        {list.map((value, index) => (
          <div
            key={index}
            className="todo-card"
          >
            <div className="todo-card-header">
              <p
                className={
                  value.completed
                    ? "todo-card-title completed"
                    : "todo-card-title"
                }
              >
                {value.title}
              </p>
            </div>
            <div className="todo-card-footer">
              {value.completed ? (
                <Button
                  variant="outline"
                  size="icon"
                  className="circle-check-button"
                  onClick={() => {
                    toggleCompleteTodo(value.id);
                  }}
                >
                  <CircleCheck />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    toggleCompleteTodo(value.id);
                  }}
                >
                  <CircleCheckMin />
                </Button>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  copyTodo(value.id);
                }}
              >
                <Copy />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => deleteTodo(value.id)}
              >
                <Trash />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
