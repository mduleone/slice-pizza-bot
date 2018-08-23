const pizzabot = require('./src/pizzabot');

const [,, input] = process.argv;

console.log(pizzabot(input));
