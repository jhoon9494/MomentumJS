const API_KEY = "0e88019b235e77810f19d26c5942b161"; //openweathermap.org API_KEY

function onGeoOk(position){
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //weatherAPI URL
  fetch(url) //url 불러오기
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);