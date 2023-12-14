const os = require('node:os');
const fs = require('fs');

// Pobieranie informacji o użytkowniku
const userInfo = os.userInfo(); //zwraca obiekt zawierający informacje o zalogowanym użytkowniku, w tym jego nazwę (username)

// Wyświetlenie nazwy użytkownika
console.log(`Zalogowany użytkownik: ${userInfo.username}`);

// zapisuje nazwę użytkownika do pliku o nazwie username.txt
fs.writeFileSync('username.txt', userInfo.username);

console.log('Nazwa użytkownika została zapisana do pliku username.txt');