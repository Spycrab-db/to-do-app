import { useState } from "react"

export default function List({ children, setTitle, setToCurrList }) {
    const [onEdit, setOnEdit] = useState(true);
    const [inputTitle, setInputTitle] = useState("");
    return (
        <li>
            <button onDoubleClick={() => setOnEdit(true)} onClick={() => {
                if (!onEdit) {
                    setToCurrList();
                }
            }}>
                {onEdit ? (
                    <form onSubmit={(evt) => {
                        evt.preventDefault();
                        setTitle(evt.target.elements['title'].value);
                        setOnEdit(false);
                    }}>
                        <input type="text" name="title" value={inputTitle} placeholder="New List"
                            onChange={(evt) => {
                                setInputTitle(evt.target.value);
                            }} />
                    </form>
                ) : children
                }
            </button>
        </li>
    )
}