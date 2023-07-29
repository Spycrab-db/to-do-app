import { useState } from "react";
import EditForm from "../EditForm";
import "./css/Task.css";

export default function Task({ task, toggleComplete, deleteSelf, setTitle }) {
  const [showControls, setShowControls] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  function submitTitle(title) {
    if (title) setTitle(title);
    setOnEdit(false);
  }

  return (
    <li
      className="task-li"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {!onEdit ? (
        <div onClick={() => toggleComplete(task.id)}>
          <button className="complete-button task-button">
            {!task.completed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="checkmark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
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
            )}
          </button>
          <p className="task-title">
            {task.completed ? <strike>{task.title}</strike> : task.title}
          </p>
          <button
            className={`edit-button task-button${
              showControls ? " visible" : ""
            }`}
            onClick={(evt) => {
              evt.stopPropagation();
              setOnEdit(true);
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            className={`delete-button task-button${
              showControls ? " visible" : ""
            }`}
            onClick={(evt) => {
              evt.stopPropagation();
              deleteSelf();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <EditForm
          placeholder="Task Name"
          submitHandler={submitTitle}
          escapeHandler={() => setOnEdit(false)}
          className="task-edit-input"
        >
          {task.title}
        </EditForm>
      )}
    </li>
  );
}
