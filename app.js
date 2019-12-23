const LOCATION = "New York, NY";
const ID = 5128581;
const APPID = config.APPID;
const API_URL = `http://api.openweathermap.org/data/2.5/weather?id=${ID}&APPID=${APPID}&units=metric`;
let celcius;

// Current Date
const getCurrentDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today
    .getFullYear()
    .toString()
    .slice(2);
  const date = `${month}/${day}/${year}`;
  return date;
};

const updateDate = () => {
  const date = document.querySelector("#today");
  date.innerHTML = getCurrentDate();
};

// Current Location
const updateLocation = () => {
  const loc = document.querySelector("#current-place");
  loc.innerHTML = LOCATION;
};

// Convert Between Celcius and Fahrenheit
const toFahrenheit = cel => {
  return (9 / 5) * cel + 32;
};

const getConversionTable = cel => {
  return {
    C: cel,
    F: Math.round(toFahrenheit(cel))
  };
};

const convertTemp = () => {
  // Get conversion table
  const conversionTable = getConversionTable(celcius);

  // Get the current temp and degree val
  const temp = document.querySelector("#temp");
  const degree = document.querySelector("#degree");
  let degreeVal = degree.getAttribute("data-degree");

  // F -> C or C -> F
  let convertedDegree = degreeVal === "F" ? "C" : "F";
  degree.setAttribute("data-degree", convertedDegree);

  // Get conversion
  let convertedVal = conversionTable[convertedDegree];
  temp.innerHTML = `${convertedVal}&#176;${convertedDegree}`;

  if (convertedVal.toString().length > 2) {
    temp.style.fontSize = `30px`;
  } else {
    temp.style.fontSize = `35px`;
  }
};

const temp = document.querySelector(".temperature");
temp.addEventListener("change", convertTemp);

// Get json data from open-weather API
const getJSONData = async url => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};

// Get main description and temperature from the json data
const getMainAndTemp = json => {
  let main = json.weather[0].main;
  let temp = json.main.temp;

  return {
    main: main,
    temp: temp
  };
};

const updateWeatherInfo = async url => {
  const weatherType = document.getElementById("main");
  const temp = document.getElementById("temp");
  const animation = document.querySelector(".animation");

  // Updating date and location
  updateDate();
  updateLocation();

  // Fetching the data
  try {
    const weatherJSON = await getJSONData(url);
    const weatherData = getMainAndTemp(weatherJSON);

    let main = weatherData.main;
    let temperature = weatherData.temp;

    // Updating the DOM
    weatherType.innerHTML = descriptions[main];
    animation.innerHTML = WEATHER[main];
    celcius = Math.round(temperature);
    temp.innerHTML = `${celcius}&#176;C`;

    const degree = document.getElementById("degree");
    degree.setAttribute("data-degree", "C");
    degree.checked = false;

    console.log(weatherJSON);
  } catch (err) {
    console.error(err);
    console.log("Server down");
  }

  // Updating the weather info again after an hour
  setTimeout(() => {
    updateWeatherInfo(url);
  }, 3600000);
};

updateWeatherInfo(API_URL);
