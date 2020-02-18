const R = require("ramda");
const table = require("text-table")
const cities = require("./cities");

const kelvinToCelcious = (k) => k - 273.15;
const kelvinToFarenheit = (k) => k * 9 / 5 - 459.67;


//by passing in convertFn, this is more generic, we can do the conversion using whichever method we like...
const updateTemperature = (convertFn) => {
  return city => {
    const temp = Math.round(convertFn(city.temp))
    return R.merge(city, { temp })
  }
}

//but how to pass the fn? 
const updatedCities = cities.map(updateTemperature(kelvinToFarenheit));

//updating our function

const firstCity = cities[0];
//this works but forces the weird currying syntax when called 
const updateFirstCity = updateTemperature(kelvinToFarenheit)(firstCity);
// console.log("updateFirstCity", updateFirstCity)

// the fix is to revert back to having two arguments for our updateTemperature function but using R.curry

const updateTemperatureWithRCurry = R.curry((callbackFn, city) => {
  const temp = callbackFn(city.temp);
  return R.merge(city, { temp })
})

const secondCity = cities[1];

// and now it can be called normally or with partial application...
const updateSecondCity = updateTemperatureWithRCurry(kelvinToCelcious)(secondCity);
// console.log("updateSecondCity", updateSecondCity);


const totalCostReducer = (acc, city) => {
  return acc + Number(city.cost);
}


const totalCost = R.reduce(totalCostReducer, 0, updatedCities)
// console.log(totalCost); //250891

const average = totalCost / R.length(updatedCities);
console.log("avg", average)


const groupByPropReducer = (acc, city) => {
  const { cost = [], internetSpeed = [] } = acc;
  return R.merge(acc, {
    cost: R.append(city.cost, cost),
    internetSpeed: R.append(city.internetSpeed, internetSpeed)
  })
}

const groupByProp = R.reduce(groupByPropReducer, {}, updatedCities)

//reduces each into an obj with all their costs and internet speeds grouped in array
// console.log(groupByProp);

const percentile = require("./percentile")

const calcScore = (city) => {
  const { cost = 0, internetSpeed = 0 } = city;
  const costPercentile = percentile(groupByProp.cost, cost);
  const internetPercentile = percentile(groupByProp.internetSpeed, internetSpeed);

  const score =
    // 1 minus costPercentile because we prefer low costs...
    100 * (1 - costPercentile)
    +
    20 * internetPercentile;
  return R.merge(city, { score })

}

const rankedCities = R.map(calcScore, updatedCities);

const weatherFilter = (city) => {
  const { temp = 0, humidity = 0 } = city;
  return temp > 68 && temp < 85 && humidity > 30 && humidity < 70;

}

const filteredCitiesOnWeather = R.filter(weatherFilter, rankedCities)

// console.log('filtered by weather', R.length(filteredCitiesOnWeather));

const sortedCities = R.sortWith(
  [R.descend(city => city.score)],
  filteredCitiesOnWeather
)


const top10 = R.take(10)(sortedCities)

// console.log("top 10", top10)

const convertToArr = (city) => {
  const { name, country, region, cost, currency, temp, humidity, internetSpeed } = city;
  return [name, country, region, cost, currency, temp, humidity, internetSpeed];
}

const interestingProps = ["NAME", "COUNTRY", "REGION", "COST", "CURRENCY", "TEMP", "HUMIDITY", "INTERNETSPEED"];

const pipedCities = R.pipe(
  R.map(updateTemperatureWithRCurry(kelvinToFarenheit)),
  R.filter(weatherFilter),
  R.map(calcScore),
  R.sortWith([R.descend(city => city.score)]),
  R.take(10),
  R.map(convertToArr),
  R.prepend(interestingProps),
  table
)(cities)

console.log("pipedCities");
console.log(pipedCities);