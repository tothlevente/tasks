import { useTranslation } from "react-i18next";
import { Input } from "./ui/input";

export default function ContentInput({
  userInput,
  setUserInput,
}: {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { t } = useTranslation();

  return (
    <Input
      type="text"
      placeholder={t("newContentInput")}
      value={userInput}
      onChange={(item) => {
        setUserInput(item.target.value);
      }}
    />
  );
}
