import { TaskProps } from "@/types/TaskProps";

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
