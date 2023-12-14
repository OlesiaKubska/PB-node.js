const fs = require('fs');

function listDirectoryContents(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    console.log(`Pliki w folderze ${directoryPath}:`);
    files.forEach(file => {
        console.log(file);
    });
}

// Sprawdzanie liczby parametrów
if (process.argv.length < 3) {
    console.log("zbyt mało parametrów!");
} else if (process.argv.length > 3) {
    console.log("zbyt dużo parametrów!");
} else {
    const directoryPath = process.argv[2];
    listDirectoryContents(directoryPath);
}