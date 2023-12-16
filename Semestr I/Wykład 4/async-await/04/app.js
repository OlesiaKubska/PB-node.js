//Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i pobierzmy użytkownika dane wykorzystując składnię async/await.

//Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

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
