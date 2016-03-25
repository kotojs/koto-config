import { validator, compile } from './validator';

function KotoConfig(schema) {
  return function Decorator(Target) {
    return class extended extends Target {
      constructor(selection) {
        super(selection);
        this.configs = compile(schema);
      }

      config(nameOrObject, value) {
        if (typeof nameOrObject === 'undefined') {
          return config.call(this, nameOrObject, value);
        }

        if (typeof value === 'undefined') {
          if (typeof nameOrObject === 'object') {
            const errorMessage = validator(schema, nameOrObject);
            if (!errorMessage) {
              // eventualy this will be super call
              return config.call(this, nameOrObject, value);
            }
            throw Error(errorMessage);
          } else {
            return config.call(this, nameOrObject, value);
          }
        }

        if (schema.hasOwnProperty(nameOrObject)) {
          const errorMessage = validator(schema[nameOrObject], value);
          if (!errorMessage) {
            // eventualy this will be super call
            return config.call(this, nameOrObject, value);
          }
          throw Error(errorMessage);
        } else {
          return config.call(this, nameOrObject, value);
        }
      }
    };


    function config(nameOrObject, value) {
      if (typeof nameOrObject === 'undefined') {
        return this.configs;
      }

      if (typeof value === 'undefined') {
        if (typeof nameOrObject === 'object') {
          for (const key in nameOrObject) {
            if (this.configs.hasOwnProperty(key)) {
              this.configs[key] = nameOrObject[key];
            } else {
              console.warn(`config with name ${nameOrObject} is not defined.`);
            }
          }
          return this;
        }

        // kotoAssert(this.configs.hasOwnProperty(nameOrObject), `${nameOrObject} is not a valid option.`);
        return this.configs[nameOrObject];
      }

      if (this.configs.hasOwnProperty(nameOrObject)) {
        this.configs[nameOrObject] = value;
      } else {
        console.warn(`config with name ${nameOrObject} is not defined.`);
      }
      return this;
    }
  };
}

if (ON_TEST) {
  require('./index.spec.js')(KotoConfig);
}

export default KotoConfig;
