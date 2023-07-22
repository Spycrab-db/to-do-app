import { useState } from "react";
import List from './List';
import TaskList from '../Classes/TaskList';
import './css/ListBar.css';

export default function ListBar({ listTitles, currListId, changeCurrList }) {
    return (
        <ul>
            {listTitles.map((title) => {
                return <List key={title} title={title} setTitle={setTaskListTitle} changeCurrList={changeCurrList} />
            })}
        </ul>
    )
}