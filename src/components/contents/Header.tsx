import HeaderTitle from "../header-title";
import CirclePlus from "../icons/circle-plus";

import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <Input
          type="text"
          placeholder="Add your todo here. Click save when you're done."
        />
        <Button
          variant="outline"
          size="icon"
          style={{ marginRight: "5px" }}
        >
          <CirclePlus />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
