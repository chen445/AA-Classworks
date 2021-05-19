import React from 'react';
import {fetchWeather} from '../utils/api_util'

class Weather extends React.Component {
    constructor() {
        super();
        this.state={weather: null};
        this.success = this.success.bind(this);
    }

componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success(position));    
}

success(position) {
    fetchWeather(position.coords.longitude, position.coords.latitude);
}

}

export default Weather;