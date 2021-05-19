import React from 'react';
import {fetchWeather} from '../utils/api_util'

class Weather extends React.Component {
    constructor() {
        super();
        this.state={weather: null};
        this.success = this.success.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);    
    }

    success(position) {
         fetchWeather(position.coords.longitude,
                      position.coords.latitude,
                      weather=>{this.setState({weather})},
                      error=>{this.setState({error: error})});
    }

   
    render(){

        let content = "";
        if(this.state.weather !==null){
            let temp=this.state.weather.main.temp;
            temp=Math.floor((temp - 273.15) * 1.8 + 32);
            let city=this.state.weather.name;
            let weather = city+": "+temp+'F';
            content = (<span>{weather}</span>);
        
        }else if(this.state.error){
            content = (<span>{error}</span>);
        }else{
            content = (<span>Fetching...</span>);
        }

        return (
            <div>
                <h1>Weather</h1>
                {content}
            </div>
        );
        
    }



}


export default Weather;