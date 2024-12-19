import { TodoProps } from "@/interfaces/TodoProps";

export default function handleFileDownload(value: TodoProps[]) {
  const separator = ", ";
  let result = "";

  for (let i = 0; i < value.length; i++) {
    console.log(value[i].title);

    result += value[i].title;
    if (i !== value.length - 1) {
      result += separator;
    }
  }

  const element = document.createElement("a");
  const file = new Blob([result], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = "myTodoListFile.txt";
  document.body.appendChild(element);
  element.click();
}
