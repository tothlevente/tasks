import { TodoProps } from "@/interfaces/TodoProps";

export default function TodoList({ list }: { list: TodoProps[] }) {
  return (
    <div className="todo-list">
      {list.map((value, index) => (
        <div key={index}>{value.title}</div>
      ))}
    </div>
  );
}
