import { TodoProps } from "@/interfaces/TodoProps";

export default function TodoList({ list }: { list: TodoProps[] }) {
  return (
    <div>
      {list.map((value, index) => (
        <div>{value.title}</div>
      ))}
    </div>
  );
}
