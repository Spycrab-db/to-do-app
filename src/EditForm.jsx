import { useState } from "react";

//children is what is initially shown on the input (usually the previous content)
//escapeHandler handles a cancelling behavior
export default function EditForm({children, placeholder, submitHandler, escapeHandler, className}){
    const [input, setInput] = useState(children);
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            submitHandler(input);
        }}>
            <input
                type="text"
                name="title"
                className={className}
                value={input}
                placeholder={placeholder}
                autoFocus
                onBlur={()=>submitHandler(input)}
                onKeyDown={(evt) => {
                    if (evt.key === 'Escape') {
                        escapeHandler();
                    }
                }}
                onChange={(evt) => {
                    setInput(evt.target.value);
                }} />
        </form>
    )
}