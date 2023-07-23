import './css/App.css';
import List from './ListBar/List';
import TodosUI from './TodosUI/TodosUI';
import TaskList from './Classes/TaskList';
import { useState } from 'react';

//Find a way to flatten data whilist not having unecessary re-renders to the sidebar
//after adding a task to a taskList
//Work more on the handler functions

export default function App() {
    //Defines all the todo lists
    const [todoLists, setTodoLists] = useState([]);
    //Defines all the tasks
    const [tasks, setTasks] = useState([]);
    //Defines the index of the active list
    const [currList, setCurrList] = useState();

    //Changes the title of a list by id and updates the state
    function setTitle(listId, newTitle) {
        setTodoLists(todoLists.map((list) => {
            if (list.id === listId) {
                return { ...list, title: newTitle };
            }
            return list;
        }));
    }
    //Changes currList by id and update state
    function changeCurrList(id) {
        const newCurrList = todoLists.findIndex((list) => list.id === id);
        setCurrList(newCurrList);
    }
    return (
        <>
            <div className="side-bar">
                <button className="new-list" onClick={() => {
                    setTodoLists((oldTaskLists) => {
                        return [...oldTaskLists, new TaskList()]
                    });
                }}>
                    + New List
                </button>
                <ul>
                    {todoLists.map((list) => {
                        return (
                            <List
                            setTitle={(newTitle)=>setTitle(list.id, newTitle)}
                            setToCurrList={()=>changeCurrList(list.id)} key={list.id}
                            >
                                {list.title}
                            </List>
                        )
                    })}
                </ul>
            </div>
            {currList !== undefined && 
                <TodosUI
                currList={todoLists[currList]}
                addTask={(task)=>setTasks([...tasks, task])}
                allTasks={tasks}
                />
            }
        </>
    )
}