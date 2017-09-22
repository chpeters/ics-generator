# ICS Generator

A small library of helper functions to generate ICS strings and files.

## Installation

  `npm install ics-generator`

## Usage
```
    let icy = require('/number-formatter');
    const startDate = new Date(2017,8,27,12,30);
    const endDate = new Date(2017,8,27,12,45);
    let icsString = icy.makeString(startDate, endDate, "Example Title", "Example Location");
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
