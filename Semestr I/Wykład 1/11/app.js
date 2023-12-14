// wczytujemy moduł 'math'
const math = require('./math');

// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do stałej 'fs'
const fs = require('fs');

function readNumberFromFile(filePath) {
    return Number(fs.readFileSync(filePath, 'utf8'));
}

// Sprawdzanie liczby parametrów
if (process.argv.length < 4) {
    console.log("zbyt mało parametrów!");
    process.exit(1); // Zakończenie programu z kodem błędu
} else if (process.argv.length > 4) {
    console.log("zbyt dużo parametrów!");
    process.exit(1); // Zakończenie programu z kodem błędu
}

// Pobieranie nazw plików z argumentów wiersza poleceń
const fileA = process.argv[2]; // dla pierwszej liczby
const fileB = process.argv[3]; // dla drugiej liczby

// Wczytywanie liczb
const a = readNumberFromFile(fileA);
const b = readNumberFromFile(fileB);

// Wykonywanie działań
const add = math.add(a, b);
const sub = math.sub(a, b);
const mul = math.mul(a, b);
const div = math.div(a, b);

// Formatowanie wyników
const results = `Dodawanie: ${add}\n` +
                `Odejmowanie: ${sub}\n` +
                `Mnożenie: ${mul}\n` +
                `Dzielenie: ${div}\n`;
                
// Zapisywanie wyników
fs.writeFileSync('wynik.txt', results);