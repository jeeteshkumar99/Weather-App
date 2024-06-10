
function weatherNews(){
    var getinp = document.getElementById('inp')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&appid=033fb18239d74d7fa12f35e8261c3e15`)
    .then(function (data){
        return data.json()
    })
    .then(function (data){

        var getWeather = document.getElementById('weather')
        getWeather.innerHTML = `<div class ="row d-flex justify-content-center">
            <div class="card  text-body" style="width: 40rem; height: 22rem;">
                <div class="card-body">
                    <div class="d-flex">
                        <h5 class="flex-grow-1">${data.name}</h5>
                        <h6 class="">Feels Like: ${data.main.feels_like}<sup>o</sup>C</h6>
                        <div class="d-flex flex-column text-center mt-5 mb-4">
                            <h6 class="display-4 mb-0 font-weight-bold"><i class="fa-solid fa-cloud"></i>${data.main.temp}<sup>o</sup>C</h6>
                            <span class="small" style="color: #868B94">${data.weather[0].main}</span>
                            
                         </div>
                         <div>
                            <h6 class="">wind speed ${data.wind.speed}
                         </div>
                         <div>
                            
                         </div>
                    </div>
                </div>
            </div>`
      getinp.value =''
    })
    .catch(function (err){
      console.log(err)
    })
}


