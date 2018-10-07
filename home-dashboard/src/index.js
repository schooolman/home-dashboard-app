import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from './todolist';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <h2>Home page of Home Base Application</h2>
        <div className="todo__main">
            <ToDoList />
        </div>
    </div>,
    destination
);