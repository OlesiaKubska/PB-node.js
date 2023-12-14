const argv = require('yargs/yargs');
const fs = require('fs');
const getUser = require('./user');
const getWeather = require('./weather');

const userId = argv.id;
// console.log(userId);

getUser(userId)
    .then(user => {
        if (!user || !user.address || !user.address.geo) {
            throw new Error('User data is incomplete or user does not exist.');
        }
        return getWeather(user.address.geo.lat, user.address.geo.lng)
            .then(temperature => {
                return { userName: user.username, temperature };
            });
    })
    .then(result => {
        fs.writeFile('data.json', JSON.stringify(result, null, 2), 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch(error => {
        console.error(error);
    });