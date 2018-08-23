const parseUserInput = require('./parse');
const deliverPizzas = require('./deliver');

const pizzabot = (input) => {
  const { coordinates } = parseUserInput(input);
  return deliverPizzas(coordinates);
};

module.exports = pizzabot;
