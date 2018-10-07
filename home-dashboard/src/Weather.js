import React, { Component } from 'react';

class WeatherTile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    };

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=60640,us&APPID=b22b825c1197355edeef5ad8a62cc1a6')
        .then(response => {
            response.json();
            console.log(response);
        })
        .then(
            data => this.setState({ data })
        )
        ;
        console.log( this.state );


    }

    render() {
        return (
            <div>
                <h2>Hello, weather will go here</h2>
            </div>
        );
    }
}


export default WeatherTile;