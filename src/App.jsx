import "./css/App.css";
import TodosUI from "./TodosUI/TodosUI";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

// Styling
// Connect to localStorage

export default function App() {
  //Defines all the tasks
  const [tasks, setTasks] = useState([]);
  //Defines the current list
  const [currList, setCurrList] = useState();

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
      <SideBar
        setCurrList={setCurrList}
        currList={currList}
        deleteListTasks={(id) =>
          setTasks(tasks.filter((task) => task.parentListId !== id))
        }
      />
      {currList && (
        <TodosUI
          currList={currList}
          addTask={(task) => setTasks([...tasks, task])}
          allTasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setTitle={setTaskTitle}
        />
      )}
    </>
  );
}
