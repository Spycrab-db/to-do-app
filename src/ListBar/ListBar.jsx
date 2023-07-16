import { useState } from "react";
import List from './List';
import {v4 as uuid} from 'uuid';

export default function ListBar() {
    const [taskLists, setTaskLists] = useState([]);
    return (
        <div id="list-bar">
            <div id="new-list">
                + New List
            </div>
            <ul>
                {taskLists.map((list) => {
                    return <List list={list}/>
                })}
            </ul>
        </div>
    )
}