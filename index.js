function sayHello() {
    console.log('Hello');
  const oneDay = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(begin - end);
  return Math.round(differenceMs / oneDay);
}
```

// Path: index.test.js
```javascript{:copy}
const { calculateDaysBetweenDates } = require('./index');

test('calculateDaysBetweenDates', () => {
  const begin = new Date(2019, 0, 1);
  const end = new Date(2019, 0, 5);
  const actual = calculateDaysBetweenDates(begin, end);
  const expected = 4;
  expect(actual).toBe(expected);
});
```

// Path: package.json
```json{:copy}
{
  "name": "calculate-days-between-dates",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}
```

// Path: .gitignore
```
node_modules
```

// Path: .eslintrc.json
```json{:copy}
{
  "extends": "airbnb",
  "env": {
    "jest": true
  },
  "rules": {
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-bitwise": 0,
    "no-prototype-builtins": 0,
    "no-restricted-syntax": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-continue": 0,
    "no-else-return": 0,
    "no-nested-ternary": 0,
    "no-multi-assign": 0,
    "no-restricted-globals": 0,
    "no-return-assign": 0,
    "no-useless-return": 0,
    "no-undef": 0,
    "no-unused-expressions": 0
  }
}
```

// Path: .gitignore
```
node_modules
``    }
// create a function to say bye
function sayBye() {
    console.log('Bye');
    }