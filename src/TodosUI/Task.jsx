import { useState } from 'react';
import './css/Task.css';

export default function Task({ task, toggleComplete, deleteSelf }) {
    const [showDelete, setShowDelete] = useState(false);
    return (
        <li className="task-li"
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}>
            <div onClick={() => toggleComplete(task.id)}>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="checkmark">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {task.title}
                </p>
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    deleteSelf();
                }}
                    className={showDelete ? "visible" : ""}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </li>
    )
}