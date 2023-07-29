import { useState } from "react";
import "./css/CompletedDropdown.css";
import Task from "./Task";
export default function CompletedDropdown({
  tasks,
  undo,
  deleteTask,
  setTitle,
}) {
  const [showTasks, setShowTasks] = useState(false);
  return (
    <>
      <button
        className="completed-tasks-button"
        onClick={() => setShowTasks(!showTasks)}
      >
        Completed Tasks
      </button>
      <div
        className={`completed-tasks${showTasks ? " slide-in" : " slide-out"}`}
      >
        <button className="clear-button" onClick={() => deleteTask(tasks)}>
          Clear
        </button>
        <ul className="completed-tasks-ul">
          {tasks.map((task) => {
            return (
              <Task
                task={task}
                key={task.id}
                toggleComplete={undo}
                deleteSelf={() => deleteTask(task)}
                setTitle={(newTitle) => setTitle(task.id, newTitle)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
