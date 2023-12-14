const fs = require("fs");
const argv = require("yargs");

const parameters = argv.argv;

const user = {
    name: parameters.name, // name from input
    lastName: parameters.lastName // lastName from input
};

const stringData = JSON.stringify(user);

fs.writeFile("user.json", stringData, (error) => {
    if (error) {
        console.log("write file failed", error);
    } else {
        console.log("write ok");
    }
});

console.log("application ended");