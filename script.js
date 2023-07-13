const apiKey="6ab5b21044d19178f17bb05f8218e6c7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchButton= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city)
{
  const response = await fetch(apiUrl+city+`&appid=${apiKey}`);


  if(response.status == 404)
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else
  {
    
  var data= await response.json();
  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
  document.querySelector(".wind").innerHTML= data.wind.speed+" km/h";

  if(data.weather[0].main == "Clouds")
  {
    weatherIcon.src="clouds.png";
  }
  else if(data.weather[0].main == "Clear")
  {
    weatherIcon.src="clear.png";
  }
  else if(data.weather[0].main == "Rain")
  {
    weatherIcon.src="rain.png";
  }
  else if(data.weather[0].main == "Drizzle")
  {
    weatherIcon.src="drizzle.png";
  }
  else if(data.weather[0].main == "Mist")
  {
    weatherIcon.src="mist.png";
  }
  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display= "block";
}
  }

searchButton.addEventListener("click", ()=>
{
  checkWeather(searchBox.value);
})
// ////////////////////video background responsiveness///////////////////////
window.addEventListener('resize', function() {
    var videoContainer = document.querySelector('.video-container');
    videoContainer.style.height = window.innerHeight + 'px';
  });
  