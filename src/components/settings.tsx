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

import { Button } from "./ui/button";

import CircleSettings from "./icons/circle-settings";
import FloppyDisk from "./icons/floppy-disk";
import Download from "./icons/download";

export default function Settings() {
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
              checked={false}
              onCheckedChange={() => {}}
            >
              Save my content and settings in this browser
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={true}
              onCheckedChange={() => {}}
            >
              Do not save anything
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuItem>
            <Download />
            <span>Download my content to this computer in text file </span>
          </DropdownMenuItem>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
