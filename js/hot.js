//! do not keep api key in such type
const API = `27b31be22bd06fab5543b7cff8af2f3b`
let universal;


const loadData = async (city = "london") =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    universal = data;
    displayData(data)
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}

const displayData = data => {
  try{
    console.log(universal);
    document.getElementById('tempo').innerText = data.main.temp
    document.getElementById('cityName').innerText = data.name
    document.getElementById('weather').innerText = data.weather[0].main
    data.wind.speed === 0 ?  document.getElementById('wind').innerText = '' : (document.getElementById('wind').innerText = "Wind speed " + data.wind.speed );
    
    document.getElementById('err').innerText = ""
  } 
  catch(error){
    document.getElementById('tempo').innerText = ""
    document.getElementById('cityName').innerText = ''
    document.getElementById('weather').innerText = ''
    document.getElementById('wind').innerText = '' 
    document.getElementById('err').innerText = "Something went wrong "
  }
}

document.getElementById('searchBtn').addEventListener('click', function(){
    const cityInput = document.getElementById("inputField")
    const city = cityInput.value 
    loadData(city)
    cityInput.value = ""
    
})
document.getElementById("inputField").addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        loadData(document.getElementById("inputField").value)
        document.getElementById("inputField").value = ""
    }
})

loadData('dhaka')