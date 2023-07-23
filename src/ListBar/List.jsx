import { useState } from "react"
import './css/List.css';

export default function List({ children, setTitle, takenTitles, setToCurrList, onEdit, setEdit, deleteSelf }) {
    const [inputTitle, setInputTitle] = useState("");
    const [error, setError] = useState();
    const [showDelete, setShowDelete] = useState(false);
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
                        className="input-list"
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
        <li className="list">
            <div
                onClick={setToCurrList}
                onDoubleClick={() => setEdit(true)}
                onMouseEnter={() => setShowDelete(true)}
                onMouseLeave={() => setShowDelete(false)}
            >
                <p>{children}</p>
                <button className={`delete-list${showDelete ? " visible" : ""}`} onClick={(evt) => {
                    evt.stopPropagation();
                    deleteSelf();
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </li>
    )
}