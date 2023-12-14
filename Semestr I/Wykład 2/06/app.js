const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const math = require('./math');

let result;
//Parsujemy argumenty a, b oraz operator.
switch (argv.operator) {
    case '+':
        result = math.add(argv.a, argv.b);
        break;
    case '-':
        result = math.sub(argv.a, argv.b);
        break;
    case '*':
        result = math.mul(argv.a, argv.b);
        break;
    case '/':
        result = math.div(argv.a, argv.b);
        break;
    default:
        result = 'Nieznany operator';
}

console.log(`wynik: ${result}`);