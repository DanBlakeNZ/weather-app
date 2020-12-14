const setTemperature = (temperature, requiredUnit) => {
  if (requiredUnit === "f") {
    return Math.round((temperature * 9) / 5 + 32) + "\xB0F";
  } else {
    return Math.round(temperature) + "\xB0C";
  }
};

export default setTemperature;
