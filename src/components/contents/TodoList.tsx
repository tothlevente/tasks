import { TodoProps } from "@/interfaces/TodoProps";
import { Button } from "../ui/button";

import Pencil from "../icons/pencil";
import Trash from "../icons/trash";

export default function TodoList({ list }: { list: TodoProps[] }) {
  return (
    <div className="todo-list">
      <div className="todo-list-content">
        {list.map((value, index) => (
          <div
            key={index}
            className="todo-card"
          >
            <div className="repository-card-header">
              <p className="repository-card-title">{value.title}</p>
            </div>
            <div className="repository-card-footer">
              <Button
                variant="default"
                size="icon"
              >
                <Pencil />
              </Button>
              <Button
                variant="destructive"
                size="icon"
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
