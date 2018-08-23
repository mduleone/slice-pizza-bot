const { gridRegex, coordinatesRegex, coordinatePairRegex, coordinateDelimiter } = require('./constants');

const parseGridSize = (input) => {
  const [, x, y] = input.match(gridRegex) || [];
  if (typeof x === 'undefined' || typeof y === 'undefined') {
    throw new Error('Invalid input string provided; invalid grid size');
  }

  return {
    x: Number(x),
    y: Number(y),
  };
};

const parseCoordinates = (input) => {
  const [, coordinatesString] = input.match(coordinatesRegex) || [];
  if (typeof coordinatesString === 'undefined') {
    throw new Error('Invalid input string provided; invalid delivery points');
  }

  const coordinates = coordinatesString
    .slice(1, coordinatesString.length - 1) // trim bounding parens
    .split(coordinateDelimiter)
    .map((coord) => {
      const [, x, y] = coord.match(coordinatePairRegex);
      return {
        x: Number(x),
        y: Number(y),
      };
    });

  return coordinates;
};

const verifyCoordinates = (grid, coordinates) => {
  coordinates.forEach((coord) => {
    if (coord.x >= grid.x || coord.y >= grid.y) { // negatives disallowed thru regex
      throw new Error(`Coordinate (${coord.x}, ${coord.y}) out of bounds of [${grid.x}x${grid.y}] grid`);
    }
  });  
};

const sanitizeInput = input => input.replace(/\s*/g, '');

const parseUserInput = (input) => {
  const cleanInput = sanitizeInput(input);
  const grid = parseGridSize(cleanInput);
  const coordinates = parseCoordinates(cleanInput);
  verifyCoordinates(grid, coordinates);
  return {
    grid,
    coordinates,
  };
};

module.exports = parseUserInput;
