import "./css/App.css";
import TodosUI from "./TodosUI/TodosUI";
import SideBar from "./SideBar/SideBar";
import { useState, useEffect } from "react";

// Get localStorage data
const tasksData = JSON.parse(localStorage.getItem("tasks"));
const currListData = JSON.parse(localStorage.getItem("currList"));

export default function App() {
  //Defines all the tasks
  const [tasks, setTasks] = useState(tasksData || []);
  //Defines the current list
  const [currList, setCurrList] = useState(currListData);
  //Defines what is displayed on mobile
  const [displayLists, setDisplayLists] = useState(false);

  //Synchronize with localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("currList", JSON.stringify(currList));
  }, [currList]);

  //Changes a title of a task by id
  function setTaskTitle(taskId, newTitle) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, title: newTitle };
        }
        return task;
      })
    );
  }
  //TOGGLES complete of a task by id
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }
  //Deletes a task or an array of tasks (compares the task id)
  function deleteTask(tasksToDelete) {
    console.log(tasksToDelete);
    if (!Array.isArray(tasksToDelete)) {
      setTasks(tasks.filter((task) => task.id !== tasksToDelete.id));
    } else {
      //Filter by keeping the task whose id is not in tasksToDelete
      setTasks(
        tasks.filter(
          (task) => !tasksToDelete.map((task) => task.id).includes(task.id)
        )
      );
    }
  }
  return (
    <>
      <button
        className="list-button"
        onClick={() => setDisplayLists(!displayLists)}
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="container">
        <SideBar
          setCurrList={setCurrList}
          currList={currList}
          deleteListTasks={(id) =>
            setTasks(tasks.filter((task) => task.parentListId !== id))
          }
          displayLists={displayLists}
          setDisplayLists={setDisplayLists}
        />
        {currList && (
          <TodosUI
            currList={currList}
            addTask={(task) => setTasks([...tasks, task])}
            allTasks={tasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            setTitle={setTaskTitle}
            displayLists={displayLists}
          />
        )}
      </div>
    </>
  );
}
