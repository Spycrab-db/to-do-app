import { useState } from "react";
import "./css/CompletedDropdown.css";
export default function CompletedDropdown({ tasks, undo, deleteTask }) {
  const [showTasks, setShowTasks] = useState(false);
  return (
    <>
      <button onClick={() => setShowTasks(!showTasks)}>Completed Tasks</button>
      <div className="completed-tasks">
        <button onClick={() => deleteTask(tasks)}>Clear</button>
        <ul
          className={`completed-tasks${showTasks ? " slide-in" : " slide-out"}`}
        >
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <div onClick={() => undo(task.id)}>
                  {task.title}
                  <button
                    onClick={(evt) => {
                      evt.stopPropagation();
                      deleteTask(task);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
