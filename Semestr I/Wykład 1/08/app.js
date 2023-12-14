// wczytujemy moduł 'math'
const math = require('./math');

// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do stałej 'fs'
const fs = require('fs');

function readNumberFromFile(filePath) {
    return Number(fs.readFileSync(filePath, 'utf8'));
}

// Wczytywanie liczb
const a = readNumberFromFile('a.txt');
const b = readNumberFromFile('b.txt');

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