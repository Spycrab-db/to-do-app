import { useState } from "react"

export default function List({ children, setTitle, takenTitles, setToCurrList, onEdit, setEdit, deleteSelf }) {
    const [inputTitle, setInputTitle] = useState("");
    const [error, setError] = useState();
    function submitTitle() {
        if (!inputTitle) {
            if (children) {
                setError();
                setTitle(children);
                setInputTitle(children);
                setEdit(false);
                setToCurrList();
            } else deleteSelf();
        }
        else if (takenTitles.includes(inputTitle) && inputTitle !== children) {
            setError("Title is already taken");
        }
        else {
            setError();
            setTitle(inputTitle);
            setEdit(false);
            setToCurrList();
        }
    }
    if (onEdit) {
        return (
            <li>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    submitTitle();
                }}>
                    <input
                        type="text"
                        name="title"
                        value={inputTitle}
                        placeholder="New List"
                        autoFocus
                        onBlur={submitTitle}
                        onKeyDown={(evt) => {
                            if (evt.key === 'Escape') {
                                if (children) {
                                    setInputTitle(children);
                                    setEdit(false);
                                    setError();
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
                    <>
                    <div>
                        {error}
                    </div>
                    <div>
                        Esc to cancel
                    </div>
                    </>
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