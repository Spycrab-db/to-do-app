import './css/App.css';
import List from './ListBar/List';
import TodosUI from './TodosUI/TodosUI';
import TaskList from './Classes/TaskList';
import { useState } from 'react';

// Prevent duplicate list names
// Delete lists
// Delete tasks
// Styling

export default function App() {
    //Defines all the todo lists
    const [todoLists, setTodoLists] = useState([]);
    //Defines the id of the list that is onEdit
    const [currEdit, setCurrEdit] = useState();
    //Defines all the tasks
    const [tasks, setTasks] = useState([]);
    //Defines the id of the current list
    const [currListId, setCurrListId] = useState();

    //Changes the title of a list by id and updates the state
    function setTitle(listId, newTitle) {
        setTodoLists(todoLists.map((list) => {
            if (list.id === listId) {
                return { ...list, title: newTitle };
            }
            return list;
        }));
    }
    //Deletes a list by id, also deletes associated tasks and currList
    function deleteList(id) {
        if (id === currListId) {
            setCurrListId(undefined);
        }
        setTodoLists(todoLists.filter((list) => list.id !== id));
        setTasks(tasks.filter((task) => task.parentList !== id));
    }
    //Changes currList by id and update state
    function changeCurrList(id) {
        const newCurrList = todoLists.find((list) => list.id === id);
        setCurrListId(newCurrList.id);
    }
    //TOGGLES complete of a task by id
    function toggleComplete(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    }
    //Deletes a task by id
    function deleteTask(id){
        setTasks(tasks.filter((task)=>task.id !== id))
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
                                setTitle={(newTitle) => setTitle(list.id, newTitle)}
                                takenTitles={todoLists.map((list)=>list.title)}
                                setToCurrList={() => changeCurrList(list.id)} key={list.id}
                                onEdit={list.id === currEdit}
                                setEdit={(active) => {
                                    if (active) setCurrEdit(list.id)
                                    else setCurrEdit(false)
                                }}
                                deleteSelf={() => deleteList(list.id)}
                            >
                                {list.title}
                            </List>
                        )
                    })}
                </ul>
            </div>
            {currListId &&
                <TodosUI
                    currList={todoLists.find((list) => list.id === currListId)}
                    addTask={(task) => setTasks([...tasks, task])}
                    allTasks={tasks}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            }
        </>
    )
}