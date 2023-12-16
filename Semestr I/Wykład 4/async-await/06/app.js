//Dodajmy do naszej aplikacji z zadania 5 pobieranie pogody dla naszego
//użytkownika(z odpowiedzi weźmy main.temp i wyświetlmy na ekranie).Zadanie analogiczne 
//jak w poprzednim laboratorium z wykorzystaniem składni async / await.

//Endpoint do pogody:
//https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}


const axios = require('axios');
const fs = require('fs').promises;
const yargs = require('yargs');


const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios.get(url);

    return response.data;

}

const getWeather = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    const response = await axios.get(url);

    return response.data;
}

const userId = yargs.argv.id;

if (typeof userId !== "number" || userId < 0 || userId % 1 !== 0) {
    console.log("userId is number > 0");
    process.exit(1);
}
//IIFE
(async () => {
    try {
        const user = await getUser(2);
        console.log(user.name);

        const lat = user.address.geo.lat;
        const lng = user.address.geo.lng;

        const weather = await getWeather(lat, lng);
        console.log(weather.weather[0].description);

        await fs.writeFile("weather.txt", weather.weather[0].description);
    } catch (error) {
        console.log(error);
    }
    
})(userId);