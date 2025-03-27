import { TaskProps } from "@/types/TaskProps";

interface ContentHeaderProps {
  value: TaskProps;
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
