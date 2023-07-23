import { useState } from "react"

export default function List({ children, setTitle, setToCurrList, onEdit, setEdit, deleteSelf }) {
    const [inputTitle, setInputTitle] = useState("");
    return (
        <li>
            {onEdit ? (
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    setTitle(evt.target.elements['title'].value);
                    setEdit(false);
                    setToCurrList();
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
                                } else {
                                    deleteSelf();
                                }

                            }
                        }}
                        onChange={(evt) => {
                            setInputTitle(evt.target.value);
                        }} />
                </form>
            ) : (
                <div onClick={setToCurrList} onDoubleClick={() => setEdit(true)}>
                    {children}
                    <button onClick={(evt)=>{
                        evt.stopPropagation();
                        deleteSelf();
                    }}>
                        X
                    </button>
                </div>
            )
            }
        </li>
    )
}