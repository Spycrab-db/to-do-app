import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';
export default function TodosUI({ currList, allTasks, addTask, toggleComplete }) {
    const tasks = allTasks.filter((task) => task.parentLists.includes(currList));
    const incomplete = tasks.filter((task) => !task.completed);
    const completed = tasks.filter((task) => task.completed);
    return (
        <div className="todo-ui">
            <h1>{currList.title}</h1>
            <ul>
                {incomplete.map((task) => {
                    return <Task task={task} key={task.id} toggleComplete={toggleComplete} />
                })}
            </ul>
            <h2>Add a Task:</h2>
            <NewTask addTask={addTask} currList={currList} />
            <h3>Completed Tasks:</h3>
            <ul>
                {completed.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title}
                            <button onClick={()=>toggleComplete(task.id)}>Undo</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}