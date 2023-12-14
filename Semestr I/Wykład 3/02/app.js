const fs = require("fs");
const argv = require("yargs");

const parameters = argv.argv;

const user = {
    name: parameters.name, // name from input
    lastName: parameters.lastName // lastName from input
};

const stringData = JSON.stringify(user);

const fileName = "user.json";

fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
        console.log("read failed")
    } else {
        const userFromFile = JSON.parse(data);
        console.log(userFromFile);
    }

    fs.writeFile(fileName, stringData, (error) => {
        if (error) {
            console.log("write file failed", error);
        } else {
            console.log("write ok");
        }
    });
});