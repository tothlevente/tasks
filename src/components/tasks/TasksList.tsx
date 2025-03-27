import { useTasks } from "@/context/TasksContext";
import { getTasks } from "@/services/tasksService";
import { NoContent } from "./content/NoContent";
import { Content } from "./content/Content";
import { useEffect } from "react";

export const TasksList = () => {
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    setTasks(getTasks());
  }, [setTasks]);

  return <div className="task-list">{tasks.length === 0 ? <NoContent /> : <Content />}</div>;
};
