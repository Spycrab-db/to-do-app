import './css/App.css';
import List from './ListBar/List';
import TodosUI from './TodosUI/TodosUI';
import TaskList from './Classes/TaskList';
import { useState } from 'react';

// Styling

export default function App() {
    //Defines all the todo lists
    const [todoLists, setTodoLists] = useState([]);
    //Defines the id of the list that is onEdit
    const [currEdit, setCurrEdit] = useState();
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
    //TOGGLES complete of a task by id
    function toggleComplete(id){
        setTasks(tasks.map((task)=>{
            if (task.id === id){
                return {...task, completed: !task.completed};
            }
            return task;
        }));
    }
    return (
        <>
            <div className="side-bar">
                <button className="new-list" onClick={() => {
                    const newTaskList = new TaskList();
                    setTodoLists((oldTaskLists) => {
                        return [...oldTaskLists, newTaskList]
                    });
                    setCurrEdit(newTaskList.id);
                }}>
                    + New List
                </button>
                <ul>
                    {todoLists.map((list) => {
                        return (
                            <List
                            setTitle={(newTitle)=>setTitle(list.id, newTitle)}
                            setToCurrList={()=>changeCurrList(list.id)} key={list.id}
                            onEdit={list.id === currEdit}
                            setEdit={(active)=>{
                                if (active) setCurrEdit(list.id)
                                else setCurrEdit(false)
                            }}
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
                toggleComplete={toggleComplete}
                />
            }
        </>
    )
}