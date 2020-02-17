const R = require("ramda");

const cities = require("./cities");

const KelvinToCelcious = (k) => k - 273.15;
const KelvinToFarenheit = (k) => k * 9 / 5 - 459.67;


//by passing in convertFn, this is more generic, we can do the conversion using whichever method we like...
const updateTemperature = (convertFn) => {
  return city => {
    const temp = Math.round(convertFn(city.temp))
    return R.merge(city, { temp })
  }
}

//but how to pass the fn? 
const updatedCities = cities.map(updateTemperature(KelvinToFarenheit));

console.log(updatedCities);