module.exports = kotoConfig => {
  const d3 = require('d3');
  const Koto = require('koto');
  describe('kotoConifg', () => {
    it('should exist', () => {
      expect(kotoConfig).to.not.equal(undefined);
    });

    it('should decorate a Koto class', () => {
      const schema = {
        type: 'object',
        properties: {
          height: {
            type: 'number',
            minimum: 500
          }
        }
      };

      @kotoConfig(schema)
      class Chart extends Koto {
        constructor(selection) {
          super(selection);
          this.configs = {
            height: { value: 100 }
          };
        }
        preDraw() {
          // do something
        }
      }

      const chart = new Chart(d3.select(document.body));
      expect(() => chart.config('height', 400)).to.throw(Error);
    });
  });
};
