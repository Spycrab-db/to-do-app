import { useState } from "react"

export default function List({ children, setTitle, takenTitles, setToCurrList, onEdit, setEdit, deleteSelf }) {
    const [inputTitle, setInputTitle] = useState("");
    const [error, setError] = useState(false);
    if (onEdit) {
        return (
            <li>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    if (takenTitles.includes(inputTitle) && inputTitle !== children) {
                        setError(true);
                    } else {
                        setError(false);
                        setTitle(inputTitle);
                        setEdit(false);
                        setToCurrList();
                    }
                }}>
                    <input
                        required
                        type="text"
                        name="title"
                        value={inputTitle}
                        placeholder="New List"
                        autoFocus
                        onBlur={(evt) => {
                            setTitle(evt.target.value);
                            setEdit(false);
                        }}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Escape') {
                                if (children) {
                                    setInputTitle(children);
                                    setEdit(false);
                                    setError(false);
                                } else {
                                    deleteSelf();
                                }
                            }
                        }}
                        onChange={(evt) => {
                            setInputTitle(evt.target.value);
                        }} />
                </form>
                {error && (
                    <div>
                        Title is already taken
                    </div>
                )}
            </li>
        )
    }
    return (
        <li>
            <div onClick={setToCurrList} onDoubleClick={() => setEdit(true)}>
                {children}
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    deleteSelf();
                }}>
                    X
                </button>
            </div>
        </li>
    )
}