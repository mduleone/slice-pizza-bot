const parseUserInput = require('../src/parse');

describe('parseUserInput', () => {
  describe('Challenge Question', () => {
    it('returns an object with a grid size object and coordinates array', () => {
      const expected = {
        grid: {x: 5, y: 5},
        coordinates: [
          {x: 0, y: 0},
          {x: 1, y: 3},
          {x: 4, y: 4},
          {x: 4, y: 2},
          {x: 4, y: 2},
          {x: 0, y: 1},
          {x: 3, y: 2},
          {x: 2, y: 3},
          {x: 4, y: 1},
        ],
      };
      const actual = parseUserInput('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)');

      expect(actual).toEqual(expected);
    });
  });

  describe('Input with arbitrary spaces', () => {
    it('returns an object with a grid size object and coordinates array', () => {
      const expected = {
        grid: {x: 5, y: 5},
        coordinates: [
          {x: 0, y: 0},
        ],
      };
      const actual = parseUserInput('  5  x  5   (   0  ,   0   )  ');

      expect(actual).toEqual(expected);
    });
  });

  describe('Input with no spaces', () => {
    it('returns an object with a grid size object and coordinates array', () => {
      const expected = {
        grid: {x: 5, y: 5},
        coordinates: [
          {x: 0, y: 0},
        ],
      };
      const actual = parseUserInput('5x5(0,0)');

      expect(actual).toEqual(expected);
    });
  });

  describe('M x N grid, multi digit', () => {
    it('returns an object with a grid size object and coordinates array', () => {
      const expected = {
        grid: {x: 151, y: 20},
        coordinates: [
          {x: 10, y: 10},
          {x: 1, y: 13},
          {x: 14, y: 4},
        ],
      };
      const actual = parseUserInput('151x20(10,10)(1,13)(14,4)');

      expect(actual).toEqual(expected);
    });
  });

  describe('Invalid input', () => {
    describe('x point out of bounds (>= gridX)', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('5x5 (5, 3)')).toThrow();
      });
    });
    
    describe('y point out of bounds (>= gridY)', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('5x5 (1, 5)')).toThrow();
      });
    });

    describe('Negative grid coordinates', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('5x-5 (4, -2)')).toThrow();
      });
    });

    describe('Negative delivery coordinates', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('5x5 (4, -2)')).toThrow();
      });
    });

    describe('Missing coordinates', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('5x5')).toThrow();
      });
    });

    describe('Arbitrary strings', () => {
      it('throws an error', () => {
        expect(() => parseUserInput('something unexpected')).toThrow();
      });
    });
  });
});
