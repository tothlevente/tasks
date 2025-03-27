import { TaskProps } from "@/types/TaskProps";

/**
 * Downloads an array of tasks as a text file.
 *
 * This function takes an array of task objects, extracts their titles,
 * concatenates them into a single string separated by commas, and triggers
 * a download of the resulting string as a `.json` file.
 *
 * @param value - An array of task objects, each containing a `title` property.
 *
 * The downloaded file will be named in the format `tasks_<timestamp>.json`.
 */
export const downloadTaskAsText = (value: TaskProps[]): void => {
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
  element.download = `tasks_${Date.now()}.json`;
  document.body.appendChild(element);
  element.click();
};

/**
 * Downloads an array of tasks as a JSON file.
 *
 * This function takes an array of tasks, converts it to a JSON string,
 * creates a downloadable file, and triggers the download in the browser.
 *
 * @param value - An array of tasks to be downloaded. Each task should conform to the `TaskProps` interface.
 *
 * @returns void
 */
export const downloadTaskAsJson = (value: TaskProps[]): void => {
  const json = JSON.stringify(value, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `tasks_${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url);
};
