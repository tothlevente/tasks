import { TaskProps } from "@/types/TaskProps";

interface ContentHeaderProps {
  value: TaskProps;
}

export const ContentHeader = ({ value }: ContentHeaderProps) => {
  return (
    <div className="task-card-header">
      <p className={value.completed ? "task-card-title completed" : "task-card-title"}>
        {value.title}
      </p>
    </div>
  );
};
