const request = require('request');

function getUser(id) {
    return new Promise((resolve, reject) => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                reject("User not found");
            } else {
                resolve(JSON.parse(body));
            }
        });
    })
}

module.exports = getUser;