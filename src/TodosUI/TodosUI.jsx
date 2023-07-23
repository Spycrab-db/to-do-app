import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';
export default function TodosUI({ currList, allTasks, addTask }) {
    const tasks = allTasks.filter((task) => task.parentLists.includes(currList));
    return (
        <div className="todo-ui">
            <h1>{currList.title}</h1>
            <ul>
                {tasks.map((task) => {
                    return <Task task={task} key={task.id}/>
                })}
            </ul>
            <NewTask addTask={addTask} currList={currList} />
        </div>
    )
}