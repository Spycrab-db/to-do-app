import { useState } from "react"
import EditForm from '../EditForm';
import './css/List.css';

export default function List({ children, setTitle, takenTitles, setToCurrList, onEdit, setEdit, deleteSelf, className }) {
    const [error, setError] = useState();
    const [showDelete, setShowDelete] = useState(false);
    function submitTitle(title) {
        if (!title) {
            if (children) {
                setError();
                setTitle(children);
                setEdit(false);
                setToCurrList();
            } else deleteSelf();
        }
        else if (takenTitles.includes(title) && title !== children) {
            setError("Title is already taken");
        }
        else {
            setError();
            setTitle(title);
            setEdit(false);
            setToCurrList();
        }
    }
    function cancelEdit() {
        if (children) {
            setEdit(false);
            setError();
        } else {
            deleteSelf();
        }
    }
    if (onEdit) {
        return (
            <>
                <li className="input-list-li">
                    <EditForm placeholder="New List"
                        submitHandler={submitTitle}
                        escapeHandler={cancelEdit}
                        className="input-list"
                    >
                        {children}
                    </EditForm>
                </li>
                {error && (
                    <>
                        <div className="error-message fade-in">
                            {error}
                        </div>
                        <div className="cancel-message fade-in">
                            Esc to cancel
                        </div>
                    </>
                )}
            </>
        )
    }
    return (
        <li className={`list ${className}`}>
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