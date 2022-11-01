function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temp = Math.round(response.data.main.temp);
  h1.innerHTML = `The weather is ${temp} in ${response.data.name}`;
}

function findPosition(position) {
  let apiKey = "81e334dfd2ddb96e6b5193c1f2e3e97f";
  let long = position.coords.longitude;
  let lati = position.coords.latitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(findPosition);
