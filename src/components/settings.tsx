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

import { deleteLocalStorage } from "@/controllers/useLocalStorage";
import { TodoProps } from "@/interfaces/TodoProps";
import { LanguagesIcon } from "lucide-react";
import { LANGUAGES } from "@/constants";
import { Button } from "./ui/button";

import handleFileDownload from "@/controllers/handleFileDownload";
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
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LanguagesIcon />
              <span>Language</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {LANGUAGES.map((value, index) => (
                  <DropdownMenuItem key={index}>
                    {value.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled={list.length === 0}
            onClick={() => {
              handleFileDownload(list);
            }}
          >
            <Download />
            <span>Download my content to this computer in text file</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={list.length === 0}
            className="delete"
            onClick={() => {
              setList([]);
              deleteLocalStorage();
            }}
          >
            <Trash />
            <span>Delete all contents in this browser</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
