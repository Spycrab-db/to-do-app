import './css/App.css';
import List from './SideBar/List';
import TodosUI from './TodosUI/TodosUI';
import TaskList from './Classes/TaskList';
import SideBar from './SideBar/SideBar';
import { useState } from 'react';

// Styling
// Connect to localStorage

export default function App() {
    //Defines all the tasks
    const [tasks, setTasks] = useState([]);
    //Defines the current list
    const [currList, setCurrList] = useState();

    //Changes a title of a task by id
    function setTaskTitle(taskId, newTitle) {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, title: newTitle };
            }
            return task;
        }));
    }
    //TOGGLES complete of a task by id
    function toggleComplete(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    }
    //Deletes a task or an array of tasks
    function deleteTask(tasksToDelete) {
        if (!Array.isArray(tasksToDelete)) {
            tasksToDelete = [tasksToDelete];
        }
        setTasks(tasks.filter((task) => !tasksToDelete.includes(task)));
    }
    return (
        <>
            <SideBar setCurrList={setCurrList}
                currList={currList}
                deleteListTasks={(id) => setTasks(tasks.filter((task) => task.id !== id))}
            />
            {currList &&
                <TodosUI
                    currList={currList}
                    addTask={(task) => setTasks([...tasks, task])}
                    allTasks={tasks}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    setTitle={setTaskTitle}
                />
            }
        </>
    )
}