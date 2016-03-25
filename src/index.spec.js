module.exports = KotoConfig => {
  var Koto = require('koto');
  describe('kotoConifg', () => {
    it('should exist', () => {
      expect(KotoConfig).to.not.equal(undefined);
    });

    it('should decorate a Koto class', function() {
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
            height: { value: 100 }
          };
        }
        preDraw() {
          console.log('predraw');
        }
      }

      const chart = new Chart(d3.select(document.body));
      expect(() => chart.config('height', 400)).to.throw(Error);
    });
  });
};
