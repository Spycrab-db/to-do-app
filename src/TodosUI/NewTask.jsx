import { useState } from 'react';
import Task from '../Classes/Task';

export default function NewTask({ addTask, currList }){
    const [inputTitle, setInputTitle] = useState("");
    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            const title = inputTitle;
            const newTask = new Task(title, false, [currList]);
            addTask(newTask);
        }}>
            <input type="text" htmlFor="newTask" value={inputTitle} onChange={(evt)=>{
                setInputTitle(evt.target.value);
            }}/>
        </form>
    )
}