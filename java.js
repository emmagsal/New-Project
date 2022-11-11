let now = new Date();

let fullDate = document.querySelector("#time");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
fullDate.innerHTML = `${day} ${hours}:${minutes}`;

function showTemp(response) {
  let temperatureElement = document.querySelector("h2#temp");
  let temp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temp}°C`;
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.main.humidity;
  humidityElement.innerHTML = `${humidity}% Humidity`;
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `${wind}km/ph`;
  let weatherElement = document.querySelector("#description");
  let description = response.data.weather[0].description;
  weatherElement.innerHTML = `${description}`; 
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
  console.log(response.data);
}

function apiRun(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-input");
  let city = document.querySelector("#search-input").value;
  let h1 = document.querySelector("h1#local");
  h1.innerHTML = `${city}`;
  
  
  let apiKey = "81e334dfd2ddb96e6b5193c1f2e3e97f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let selectTemp = document.querySelector("#search-form");
selectTemp.addEventListener("submit", apiRun);



function showWeather(response) {
  let local = document.querySelector("h1#local");
  let temperature = document.querySelector("h2#temp");
  let temp = Math.round(response.data.main.temp);
  local.innerHTML = `${response.data.name}`;
  temperature.innerHTML = `${temp}°C`;
}

function findPosition(position) {
  let apiKeyL = "81e334dfd2ddb96e6b5193c1f2e3e97f";
  let long = position.coords.longitude;
  let lati = position.coords.latitude;
  let urlL = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=${apiKeyL}`;
  axios.get(urlL).then(showWeather);
}

function geoGo() {
  navigator.geolocation.getCurrentPosition(findPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", geoGo);
