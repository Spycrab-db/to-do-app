import { useState } from "react";
import List from './List';
import {v4 as uuid} from 'uuid';

export default function ListBar() {
    const [taskList, setTaskList] = useState([]);
    return (
        <div id="list-bar">
            <div>
                + New List
            </div>
            <ul>
                {taskList.map((list) => {
                    return <List list={list}/>
                })}
            </ul>
        </div>
    )
}