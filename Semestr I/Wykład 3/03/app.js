const request = require('request');

const URL = "https://jsonplaceholder.typicode.com/users/2";

request(URL, (error, response, body) => {
    if (error) {
        console.log('network communication failed', error); 
    } else {
        const user = JSON.parse(body);
        console.log(user);
    }
});