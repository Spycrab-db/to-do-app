import './css/App.css';
import Listbar from './ListBar/ListBar';
import List from './ListBar/List';
import TodosUI from './TodosUI/TodosUI';
import TaskList from './Classes/TaskList';
import { useState } from 'react';

export default function App() {
    //Defines the array of todo lists (The entire dataset)
    const [todoLists, setTodoLists] = useState([]);
    //Defines the index of the active list
    const [currList, setCurrList] = useState();
    function addTask(listId, task) {
        setTodoLists(todoLists.map((list) => {
            if (list.id === listId) {
                return { ...list, taskArr: [...taskArr, task] };
            }
            return list;
        }));
    }
    //Changes the list with the old title and updates the state
    function setTitle(oldTitle, newTitle) {
        setTodoLists(todoLists.map((list) => {
            if (list.title === oldTitle) {
                return { ...list, title: newTitle };
            }
            return list;
        }));
    }
    //Changes currList by finding the same title and update state
    function changeCurrList(title) {
        const newCurrList = todoLists.findIndex((list) => list.title === title);
        setCurrList(newCurrList);
    }
    return (
        <>
            <div className="side-bar">
                <button className="new-list" onClick={() => {
                    setTodoLists((oldTaskList) => {
                        return [...oldTaskList, new TaskList()]
                    });
                }}>
                    + New List
                </button>
                <ul>
                    {todoLists.map((list) => {
                        return (
                            <List setTitle={setTitle} changeCurrList={changeCurrList}>
                                {list.title}
                            </List>
                        )
                    })}
                </ul>
            </div>
            {currList !== undefined && 
                <TodosUI currList={todoLists[currList]} addTask={addTask} />
            }
        </>
    )
}