import './css/Task.css';

export default function Task({ task, toggleComplete, deleteSelf }) {
    return (
        <li className="task-li">
            <div onClick={()=>toggleComplete(task.id)}>
                {task.title}
                <button onClick={(evt)=>{
                    evt.stopPropagation();
                    deleteSelf();
                }}>X</button>
            </div>
        </li>
    )
}