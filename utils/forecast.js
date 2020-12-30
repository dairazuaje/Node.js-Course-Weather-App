const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=2670b2c70f622d22eaf4f43ec93a2af3&query=" + latitude + "," + longitude + "&units=F";
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (response.body.error) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const weather = response.body.current;
            const forecastStr = weather.weather_descriptions[0] + ". It is currently " + weather.temperature + " degrees F out and it feels like " + weather.feelslike + " degrees F.";
            callback(undefined, forecastStr);
        }
    });
};

module.exports = forecast;