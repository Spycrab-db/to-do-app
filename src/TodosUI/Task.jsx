export default function Task({ task, toggleComplete, deleteSelf }) {
    return (
        <li>
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