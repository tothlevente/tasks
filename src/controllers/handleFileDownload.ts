import { TodoProps } from "@/interfaces/TodoProps";

/**
 * Handles the download of a file containing the titles of the to-do items.
 *
 * @param {TodoProps[]} value - An array of to-do items.
 *
 * The function creates a comma-separated string of the titles of the to-do items,
 * creates a Blob from the string, and triggers a download of the file named "myTodoListFile.txt".
 */
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
