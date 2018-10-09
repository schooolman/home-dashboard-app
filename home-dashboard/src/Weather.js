import React from 'react';

class WeatherTile extends React.Component {

    render() {
        // const { name, temp, sky } = this.props.weather;
        const data = this.props.weather;
        // let goodData = Object.keys(data);

        // console.log(goodData);

        console.log(data);
        console.log((typeof this.props.weather));

        return (
            <div>
                <h2>Hello, weather will go here</h2>
                {/* <span>{name}</span> */}
            </div>

        
            
        );
    }
}


export default WeatherTile;