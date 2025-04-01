// let cityName="new York";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&`;
const apiKey="appid=122d7ecbdcd9d1d8991862993319fc8a"

const search=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city) {
	const response = await fetch(url +`q=${city}&`+ apiKey);
	const result = await response.json();
	// console.log(result);
    document.querySelector(".city").innerHTML=result.name;
    document.querySelector(".temp").innerHTML=Math.floor(result.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=result.main.humidity+"%";
    document.querySelector(".wind").innerHTML=result.wind.speed+" km/h";

    if (result.weather[0].main=="Clouds") {
        weatherIcon.src="images/clouds.png"
    }
    else if(result.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"   
    }
    else if(result.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"   
    }
    else if(result.weather[0].main=="Drizzle"){
        weatherIcon.src="images/Drizzle.png"   
    }
    else if(result.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"   
    }
    else if(result.weather[0].main=="Haze"){
        weatherIcon.src="images/snow.png"   
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(search.value)
})
checkWeather("dehli");