  
export const fetchWeather = (lon, lat, success, error) => {
    var request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f419414a87fe56baee2b3448c7e32ac7`, true);
    
    request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        // Success!
        var resp = JSON.parse(this.response)
        
        success(resp);
    } else {
        // We reached our target server, but it returned an error
        error('Weather is not found');
    }
    };

    request.onerror = function() {
    // There was a connection error of some sort
       error('Fail to fetch data');
    };

    request.send();
}
