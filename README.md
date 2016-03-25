# Koto Config (WIP)
This is an optional decorator for KotoJS charts that allows chart authors to specify a validation schema (using JSON-SCHEMA). Attempting to set a property that is not valid will throw an Error.

## Example Usage
```js
// JSON SCHEMA
const schema = {
  type: 'object',
  properties: {
    height: {
      type: 'number',
      minimum: 500
    }
  }
};

@KotoConfig(schema)
class Chart extends Koto {
  constructor(selection) {
    super(selection);
    this.configs = {
      height: { value: 500 }
    };
  }
  preDraw() {
    console.log('predraw');
  }
}

const chart = new Chart(d3.select(document.body));
chart.config('height', 400); // => throws Error
```
## Repo Usage
- `$ npm start` to run webpack-dev-server
- `$ npm test` to run unit tests
- `$ npm tdd` to continuously run tests
- `$ npm run jshint` to lint code
- `$ npm run build` to build (and minify)
- `$ npm version (patch|minor|major)` to create git release
