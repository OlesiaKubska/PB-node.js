// const request = require('request');
// const yargs = require('yargs');

// const userId = yargs.argv.id;

// const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

// request(URL, (error, response, body) => {
//     if (error) {
//         console.log('network communication failed', error);
//     } else {
//         if (response.statusCode !== 200) {
//             console.log("user not found");
//         } else {
//             const user = JSON.parse(body);
//             console.log(user);
//         }
//     }
// });

// node app.js --id=3

const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;

const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);

        console.log(user.name);
        console.log('lat', user.address.geo.lat);
        console.log('lng', user.address.geo.lng);
    } else {
        console.log('User not found');
    }
});