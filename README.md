[![Build Status](https://travis-ci.org/kotojs/koto-config.svg?branch=master)](https://travis-ci.org/kotojs/koto-config)
[![Coverage Status](https://coveralls.io/repos/github/kotojs/koto-config/badge.svg?branch=master)](https://coveralls.io/github/kotojs/koto-config?branch=master)

# Koto Config (WIP)
This is an optional decorator for KotoJS charts that allows chart authors to specify a validation schema (using JSON-SCHEMA). Attempting to set a property that is not valid will throw an Error.

## Example Usage
```js
// JSON SCHEMA
const schema = {
  height: {
    type: 'number',
    minimum: 500,
    default: 500
  },
  fill: {
    type: 'color',
    default: '#fff'
  }
};

@KotoConfig(schema)
class Chart extends Koto {
  preDraw() {
    console.log('predraw');
  }
}

const chart = new Chart(d3.select(document.body));
chart.config('height', 400); // => throws Error with message
chart.config('fill', 'steelblue'); // valid
```

## Vaidation types
- boolean
- number
  - minimum
  - maximum
- integer
  - minimum
  - maximum
- string
  - in
- array
  - items
- color
- scale

### Coming soon
- Object
  - properties
  - required
- number
  - multipleOf
- array
  - minLength
  - maxLength
- string
  - pattern
  - minLength
  - maxLength

## Repo Usage
- `$ npm start` to run webpack-dev-server
- `$ npm test` to run unit tests
- `$ npm tdd` to continuously run tests
- `$ npm run jshint` to lint code
- `$ npm run build` to build (and minify)
- `$ npm version (patch|minor|major)` to create git release
