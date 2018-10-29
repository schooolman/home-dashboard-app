import React from 'react';

class WeatherTile extends React.Component {

    render() {
        const data = this.props.weather;

        let tempFarenheit = Math.round((data.temp - 273.15) * 9 / 5 + 32);

        console.log(data);

        return (
            <div>
                <h2>Hello, weather will go here</h2>
                <h3> City: Chicago (Andersonville)</h3>
                <h3> Temp: {tempFarenheit}</h3>
                <h3> Sky: {data.sky}</h3>
            </div>
        );
    }
}


export default WeatherTile;