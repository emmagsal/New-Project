let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
let city = "sydney";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature} degrees in ${city}`;
}
axios.get(apiUrl).then(showTemp);