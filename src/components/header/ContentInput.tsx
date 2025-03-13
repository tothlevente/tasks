import { useUserInput } from "@/context/UserInputContext";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";

interface ContentInputProps {
  addTodo: () => void;
  maxLength: number;
}

export const ContentInput = ({ addTodo, maxLength }: ContentInputProps) => {
  const { userInput, setUserInput } = useUserInput();
  const { t } = useTranslation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      addTodo();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setUserInput(inputValue.trim());
    }
  };

  return (
    <Input
      type="text"
      placeholder={t("newContentInput")}
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      maxLength={maxLength}
      autoFocus
    />
  );
};
