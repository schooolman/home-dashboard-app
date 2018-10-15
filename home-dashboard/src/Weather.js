import React from 'react';

class WeatherTile extends React.Component {

    render() {
        // const { name, temp, sky } = this.props.weather;
        const data = this.props.weather;
        // let goodData = Object.keys(data);

        let tempFarenheit = Math.round((data.temp - 273.15) * 9 / 5 + 32);

        console.log(data);
        // console.log((typeof this.props.weather));

        return (
            <div>
                <h2>Hello, weather will go here</h2>
                {/* <span>{name}</span> */}
                {/* { data } */}
                <h3> City: Chicago (Andersonville)</h3>
                <h3> Temp: {tempFarenheit}</h3>
                <h3> Sky: {data.sky}</h3>
            </div>

        
            
        );
    }
}


export default WeatherTile;