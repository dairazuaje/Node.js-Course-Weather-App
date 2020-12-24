const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
    const weatherURL = "http://api.weatherstack.com/current?access_key=2670b2c70f622d22eaf4f43ec93a2af3&query=" + longitude + "," + latitude + "&units=F";
    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather services!", undefined);
        } else if (response.body.error) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const weather = response.body.current;
            const forecastStr = weather.weather_descriptions[0] + ". In " + response.body.location.name + " it is " + weather.temperature + " and it feels like " + weather.feelslike + ".";
            callback(undefined, forecastStr);
        }
    });
};

module.exports = forecast;