const request = require("postman-request");

const url = "http://api.weatherstack.com/current?access_key=2670b2c70f622d22eaf4f43ec93a2af3&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
    const weather = response.body.current;
    if (!error) {
        console.log(weather.weather_descriptions[0] + ". It is currently " + weather.temperature + " degrees out. It feels like " + weather.feelslike + " degrees out. There is a " + weather.precip + "% chance of rain.");
    } else {
        console.log(error);
    }
});