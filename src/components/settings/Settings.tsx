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

import { downloadTaskAsText, downloadTaskAsJson } from "@/services/downloadService";
import { useSelectedLanguage } from "@/context/SelectedLanguageContext";
import { updateTasks, deleteTasks } from "@/services/todoService";
import { useDefaultColor } from "@/context/DefaultColorContext";
import { useTasks } from "@/context/TasksContext";
import { useTheme } from "../../context/ThemeContext";
import { LANGUAGES } from "@/constants/languages";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/constants/colors";
import { Button } from "../ui/button";

export const Settings = () => {
  const { selectedLanguage, setSelectedLanguage } = useSelectedLanguage();
  const { defaultColor, setDefaultColor } = useDefaultColor();
  const { tasks, setTasks } = useTasks();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
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
                  disabled={tasks.length === 0}
                  onClick={() => {
                    downloadTaskAsText(tasks);
                  }}
                >
                  <FileType2Icon />
                  <span>{t("downloadAllContentAsText")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={tasks.length === 0}
                  onClick={() => {
                    downloadTaskAsJson(tasks);
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
                  disabled={tasks.filter((todo) => todo.completed).length === 0}
                  className="delete"
                  onClick={() => {
                    const updatedList = tasks.filter((task) => !task.completed);

                    setTasks(updatedList);
                    updateTasks(updatedList);
                  }}
                >
                  <FileXIcon />
                  <span>{t("deleteCompletedContent")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={tasks.length === 0}
                  className="delete"
                  onClick={() => {
                    setTasks([]);
                    deleteTasks();
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
};
