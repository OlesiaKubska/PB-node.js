//Importujemy moduł fs
const fs = require('fs');

//Definiujemy obiekt user.
const user = {
    name: 'Jan',
    lastName: 'Nowak'
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