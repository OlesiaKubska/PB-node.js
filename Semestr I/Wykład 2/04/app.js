//Importujemy bibliotekę Lodash jako _.

const _ = require('lodash');
//Tworzymy tablicę data z przykładowymi danymi.

const data = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
//Używamy funkcji _.min() i _.max() z Lodasha, aby znaleźć odpowiednio minimalną i maksymalną wartość w tablicy.

const minValue = _.min(data);
const maxValue = _.max(data);

//Wyświetlamy wyniki za pomocą console.log.
console.log("Min:", minValue);
console.log("Max:", maxValue);