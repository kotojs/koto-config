module.exports = kotoConfig => {
  const d3 = require('d3');
  const Koto = require('koto');
  describe('kotoConifg', () => {
    let chart;
    beforeEach(() => {
      const schema = {
        height: {
          type: 'number',
          minimum: 500
        },
        fill: {
          type: 'color'
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

      chart = new Chart(d3.select(document.body));
    });

    it('should exist', () => {
      expect(kotoConfig).to.not.equal(undefined);
    });

    it('should throw error on invalid number', () => {
      expect(() => chart.config('height', 400)).to.throw(Error);
    });

    it('should throw error on invalid custom type (color)', () => {
      expect(() => chart.config('fill', 'no-a-color')).to.throw(Error);
    });

    it('should pass on valid custom type (color)', () => {
      expect(() => chart.config('fill', 'white')).to.throw(Error);
    });
  });
};
