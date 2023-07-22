import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';
export default function TodosUI({ currList, addTask }) {
    return (
        <div className="todo-ui">
            <>
                <h1>{currList.title}</h1>
                <ul>
                    {currList.taskArr.map((task) => {
                        return <Task task={task} />
                    })}
                </ul>
                <NewTask addTask={(task)=>addTask(currList.id, task)} currList={currList}/>
            </>
        </div>
    )
}