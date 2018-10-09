import React from "react";
import ToDoList from './todolist';
import WeatherTile from "./Weather";

class App extends React.Component {
    state = {
        items: [],
        weather: []
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=60640,us&APPID=b22b825c1197355edeef5ad8a62cc1a6')
            .then(response => { return response.json(); })
            .then( data => {
                    console.log(data);
                    this.setState({ weather: {
                            name: data.name,
                            temp: data.main.temp,
                            sky: data.weather[0].description
                        }
                    })
                });
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
                <WeatherTile 
                    weather={this.state.weather}
                />
            </div>
        </div>
    }
}

export default App;