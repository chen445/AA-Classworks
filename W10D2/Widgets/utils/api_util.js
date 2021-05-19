  
export const fetchWeather = (lon, lat) => {
    var request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={f419414a87fe56baee2b3448c7e32ac7}`, true);

    request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        // Success!
        var resp = this.response;
    } else {
        // We reached our target server, but it returned an error
        alert("Location not found")
    }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();

}
//     return $.ajax({
//       method: 'get',
//       url: 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={f419414a87fe56baee2b3448c7e32ac7}'
//     });
//   };