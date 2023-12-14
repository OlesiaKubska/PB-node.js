//Używamy modułu fs do odczytania plików w podanym katalogu.
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const path = require('path');

//Parsujemy argumenty z linii komend (directory i size) przy pomocy yargs.

const argv = yargs(hideBin(process.argv))
    .options({
        directory: { type: 'string', demandOption: true },
        size: { type: 'number', demandOption: false }
}).argv;

const directoryPath = argv.directory;
const sizeFilter = argv.size;
//Odczytujemy informacje o plikach, traktując foldery jako pliki o rozmiarze 0.
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Wystąpił błąd podczas czytania folderu:', err);
        return;
    }

    let filesData = files.map(file => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        return {
            name: file,
            size: stats.isDirectory() ? 0 : stats.size
        };
    });
    //Jeśli podano size, filtrujemy pliki większe niż ten rozmiar; 
    //w przeciwnym razie filtrujemy pliki większe niż średnia wielkość pliku w tym folderze.
    if (sizeFilter !== undefined) {
        
        filesData = filesData.filter(file => file.size > sizeFilter);
    } else {
        const totalSize = filesData.reduce((acc, file) => acc + file.size, 0);
        const meanSize = totalSize / filesData.length;
        console.log(`mean file size: ${meanSize}`);
        filesData = filesData.filter(file => file.size > meanSize);
    }
    //Sortujemy pliki malejąco według rozmiaru.
    filesData.sort((a, b) => b.size - a.size);
    //Wyświetlamy wyniki przy pomocy console.table dla lepszej czytelności.
    console.table(filesData);
});