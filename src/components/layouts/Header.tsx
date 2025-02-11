import CirclePlus from "../icons/circle-plus";
import HeaderTitle from "../header-title";
import Settings from "../settings";

import { TodoProps } from "@/interfaces/TodoProps";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Header({
  list,
  setList,
  userInput,
  setUserInput,
  addTodo,
}: {
  list: TodoProps[];
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <Input
          type="text"
          placeholder={t("newContentInput")}
          value={userInput}
          onChange={(item) => {
            setUserInput(item.target.value);
          }}
        />
        <div className="header-min-container">
          <Button
            variant="outline"
            size="icon"
            style={{ marginRight: "5px" }}
            onClick={() => addTodo()}
            disabled={userInput.length === 0}
          >
            <CirclePlus />
          </Button>
          <Settings
            list={list}
            setList={setList}
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
