const request = require("postman-request");

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYXp1YWplZGoiLCJhIjoiY2tpeDF6cjU4MGdsZTMwcXBxbTRlcW80MyJ9.gNBhT8kbPtsqgQaiw-u70w&limit=1";
    request({ url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to loaction services!", undefined);
        } else if (response.body.features.length == 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            const locationInfo = response.body.features[0];
            callback(undefined, {
                latitude: locationInfo.center[1],
                longitude: locationInfo.center[0],
                location: locationInfo.place_name
            });
        }
    });
}

module.exports = geocode;