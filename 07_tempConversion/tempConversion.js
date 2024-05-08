const convertToCelsius = function(fa) {
  const result = Number((fa - 32) * 5/9);
  return result % 1 !== 0 ? Number(result.toFixed(1)) : result;
};

const convertToFahrenheit = function(cel) {
  // (0°C × 9/5) + 32 = 32°F
  const result = Number((cel * 9/5) + 32)
  return result % 1 !== 0 ? Number(result.toFixed(1)) : result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
