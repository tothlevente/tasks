import { useUserInput } from "@/context/UserInputContext";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";

interface ContentInputProps {
  addTodo: () => void;
}

export const ContentInput = ({ addTodo }: ContentInputProps) => {
  const { userInput, setUserInput } = useUserInput();
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
