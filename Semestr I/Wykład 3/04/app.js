const request = require('request');

const URL = "https://jsonplaceholder.typicode.com/users/2";

request(URL, (error, response, body) => {
    if (error) {
        console.log('network communication failed', error); 
    } else {
        if (response.statusCode !== 200) {
            console.log("user not found");
        } else {
            const user = JSON.parse(body);
            console.log(user);
        }
    }
});