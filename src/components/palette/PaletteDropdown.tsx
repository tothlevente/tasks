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
        <DropdownMenuItem>
          <PaintBucketIcon
            color={COLORS.gray}
            onClick={() => changeTodoColor(id, COLORS.gray)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon
            color={COLORS.yellow}
            onClick={() => changeTodoColor(id, COLORS.yellow)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon
            color={COLORS.red}
            onClick={() => changeTodoColor(id, COLORS.red)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon
            color={COLORS.blue}
            onClick={() => changeTodoColor(id, COLORS.blue)}
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PaintBucketIcon
            color={COLORS.green}
            onClick={() => changeTodoColor(id, COLORS.green)}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
