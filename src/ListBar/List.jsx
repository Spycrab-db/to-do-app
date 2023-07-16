import { useState } from "react"
import TaskList from '../Classes/TaskList';

export default function List({list, setTitle}){
    const [onEdit, setOnEdit] = useState(true);
    const [inputTitle, setInputTitle] = useState("");
    return (
        <li onDoubleClick={()=>setOnEdit(true)}>
            {onEdit ? (
                <form onSubmit={(evt)=>{
                    evt.preventDefault();
                    setTitle(list.id, evt.target.elements['title'].value);
                    setOnEdit(false);
                }}>
                    <input type="text" name="title" value={inputTitle} placeholder="New List"
                    onChange={(evt)=>{
                        setInputTitle(evt.target.value);
                    }}/>
                </form>
            ) : (
                list.title
            )}
        </li>
    )
}