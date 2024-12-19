import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteLocalStorage } from "@/controllers/useLocalStorage";
import { TodoProps } from "@/interfaces/TodoProps";
import { Button } from "./ui/button";

import handleFileDownload from "@/controllers/handleFileDownload";
import CircleSettings from "./icons/circle-settings";
import FloppyDisk from "./icons/floppy-disk";
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

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FloppyDisk />
            <span>Save content and settings in this browser</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem
              checked={true}
              onCheckedChange={() => {}}
            >
              Save my content and settings in this browser
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={false}
              onCheckedChange={() => {}}
            >
              Do not save anything
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuItem
            disabled={list.length === 0}
            onClick={() => {
              handleFileDownload(list);
            }}
          >
            <Download />
            <span>Download my content to this computer in text file</span>
          </DropdownMenuItem>
        </DropdownMenuSub>
        <DropdownMenuSub>
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
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
