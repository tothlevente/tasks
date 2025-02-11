import { TodoProps } from "@/interfaces/TodoProps";

const uploadTodosFromJson = (
  event: React.ChangeEvent<HTMLInputElement>,
  list: TodoProps[],
  setList: React.Dispatch<React.SetStateAction<TodoProps[]>>
): void => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = e.target?.result as string;
      const todos: TodoProps[] = JSON.parse(json);

      list.length === 0 ? setList(todos) : setList(todos.concat(list));
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  };
  reader.readAsText(file);
};

export { uploadTodosFromJson };
