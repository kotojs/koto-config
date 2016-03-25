function KotoConfig(schema) {
  const jjv = require('jjv');
  // TODO: add new types  here

  return function Decorator(target) {
    const validator = jjv();
    const proxyConfig = target.prototype.config;
    target.prototype.config = function proxy(name, value) {
      const errors = validator.validate(schema, { [name]: value });
      if (!errors) {
        return proxyConfig.call(this, name, value);
      }
      // TODO: handle errors
      throw Error('invald config');
    };
  };
}

if (ON_TEST) {
  require('./index.spec.js')(KotoConfig);
}

export default KotoConfig;
