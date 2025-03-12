import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PaintBucketIcon, PaletteIcon } from "lucide-react";
import { Button } from "../ui/button";

export const PaletteDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="todo-card-footer-button"
        >
          <PaletteIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        className="min-w-5"
      >
        <DropdownMenuItem>
          <PaintBucketIcon color="#737373" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon color="#f59e0b" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon color="#ef4444" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon color="#3b82f6" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon color="#22c55e" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
