const fs = require('fs');
const yargs = require("yargs");
const { hideBin } = require('yargs/helpers');

// Parsowanie argumentów linii komend
const argv = yargs(hideBin(process.argv)).argv;

const user = {
    name: argv.name,
    lastName: argv.lastName
};

// Konwersja obiektu user na format JSON
const userJSON = JSON.stringify(user, null, 2); // Używamy opcji formatowania dla lepszej czytelności

// Zapisanie do pliku
fs.writeFile('user.json', userJSON, (err) => {
    if (err) {
        console.error('Wystąpił błąd podczas zapisu pliku:', err);
    } else {
        console.log('Plik został zapisany.');
    }
});