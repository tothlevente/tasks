import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import CirclePlus from "./icons/circle-plus";
import InputProps from "@/interfaces/InputProps";

export default function AddTodoDialog({
  userInput,
  setUserInput,
  todoList,
  setTodoList,
}: InputProps) {
  function addItem() {
    setTodoList([
      ...todoList,
      {
        id: Math.round(Math.random() * 10000000),
        title: userInput,
        completed: false,
      },
    ]);

    setUserInput("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={{ marginRight: "5px" }}
        >
          <CirclePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="dialog-content sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add todo</DialogTitle>
          <DialogDescription>
            Add your todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Input
              id="item"
              value={userInput}
              onChange={(item) => setUserInput(item.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              disabled={userInput.length === 0}
              onClick={() => addItem()}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
