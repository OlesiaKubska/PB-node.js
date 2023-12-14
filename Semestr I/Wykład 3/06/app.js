// const request = require('request');
// const yargs = require('yargs');

// const userId = yargs.argv.id;

// const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

// //

// request(URL, (error, response, body) => {
//     if (error) {
//         console.log('network communication failed', error);
//     } else {
//         if (response.statusCode !== 200) {
//             console.log("user not found");
//         } else {
//             const user = JSON.parse(body);
//             console.log(user);

//             const LAT = user.address.geo.lat;
//             const LNG = user.address.geo.lng;

//             const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${LAT}&lon=${LNG}`;

//             request(weatherUrl, (error, response, body) => {
//                 if (error) {
//                     console.log('network communication failed when retrieving weather', error)
//                 } else {
//                     if (response.statusCode !== 200) {
//                         console.log("weather not found");
//                     } else {
//                         const weatherData = JSON.parse(body);
//                         console.log("weather is:", weatherData.weather[0], description);
//                     }
//                 }
//             });
//         }
//     }
// });

// wersja podstawowa
// node app.js --id=3
const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;
console.log(userId);
const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
const apiKey = '0ed761300a2725ca778c07831ae64d6e';

request(urlUser, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);

        console.log(user.name);
        console.log('lat', user.address.geo.lat);
        console.log('lng', user.address.geo.lng);

        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
        request(urlWeather, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const weatherData = JSON.parse(body);
                
                console.log(`Temperature: ${weatherData.main.temp}K`);
            } else {
                console.log('Weather not found or network connection issues');
            }
        });
    } else {
        console.log('User not found or network connection issues');
    }
});