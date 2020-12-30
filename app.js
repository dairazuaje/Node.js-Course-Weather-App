const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Store location passed in from user in command line
const location = process.argv[2];

// If user passed in location, pass location into geocode function and retrieve weather data. Else, print error requiring location
if (location) {
    geocode(location, (geoError, { latitude, longitude, location } = {}) => {
        if (geoError) {
            return console.log(geoError);
        }
    
        forecast(latitude, longitude, (forecastError, forecastData) => {
            if (forecastError) {
                return console.log(forecastError);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
} else {
    console.log("ERROR - Please provide a location.");
}