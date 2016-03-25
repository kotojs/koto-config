export function validator(schema, data) {
  switch (schema.type) {
    case 'boolean':
      return validateBoolean(schema, data);
    case 'color':
      return validateColor(schema, data);
    case 'number':
      return validateNumber(schema, data);
    case 'integer':
      return validateInteger(schema, data);
    case 'scale':
      return validateScale(schema, data);
    case 'string':
      return validateString(schema, data);
    case 'array':
      return validateArray(schema, data);
    default:
      throw Error('not a recoginized type');
  }
}

export function compile(schema) {
  const out = {};
  for (const name in schema) {
    if (schema.hasOwnProperty(name)) {
      out[name] = schema[name].default;
    }
  }
  return out;
}

function validateBoolean(schema, data) {
  return typeof data === 'boolean' ? null : `${data} must be a boolean`;
}

function validateArray(schema, data) {
  if (Array.isArray(data)) {
    if (schema.hasOwnProperty('items')) {
      for (let i = 0; i < data.length; i++) {
        const errors = validator(schema.items, data[i]);
        if (errors) {
          return errors;
        }
      }
    }
    return null;
  }
  return `${data} must be an array`;
}

function validateString(schema, data) {
  if (typeof data === 'string') {
    if (schema.hasOwnProperty('in')) {
      if (schema.in.indexOf(data) < 0) {
        return `${data} must be one of ${schema.in.toString()}`;
      }
    }
    return null;
  }
  return `${data} must be a string`;
}

function validateNumber(schema, data) {
  if (typeof data === 'number') {
    if (schema.hasOwnProperty('minimum')) {
      if (data < schema.minimum) {
        return `${data} must be larger than ${schema.minimum}`;
      }
    }
    if (schema.hasOwnProperty('maximum')) {
      if (data < schema.maximum) {
        return `${data} must be smaller than ${schema.maximum}`;
      }
    }
  } else {
    return `${data} is not a valid number`;
  }
  return null;
}

function validateInteger(schema, data) {
  const isValid = typeof data === 'number' && isFinite(data) && Math.floor(data) === data;
  return isValid ? validateNumber(data) : `${data} must me an integer`;
}

// this should probably be in it's own file
// I took this code right from d3js and the modified it
function validateColor(schema, data) {
  const reHex3 = /^#([0-9a-f]{3})$/;
  const reHex6 = /^#([0-9a-f]{6})$/;
  const reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
  const reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
  const reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
  const reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
  const reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
  const reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;

  const named = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown',
    'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan',
    'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred',
    'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
    'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod',
    'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey',
    'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime',
    'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
    'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise',
    'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown',
    'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray',
    'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke',
    'yellow', 'yellowgreen'
  ];

  const format = String(data).trim().toLowerCase();
  const isValid = reHex3.exec(format)
    || reHex6.exec(format)
    || reRgbInteger.exec(format)
    || reRgbPercent.exec(format)
    || reRgbaInteger.exec(format)
    || reRgbaPercent.exec(format)
    || reHslPercent.exec(format)
    || reHslaPercent.exec(format)
    || named.indexOf(format) >= 0
    || format === 'transparent';

  return isValid ? null : `${data} is not a valid color`;
}

function validateScale(schema, data) {
  return data.hasOwnProperty('domain') && typeof data.domain === 'function' ? null : 'not a valid scale';
}

// TODO: add more types here
