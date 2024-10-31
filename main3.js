const searchbox = document.querySelectorAll("input");
const searchbtn = document.querySelector("button");

async function clickweather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +city+ `&appid = 8133c7fa3bb94e0a90b61306791e0c17`
        
    );
   var data = await response.json();
   console.log(data);
   document.querySelector(".country").innerHTML += data.sys.country ;
   document.querySelector(".city").innerHTML += data.name;
   document.querySelector(".temp").innerHTML += 
   math.round(data.main.temp) + "<sup>o</sup>C";
   document.querySelector(".speed").innerhtml += data.wind.speed;

}

searchbtn.addEventListener("click", () =>{
    clickweather(searchbox.value);
});