const { startingPoint, NORTH, SOUTH, EAST, WEST, DELIVER } = require('./constants');

const moveEastWest = (start, end) => {
  if (start.x < end.x) {
    return EAST.repeat(end.x - start.x);
  } else if (start.x > end.x) {
    return WEST.repeat(start.x - end.x);
  }
  return '';
};

const moveNorthSouth = (start, end) => {
  if (start.y < end.y) {
    return NORTH.repeat(end.y - start.y);
  } else if (start.y > end.y) {
    return SOUTH.repeat(start.y - end.y);
  }
  return '';
};

const buildPath = (start, end) => {
  return `${moveEastWest(start, end)}${moveNorthSouth(start, end)}`;
};

const deliverPizzas = (deliveryCoordinates) => {
  const path = [
    startingPoint,
    ...deliveryCoordinates,
  ];

  return path
    .map((currentPoint, index, pathArray) => {
      if (index === pathArray.length - 1) {
        return '';
      }
      return buildPath(currentPoint, pathArray[index + 1]);
    })
    .join(DELIVER);
};

module.exports = deliverPizzas;
