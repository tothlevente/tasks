import { ChangeColorDropdown } from "../dropdowns/ChangeColorDropdown";
import { CompleteButton } from "../buttons/CompleteButton";
import { DeleteButton } from "../buttons/DeleteButton";
import { CopyButton } from "../buttons/CopyButton";
import { CreatedAt } from "../metadata/CreatedAt";
import { TaskProps } from "@/types/TaskProps";

interface ContentFooterProps {
  value: TaskProps;
}

export const ContentFooter = ({ value }: ContentFooterProps) => {
  return (
    <div className="todo-card-footer">
      <div className={value.completed ? "completed" : ""}>
        <CreatedAt value={value.createdAt} />
      </div>
      <div>
        <CompleteButton value={value} />
        <ChangeColorDropdown value={value} />
        <CopyButton id={value.id} />
        <DeleteButton id={value.id} />
      </div>
    </div>
  );
};
