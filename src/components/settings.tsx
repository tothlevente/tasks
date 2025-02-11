import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CircleDotIcon,
  CircleIcon,
  FileJson2Icon,
  FileType2Icon,
  LanguagesIcon,
} from "lucide-react";

import { downloadTodosAsText, downloadTodosAsJson } from "@/controllers/manageDownloads";
import { deleteLocalStorage } from "@/controllers/useLocalStorage";
import { TodoProps } from "@/interfaces/TodoProps";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@/constants";
import { Button } from "./ui/button";
import { useState } from "react";

import CircleSettings from "./icons/circle-settings";
import Download from "./icons/download";
import Trash from "./icons/trash";

export default function Settings({
  list,
  setList,
}: {
  list: TodoProps[];
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={{ marginRight: "5px" }}
        >
          <CircleSettings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("settingsTitle")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LanguagesIcon />
              <span>{t("languageTitle")}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {LANGUAGES.map((value, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleChangeLanguage(value.code)}
                  >
                    {selectedLanguage === value.code ? <CircleDotIcon /> : <CircleIcon />}
                    {value.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Download />
              <span>Download</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-48">
                <DropdownMenuItem
                  disabled={list.length === 0}
                  onClick={() => {
                    downloadTodosAsText(list);
                  }}
                >
                  <FileType2Icon />
                  <span>{t("downloadAllContentAsText")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={list.length === 0}
                  onClick={() => {
                    downloadTodosAsJson(list);
                  }}
                >
                  <FileJson2Icon />
                  <span>{t("downloadAllContentAsJson")}</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled={list.length === 0}
            className="delete"
            onClick={() => {
              setList([]);
              deleteLocalStorage();
            }}
          >
            <Trash />
            <span>{t("deleteAllContent")}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
