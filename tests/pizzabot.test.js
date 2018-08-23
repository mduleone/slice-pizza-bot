const pizzabot = require('../src/pizzabot');

describe('Challenge Question', () => {
  it('Returns a valid path', () => {
    const expected = 'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD';
    const actual = pizzabot('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)');

    expect(actual).toEqual(expected);
  });
});

describe('Example Question', () => {
  it('Returns a valid path', () => {
    const expected = 'ENNNDEEEND';
    const actual = pizzabot('5x5 (1, 3) (4, 4)');

    expect(actual).toEqual(expected);
  });
});

describe('Invalid Input', () => {
  it('Throws an error', () => {
    expect(() => pizzabot('something unexpected')).toThrow();
  });
});
