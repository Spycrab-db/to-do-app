export default function Task({ task, toggleComplete }) {
    return (
        <li>
            <button onClick={()=>toggleComplete(task.id)}>
                ✔
            </button>
            {task.title}
        </li>
    )
}