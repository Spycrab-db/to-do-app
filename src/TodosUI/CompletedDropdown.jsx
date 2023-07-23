import { useState } from "react"

export default function CompletedDropdown({ tasks, undo, deleteTask }) {
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
                                <div onClick={() => undo(task.id)}>
                                    {task.title}
                                    <button onClick={(evt) => {
                                        evt.stopPropagation();
                                        deleteTask(task.id)
                                    }}>X
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}