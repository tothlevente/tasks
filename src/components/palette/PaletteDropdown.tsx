import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PaintBucketIcon, PaletteIcon } from "lucide-react";
import { COLORS } from "@/constants/colors";
import { Button } from "../ui/button";

interface PaletteDropdownProps {
  changeTodoColor: (key: number, color: string) => void;
  id: number;
}

export const PaletteDropdown = ({ id, changeTodoColor }: PaletteDropdownProps) => {
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
        <DropdownMenuItem onClick={() => changeTodoColor(id, COLORS.gray)}>
          <PaintBucketIcon color={COLORS.gray} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTodoColor(id, COLORS.yellow)}>
          <PaintBucketIcon color={COLORS.yellow} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTodoColor(id, COLORS.red)}>
          <PaintBucketIcon color={COLORS.red} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTodoColor(id, COLORS.blue)}>
          <PaintBucketIcon color={COLORS.blue} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTodoColor(id, COLORS.green)}>
          <PaintBucketIcon color={COLORS.green} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
