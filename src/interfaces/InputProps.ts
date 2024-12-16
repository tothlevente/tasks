import ListProps from "./ListProps";

export default interface InputProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  todoList: ListProps[];
  setTodoList: React.Dispatch<React.SetStateAction<ListProps[]>>;
}
