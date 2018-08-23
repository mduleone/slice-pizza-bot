# PizzaBot

Solution to Pizza Bot engineering [coding challenge](./CHALLENGE.md).

## Assumptions

- Node version: `8.x.x` (built on `8.11.3`)
- Grid size is `NxM`, where `N,M > 0`
- For an `NxM` grid, the farthest allowed point is `(N - 1, M - 1)`, as the origin point is `(0, 0)`
- Input without both a grid size and coordinates is considered invalid
- Negative coordinates are disallowed

## Running and Testing

This assumes you are using `yarn`. The instructions would work substituting the appropriate `npm` alternative commands.

### Install appropriate dependencies

```shell
$ yarn
```

### Running

```shell
$ yarn pizzabot "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"
yarn run v1.3.2
$ node index '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD
✨  Done in 0.18s.
```

**Note:** For an entry point without the additional output from `yarn` or `npm`, use `node index`.

```shell
$ node index "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"
DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD
```

### Testing

```shell
$ yarn test
yarn run v1.3.2
$ jest
 PASS  tests/utilities.test.js
 PASS  tests/pizzabot.test.js
 PASS  tests/parsers.test.js
--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |      100 |      100 |      100 |      100 |                   |
 constants.js |      100 |      100 |      100 |      100 |                   |
 parsers.js   |      100 |      100 |      100 |      100 |                   |
 pizzabot.js  |      100 |      100 |      100 |      100 |                   |
 utilities.js |      100 |      100 |      100 |      100 |                   |
--------------|----------|----------|----------|----------|-------------------|

Test Suites: 3 passed, 3 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.729s
Ran all test suites.
✨  Done in 2.57s.
```

## API and Usage

### `./index.js`

The main entrypoint. Takes the input and passes it to the pizza bot.

### `./src/constants.js`

Exports the constants used throughout the parsers and utilities

### `./src/deliver.js`

Exports utilities to deliver pizza

Public API:
- `deliverPizzas`
    Accepts the array of coordinates returned from parsing the user input and returns a delivery path

### `./src/parse.js`

Exports the functions to parse the user input

Public API:
- `parseUserInput`
    Accepts the user input and extracts the grid size object and coordinates array or throws an error if the input is invalid

### `./src/pizzabot.js`

Exports the path generator

Public API:
- `pizzabot`
    Takes the user input and generates the delivery path or throws an error.
