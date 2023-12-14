const lodash = require('lodash');

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const someArrayUniq = lodash.uniq(someArray);

console.log("tablica początkowa" + someArray);
console.log("tablica bez dublikatów" + someArrayUniq);

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

const diffArray = lodash.difference(tabA, tabB);
console.log("tablica")