const apiKey="6ab5b21044d19178f17bb05f8218e6c7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather()
{
  const response = await fetch(apiUrl+`&appid=${apiKey}`);
  var data= await response.json();

  console.log(data);
}
checkWeather();
// ////////////////////video background responsiveness///////////////////////
window.addEventListener('resize', function() {
    var videoContainer = document.querySelector('.video-container');
    videoContainer.style.height = window.innerHeight + 'px';
  });
  