const apiKey = ""; // darksky.net api key
const latitude = "45.536031"; // Showing Montreal.  search your city on google map and look at the url to get your latitude and longitude
const longitude = "-73.5906905";
const lang = "en"; // too many options.  check here https://darksky.net/dev/docs/forecast
const units = "si"; // auto, ca, uk2, us, si
const degreeSymbol = "C"; // C or F
const rainPrecUnit = "mm";
const snowPrecUnit = "cm";
const windUnit = "km/h"
const forecastNbOfDays = 6; // 0 to 8
const hourlyNbOfHours = 20; // 0-49
const theme = "blue"; // "blue", "black", "white"

let showScrollingAlerts = true;
let showCurrentWeather = true;
let showCurrentIcon = true;
let showCurrentSummary = true;
let showCurrentWind = true;
let showCurrentWindBearing = true;
let showCurrentHumidity = true;
let showCurrentDate = true;
let showCurrentTime = true;

let showHourlyIcon = true;
let showHourlyWind = true;
let showHourlyWindBearing = true;
let showHourlyAccumulation = true;
let showHourlyHumidity = true;
let showHourlyProbability = true;

let showForecastIcon = true;
let showForecastSummary = true;
let showForecastMinTemp = true;
let showForecastWind = true;
let showForecastWindBearing = true;
let showForecastHumidity = true;
let showForecastAccumulation = true;
let showForecastProbability = true;


let showDarkSkyLink = true; // set to true if you have a free darksky api key.

let debugging = false; // will allow showing forecast for past days.  Usefull when playing with sample data

// Set for your language
// English
const todayLabel = "Today";
const windLabel = "wind";
const apparentTempLabel = "feeling";
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// French
//var todayLabel = "Aujourd'hui";
//var windLabel = "vent";
//var apparentTempLabel = "ressentie";
//var week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
//var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

let url = 'https://api.darksky.net/forecast/' + apiKey + '/' + latitude + ',' + longitude + '?lang=' + lang + '&units=' + units;
