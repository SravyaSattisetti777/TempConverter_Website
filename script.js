function convertTemperature(from) {
    const inputElement = document.getElementById(from);
    const inputValue = parseFloat(inputElement.value);
    
    let convertedValues = {};
  
    switch (from) {
      case 'celsius':
        convertedValues.fahrenheit = (inputValue * 9/5) + 32;
        convertedValues.kelvin = inputValue + 273.15;
        convertedValues.rankine = (inputValue + 273.15) * 9/5;
        convertedValues.reamur = inputValue * 4/5;
        break;
  
      case 'fahrenheit':
        convertedValues.celsius = (inputValue - 32) * 5/9;
        convertedValues.kelvin = (inputValue - 32) * 5/9 + 273.15;
        convertedValues.rankine = inputValue + 459.67;
        convertedValues.reamur = (inputValue - 32) * 4/9;
        break;
  
      case 'kelvin':
        convertedValues.celsius = inputValue - 273.15;
        convertedValues.fahrenheit = (inputValue - 273.15) * 9/5 + 32;
        convertedValues.rankine = inputValue * 9/5;
        convertedValues.reamur = (inputValue - 273.15) * 4/5;
        break;
  
      case 'rankine':
        convertedValues.celsius = (inputValue - 491.67) * 5/9;
        convertedValues.fahrenheit = inputValue - 459.67;
        convertedValues.kelvin = inputValue * 5/9;
        convertedValues.reamur = (inputValue - 491.67) * 4/9;
        break;
  
      case 'reamur':
        convertedValues.celsius = inputValue * 5/4;
        convertedValues.fahrenheit = (inputValue * 9/4) + 32;
        convertedValues.kelvin = (inputValue * 5/4) + 273.15;
        convertedValues.rankine = (inputValue * 9/4) + 491.67;
        break;
  
      default:
        break;
    }
  
    for (const unit in convertedValues) {
      if (convertedValues.hasOwnProperty(unit)) {
        const outputElement = document.getElementById(unit);
        outputElement.value = convertedValues[unit].toFixed(2);
      }
    }
  }
  