import convert from "convert-units";

class UnitConverter {
  units = {
    'Kelvin': 'K',
    'Celsius': 'C',
    'Fahrenheit': 'F',
    'Rankine': 'R',
    'liters': 'l',
    'tablespoons': 'Tbs',
    'cubic-inches': 'in3',
    'cups': 'cup',
    'cubic-feet': 'ft3',
    'gallons': 'gal',
  }
  output(input, input_unit, target_unit, response) {
    try {
      const rightValue = convert(input).from(input_unit).to(target_unit);
      return this.round(rightValue) == this.round(response) ? 'correct' : 'incorrect';
    } catch (error) {
      return 'invalid';
    }
  }
  round(value) {
    return value>=0 ? Math.floor(value * 10) / 10 : Math.ceil(value * 10) / 10;
  }
}

export default UnitConverter;
