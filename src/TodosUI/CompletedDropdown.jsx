import { useState } from "react";
import "./css/CompletedDropdown.css";
export default function CompletedDropdown({ tasks, undo, deleteTask }) {
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
              <li key={task.id}>
                <div onClick={() => undo(task.id)}>
                  <button className="undo-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <p className="task-title">{task.title}</p>
                  <button
                    className="delete-completed-task"
                    onClick={(evt) => {
                      evt.stopPropagation();
                      deleteTask(task);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
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
