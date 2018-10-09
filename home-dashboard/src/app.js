import React from "react";
import ToDoList from './todolist';
import WeatherTile from "./Weather";

class App extends React.Component {
    state = {
        items: [],
        weather: null
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=60640,us&APPID=b22b825c1197355edeef5ad8a62cc1a6')
            .then(response => {
                response.json();
                // console.log(response);
                console.log(response.body);
            })
            .then(
                weather => this.setState({ weather })
            )
            ;
    }

    render() {
        return <div className="homeapp">
            <div className="homeapp-title">
                <h2>Home page of Home Base Application</h2>
            </div>

            <div className="homeapp-todo__main">
                <ToDoList 
                    addToList={this.addToList}
                />
            </div>

            <div className="homeapp-weather__main">
                <WeatherTile />
            </div>
        </div>
    }
}

export default App;