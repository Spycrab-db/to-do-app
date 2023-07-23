import { useState } from 'react';
import Task from '../Classes/Task';

export default function NewTask({ addTask, currList }) {
    const [inputTitle, setInputTitle] = useState("");
    function handleSubmit(evt) {
        evt.preventDefault();
        const newTask = new Task(inputTitle, false, [currList]);
        addTask(newTask);
        setInputTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" htmlFor="newTask" value={inputTitle} onChange={(evt) => {
                setInputTitle(evt.target.value);
            }} />
        </form>
    )
}