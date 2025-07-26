 const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-button");
const  weathericon = document.querySelector(".weather-icon");
  
  
 
 
 async function checkWeather(city){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5de4d36ace8945918bf103318252905&q=${city}&aqi=yes`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerText=`${data.location.name} , ${data.location.region}, ${data.location.country}`;
    document.querySelector(".temp").innerText=Math.round(data.current.temp_c)+"°C";
    document.querySelector(".humidity").innerText=data.current.humidity+ "%";
    document.querySelector(".wind").innerText=data.current.wind_kph + "km/h";
     document.querySelector(".date-time").innerText=data.location.localtime;
     if(data.current.is_day==0){
     document.getElementById("back").style.background="linear-gradient(to bottom, #2E2E2E,hsl(0, 0.60%, 30.40%))";
     
     }
     else{
      document.getElementById("back").style.background=" rgb(82, 174, 216)";
     }



     
    

    weathericon.src=data.current.condition.icon;
    
   
   
 }

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })

 
