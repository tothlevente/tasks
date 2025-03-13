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
  DownloadIcon,
  FileJson2Icon,
  FileType2Icon,
  FileX2Icon,
  FileXIcon,
  LanguagesIcon,
  PaintBucketIcon,
  PaletteIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react";

import { downloadTodosAsText, downloadTodosAsJson } from "@/controllers/manageDownloads";
import { deleteLocalStorage, updateLocalStorage } from "@/controllers/useLocalStorage";
import { useTheme } from "../themes/ThemeProvider";
import { TodoProps } from "@/interfaces/TodoProps";
import { LANGUAGES } from "@/constants/languages";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/constants/colors";
import { Button } from "../ui/button";
import { useState } from "react";

interface SettingsProps {
  list: TodoProps[];
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  defaultColor: string;
  setDefaultColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function Settings({
  list,
  setList,
  defaultColor,
  setDefaultColor,
}: SettingsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const { theme } = useTheme();
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const handleChangeColor = (color: string) => {
    setDefaultColor(color);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mr-[5px]"
        >
          <SettingsIcon />
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
                    {t(`${value.label}LanguageText`)}
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
              <DownloadIcon />
              <span>{t("downloadTitle")}</span>
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PaletteIcon />
              <span>{t("defaultColor")}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-48">
                {COLORS.map((color, index) => {
                  const themeColor =
                    theme === "light" ? color.colors.light : color.colors.dark;

                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => handleChangeColor(color.colors.default)}
                      style={{
                        backgroundColor:
                          color.colors.default === defaultColor ? themeColor : "transparent",
                      }}
                    >
                      <PaintBucketIcon color={color.colors.default} />
                      <span style={{ textTransform: "capitalize" }}>
                        {t(`${color.name}Color`)}
                      </span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Trash2Icon />
              <span>{t("deleteTitle")}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-48">
                <DropdownMenuItem
                  disabled={list.filter((todo) => todo.completed).length === 0}
                  className="delete"
                  onClick={() => {
                    const updatedList = list.filter((todo) => !todo.completed);

                    setList(updatedList);
                    updateLocalStorage(updatedList);
                  }}
                >
                  <FileXIcon />
                  <span>{t("deleteCompletedContent")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={list.length === 0}
                  className="delete"
                  onClick={() => {
                    setList([]);
                    deleteLocalStorage();
                  }}
                >
                  <FileX2Icon />
                  <span>{t("deleteAllContent")}</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
