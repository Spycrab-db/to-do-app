import { useState } from "react"

export default function CompletedDropdown({ tasks, undo }) {
    const [showTasks, setShowTasks] = useState(false);
    return (
        <>
            <button onClick={() => setShowTasks(!showTasks)}>
                Completed Tasks
            </button>
            {showTasks && (
                <ul className="completed-tasks">
                    {tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                {task.title}
                                <button onClick={() => undo(task.id)}>Undo</button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}