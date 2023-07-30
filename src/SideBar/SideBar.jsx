import { useState, useEffect } from "react";
import TaskList from "../Classes/TaskList";
import List from "./List";
import "./css/SideBar.css";

// Get localStorage data
const listsData = JSON.parse(localStorage.getItem("lists"));

export default function SideBar({
  currList,
  setCurrList,
  deleteListTasks,
  displayLists,
  setDisplayLists,
}) {
  //Defines all the todo lists
  const [todoLists, setTodoLists] = useState(listsData || []);
  //Defines the id of the list that is onEdit
  const [currEdit, setCurrEdit] = useState();

  //Synchronize with localStorage
  useEffect(() => {
    const data = todoLists.filter((list) => list.title);
    localStorage.setItem("lists", JSON.stringify(data));
  }, [todoLists]);

  function setTitle(listId, newTitle) {
    setTodoLists(
      todoLists.map((list) => {
        if (list.id === listId) {
          setCurrList({ ...list, title: newTitle });
          return { ...list, title: newTitle };
        }
        return list;
      })
    );
  }
  function deleteList(id) {
    if (currList && id === currList.id) {
      setCurrList(null);
    }
    setTodoLists(todoLists.filter((list) => list.id !== id));
    deleteListTasks(id);
  }
  //Changes currList by id and update state
  function changeCurrList(id) {
    const newCurrList = todoLists.find((list) => list.id === id);
    setCurrList(newCurrList);
    setDisplayLists(false);
  }
  return (
    <div className={`side-bar${displayLists ? " show" : ""}`}>
      <div className="new-list-container">
        <button
          className="new-list"
          onClick={() => {
            // Only add a new list if all lists are named
            if (todoLists.map((list) => list.title).every(Boolean)) {
              const newTaskList = new TaskList();
              setTodoLists((oldTaskLists) => {
                return [...oldTaskLists, newTaskList];
              });
              setCurrEdit(newTaskList.id);
            }
          }}
        >
          <svg
            width="55"
            height="77"
            viewBox="0 0 55 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19.2955 57.4545V72H17.5909L9.66477 60.5795H9.52273V72H7.76136V57.4545H9.46591L17.4205 68.9034H17.5625V57.4545H19.2955ZM27.1665 72.2273C26.1154 72.2273 25.2087 71.9953 24.4464 71.5312C23.6888 71.0625 23.104 70.4091 22.6921 69.571C22.2849 68.7282 22.0813 67.7481 22.0813 66.6307C22.0813 65.5133 22.2849 64.5284 22.6921 63.6761C23.104 62.8191 23.677 62.1515 24.4109 61.6733C25.1495 61.1903 26.0112 60.9489 26.9961 60.9489C27.5643 60.9489 28.1254 61.0436 28.6793 61.233C29.2333 61.4223 29.7376 61.7301 30.1921 62.1562C30.6467 62.5777 31.0089 63.1364 31.2788 63.8324C31.5487 64.5284 31.6836 65.3854 31.6836 66.4034V67.1136H23.2745V65.6648H29.979C29.979 65.0492 29.8559 64.5 29.6097 64.017C29.3683 63.5341 29.0226 63.1529 28.5728 62.8736C28.1277 62.5942 27.6022 62.4545 26.9961 62.4545C26.3285 62.4545 25.7508 62.6203 25.2631 62.9517C24.7802 63.2784 24.4085 63.7045 24.1481 64.2301C23.8877 64.7557 23.7575 65.3191 23.7575 65.9205V66.8864C23.7575 67.7102 23.8995 68.4086 24.1836 68.9815C24.4724 69.5497 24.8725 69.983 25.3839 70.2812C25.8952 70.5748 26.4895 70.7216 27.1665 70.7216C27.6069 70.7216 28.0046 70.66 28.3597 70.5369C28.7196 70.4091 29.0297 70.2197 29.2901 69.9688C29.5505 69.7131 29.7518 69.3958 29.8938 69.017L31.5131 69.4716C31.3427 70.0208 31.0562 70.5038 30.6538 70.9205C30.2513 71.3324 29.7541 71.6544 29.1623 71.8864C28.5704 72.1136 27.9052 72.2273 27.1665 72.2273ZM36.7049 72L33.381 61.0909H35.1424L37.5004 69.4432H37.614L39.9435 61.0909H41.7333L44.0344 69.4148H44.1481L46.506 61.0909H48.2674L44.9435 72H43.2958L40.9094 63.6193H40.739L38.3526 72H36.7049Z"
            />
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M27.5 20.625V34.375M34.375 27.5H20.625M48.125 27.5C48.125 30.2085 47.5915 32.8905 46.555 35.3928C45.5185 37.8952 43.9993 40.1689 42.0841 42.0841C40.1689 43.9993 37.8952 45.5185 35.3928 46.555C32.8905 47.5915 30.2085 48.125 27.5 48.125C24.7915 48.125 22.1095 47.5915 19.6072 46.555C17.1048 45.5185 14.8311 43.9993 12.9159 42.0841C11.0007 40.1689 9.48149 37.8952 8.44498 35.3928C7.40848 32.8905 6.875 30.2085 6.875 27.5C6.875 22.0299 9.04798 16.7839 12.9159 12.9159C16.7839 9.04799 22.0299 6.875 27.5 6.875C32.9701 6.875 38.2161 9.04799 42.0841 12.9159C45.952 16.7839 48.125 22.0299 48.125 27.5Z"
            />
          </svg>
        </button>
      </div>
      <ul className="list-ul">
        {todoLists.map((list) => {
          return (
            <List
              setTitle={(newTitle) => setTitle(list.id, newTitle)}
              takenTitles={todoLists.map((list) => list.title)}
              setToCurrList={() => changeCurrList(list.id)}
              key={list.id}
              onEdit={list.id === currEdit}
              setEdit={(active) => {
                if (active) setCurrEdit(list.id);
                else setCurrEdit(false);
              }}
              deleteSelf={() => deleteList(list.id)}
              className={`${
                currList && list.id === currList.id ? "selected" : ""
              }`}
            >
              {list.title}
            </List>
          );
        })}
      </ul>
    </div>
  );
}
