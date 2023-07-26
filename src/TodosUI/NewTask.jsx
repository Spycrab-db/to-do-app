import { useState } from "react";
import Task from "../Classes/Task";
import "./css/NewTask.css";

export default function NewTask({ addTask, currList }) {
  const [inputTitle, setInputTitle] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    const newTask = new Task(inputTitle, false, currList.id);
    addTask(newTask);
    setInputTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        htmlFor="newTask"
        className="new-task-input"
        placeholder="+ Add Task"
        required
        value={inputTitle}
        onChange={(evt) => {
          setInputTitle(evt.target.value);
        }}
      />
    </form>
  );
}
