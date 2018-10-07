import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from './todolist';
import WeatherTile from "./Weather";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div className="homeapp">
        <div className="homeapp-title">
            <h2>Home page of Home Base Application</h2>
        </div>

        <div className="homeapp-todo__main">
            <ToDoList />
        </div>
        
        <div className="homeapp-weather__main">
            <WeatherTile />
        </div>
    </div>,
    destination
);