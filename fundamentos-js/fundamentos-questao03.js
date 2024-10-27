function celsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  function fahrenheitParaCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  
  const tempCelsius = 30;
  const tempFahrenheit = 86;
  
  console.log(
    `${tempCelsius}°C em Fahrenheit é: ${celsiusParaFahrenheit(
      tempCelsius
    ).toFixed(2)}°F`
  );
  console.log(
    `${tempFahrenheit}°F em Celsius é: ${fahrenheitParaCelsius(
      tempFahrenheit
    ).toFixed(2)}°C`
  );
  