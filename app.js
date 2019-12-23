const LOCATION = "New York, NY";
const ID = 5128581;
const URL = `api.openweathermap.org/data/2.5/weather?id=${ID}&APPID=${APPID}`;
let celcius = 7;

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

updateDate();

// Current Location
const updateLocation = () => {
  const loc = document.querySelector("#current-place");
  loc.innerHTML = LOCATION;
};

updateLocation();

// Convert Between Celcius and Fahrenheit
const toCelcius = faren => {
  return (faren - 32) * (5 / 9);
};

const toFahrenheit = cel => {
  return (9 / 5) * cel + 32;
};

const getConversionTable = cel => {
  return {
    C: cel,
    F: parseInt(toFahrenheit(cel))
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

// Animations
const animation = document.querySelector(".animation");
