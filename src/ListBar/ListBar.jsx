import { useState } from "react";
import List from './List';
import TaskList from '../Classes/TaskList';


export default function ListBar() {
    const [taskLists, setTaskLists] = useState([]);
    function setTaskListTitle(id, title){
        setTaskLists((oldTaskList)=>{
            return oldTaskList.map((list)=>{
                if (list.id === id){
                    list.title = title;
                }
                return list;
            });
        });
    }
    return (
        <div className="list-bar">
            <div className="new-list" onClick={()=>{
                setTaskLists((oldTaskList)=>{
                    return [...oldTaskList, new TaskList()]
                })
            }}>
                + New List
            </div>
            <ul>
                {taskLists.map((list) => {
                    return <List key={list.id} list={list} setTitle={setTaskListTitle}/>
                })}
            </ul>
        </div>
    )
}