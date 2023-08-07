function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(temperatureInput)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    let convertedTemperature;
    let convertedUnit;
  
    if (unitSelect === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      convertedUnit = "Fahrenheit";
    } else {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      convertedUnit = "Celsius";
    }
  
    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }
  