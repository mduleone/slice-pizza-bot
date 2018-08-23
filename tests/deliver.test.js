const deliverPizzas = require('../src/deliver');

describe('deliverPizzas', () => {
  describe('Challenge Question', () => {
    it('returns a delivery path string', () => {
      const path = [
        {x: 0, y: 0},
        {x: 1, y: 3},
        {x: 4, y: 4},
        {x: 4, y: 2},
        {x: 4, y: 2},
        {x: 0, y: 1},
        {x: 3, y: 2},
        {x: 2, y: 3},
        {x: 4, y: 1},
      ];
      const expected = 'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD';
      const actual = deliverPizzas(path);

      expect(actual).toEqual(expected);
    });
  });
});
