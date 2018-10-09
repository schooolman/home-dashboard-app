import React from 'react';

class WeatherTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        }
    };


    render() {
        return (
            <div>
                <h2>Hello, weather will go here</h2>
            </div>
        );
    }
}


export default WeatherTile;