const request = require('request');
const yargs = require('yargs');

const userId = yargs.argv.id;

function getWeather(user) {
    const LAT = user.address.geo.lat;
    const LNG = user.address.geo.lng;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${LAT}&lon=${LNG}`;

    request(weatherUrl, (error, response, body) => {
        if (error) {
            console.log('network communication failed when retrieving weather', error)
        } else {
            if (response.statusCode !== 200) {
                console.log("weather not found");
            } else {
                const weatherData = JSON.parse(body);
                console.log("weather is:", weatherData.weather[0], description);
            }
        }
    });
}

function getUser(id, callback) {
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(URL, (error, response, body) => {
        if (error) {
            console.log('network communication failed', error); 
        } else {
            if (response.statusCode !== 200) {
                console.log("user not found");
            } else {
                const user = JSON.parse(body);
                console.log(user);

                callback(user);
            }
        }
    });
}

getUser(userId, getWeather);