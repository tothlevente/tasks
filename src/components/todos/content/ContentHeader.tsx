import { TodoProps } from "@/interfaces/TodoProps";

interface ContentHeaderProps {
  value: TodoProps;
}

export const ContentHeader = ({ value }: ContentHeaderProps) => {
  return (
    <div className="todo-card-header">
      <p className={value.completed ? "todo-card-title completed" : "todo-card-title"}>
        {value.title}
      </p>
    </div>
  );
};
