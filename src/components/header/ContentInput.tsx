import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";

interface ContentInputProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}

export const ContentInput = ({ userInput, setUserInput, addTodo }: ContentInputProps) => {
  const { t } = useTranslation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Input
      type="text"
      placeholder={t("newContentInput")}
      value={userInput}
      onChange={(item) => {
        setUserInput(item.target.value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
};
