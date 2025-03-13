import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PaintBucketIcon, PaletteIcon } from "lucide-react";
import { Colors, COLORS } from "@/constants/colors";
import { Button } from "../ui/button";

interface PaletteDropdownProps {
  changeTodoColor: (key: number, color: string) => void;
  id: number;
}

export const PaletteDropdown = ({ id, changeTodoColor }: PaletteDropdownProps) => {
  const colorDefaultGray = COLORS.find((color) => color.name === "gray")!.colors.default;
  const colorDefaultYellow = COLORS.find((color) => color.name === "yellow")!.colors.default;
  const colorDefaultRed = COLORS.find((color) => color.name === "red")!.colors.default;
  const colorDefaultBlue = COLORS.find((color) => color.name === "blue")!.colors.default;
  const colorDefaultGreen = COLORS.find((color) => color.name === "green")!.colors.default;
  const colorDefaultPink = COLORS.find((color) => color.name === "pink")!.colors.default;

  const handleColorChange = (color: Colors) => {
    changeTodoColor(id, color.colors.default);
  };

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
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "gray")!)}
        >
          <PaintBucketIcon color={colorDefaultGray} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "yellow")!)}
        >
          <PaintBucketIcon color={colorDefaultYellow} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "red")!)}
        >
          <PaintBucketIcon color={colorDefaultRed} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "blue")!)}
        >
          <PaintBucketIcon color={colorDefaultBlue} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "green")!)}
        >
          <PaintBucketIcon color={colorDefaultGreen} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleColorChange(COLORS.find((color) => color.name === "pink")!)}
        >
          <PaintBucketIcon color={colorDefaultPink} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
