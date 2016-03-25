module.exports = kotoConfig => {
  const d3 = require('d3');
  const Koto = require('koto');
  describe('kotoConifg', () => {
    let chart;
    beforeEach(() => {
      const schema = {
        height: {
          type: 'integer',
          minimum: 500,
          default: 500
        },
        fill: {
          type: 'color',
          default: 'steelblue'
        },
        orientation: {
          type: 'string',
          in: ['horizontal', 'vertical'],
          default: 'vertical'
        },
        xScale: {
          type: 'scale',
          default: d3.scale.linear()
        },
        buckets: {
          type: 'array',
          items: {
            type: 'string'
          },
          default: ['hello', 'world']
        },
        showLegend: {
          type: 'boolean',
          default: false
        }
      };

      @kotoConfig(schema)
      class Chart extends Koto {
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
      expect(() => chart.config('fill', 'white')).to.not.throw(Error);
    });

    it('should pass on valid custom type (scale)', () => {
      expect(() => chart.config('xScale', d3.scale.linear())).to.not.throw(Error);
    });

    it('should pass on valid custom type (string)', () => {
      expect(() => chart.config('orientation', 'wrong')).to.throw(Error);
    });

    it('should pass on valid custom type (array)', () => {
      expect(() => chart.config('buckets', [1337])).to.throw(Error);
    });

    it('should pass on valid custom type (boolean)', () => {
      expect(() => chart.config('showLegend', true)).to.not.throw(Error);
    });
  });
};
