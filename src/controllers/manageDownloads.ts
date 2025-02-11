import { TodoProps } from "@/interfaces/TodoProps";

/**
 * Downloads the list of todos as a text file.
 *
 * This function takes an array of `TodoProps` objects, extracts their titles,
 * concatenates them into a single string separated by commas, and triggers
 * a download of this string as a text file named "myTodoListFile.txt".
 *
 * @param value - An array of `TodoProps` objects representing the todos.
 */
const downloadTodosAsText = (value: TodoProps[]): void => {
  const separator = ", ";
  let result = "";

  for (let i = 0; i < value.length; i++) {
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
};

/**
 * Downloads the provided list of todos as a JSON file.
 *
 * @param value - An array of TodoProps objects to be downloaded as JSON.
 *
 * This function converts the provided array of todos into a JSON string,
 * creates a Blob from the JSON string, and generates a temporary URL for the Blob.
 * It then creates an anchor element, sets its href attribute to the Blob URL,
 * and triggers a download by programmatically clicking the anchor element.
 * Finally, it revokes the Blob URL to free up resources.
 */
const downloadTodosAsJson = (value: TodoProps[]): void => {
  const json = JSON.stringify(value, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "myTodoListFile.json";
  a.click();

  URL.revokeObjectURL(url);
};

export { downloadTodosAsText, downloadTodosAsJson };
