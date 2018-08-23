module.exports = {
  gridRegex: /^([1-9]\d*)x([1-9]\d*)(?:\(\d+,\d+\))*$/,
  coordinatesRegex: /^\d+x\d+((?:\(\d+,\d+\))+)$/,
  coordinatePairRegex: /(\d+),(\d+)/,
  coordinateDelimiter: ')(',
  startingPoint: {x: 0, y: 0},
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W',
  DELIVER: 'D',
};
