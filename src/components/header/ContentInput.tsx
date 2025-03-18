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
    if (event.key === "Enter" && userInput.trim() !== "" && userInput.length <= maxLength) {
      addTodo();
    }
  };

  return (
    <div className="grid">
      <Input
        type="text"
        placeholder={t("newContentInput")}
        className="w-[320px] md:w-[390px]"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value.trim())}
        onKeyDown={handleKeyDown}
      />
      <span>
        {maxLength < userInput.length ? (
          <p className="text-sm text-red-500 ml-2">{t("newContentInputExceeded")}</p>
        ) : (
          <p className="text-sm text-muted-foreground ml-2">
            {t("newContentInputCharacters", { count: maxLength - (userInput?.length || 0) })}
          </p>
        )}
      </span>
    </div>
  );
};
