//Dodajmy do naszego zadania 4 obsługę błędów try..catch.

const axios = require('axios');


const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios.get(url);

    return response.data;

}

//IIFE

(async () => {
    try {
        const user = await getUser(2);
        console.log(user.name);
    } catch (error) {
        console.log(error);
    }
    
})();
