function windChill() {
    var temperature = parseFloat(document.getElementById('high').textContent);
    var wind = parseFloat(document.getElementById('speed').textContent);
    var computeWind = 35.74 + (.6215 * temperature) - 35.75 * Math.pow(wind, 0.16) + (.4275 * temperature * Math.pow(wind, 0.16));
    computeWind = (Math.floor(computeWind));
    if (temperature > 50 || wind <= 3) {
        computeWind = "N/A";
    }
    document.getElementById('windChill').textContent = computeWind;
}

function forecast() {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d177f9a2f10fb5fa6a90b89e06a479aa&units=imperial"
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            const desc = jsObject.weather[0].description;
            document.getElementById('weather').textContent = jsObject.weather[0].main;
            document.getElementById('high').textContent = jsObject.main.temp;
            document.getElementById('humid').textContent = jsObject.main.humidity;
            document.getElementById('speed').textContent = jsObject.wind.speed;

            windChill()
        });

    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    fiveDay = [];

    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d177f9a2f10fb5fa6a90b89e06a479aa&units=imperial"
    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            for (let i = 0; i < jsObject.list.length; i++) {
                if (jsObject.list[i].dt_txt.includes("18:00:00")) {
                    fiveDay.push(jsObject.list[i]);
                }
            }

            console.log(fiveDay);

            for (let i = 0; i < 5; i++) {
                dayId = "day" + i;
                imgId = "day" + i + "i";
                tempId = "day" + i + "t";

                var date = new Date(fiveDay[i].dt_txt) // Make date from string
                document.getElementById(dayId).textContent = days[date.getDay()]; // Get day of week
                document.getElementById(tempId).textContent = fiveDay[i].main.temp; // Set temperature
                const imagesrc = 'https://openweathermap.org/img/w/' + fiveDay[i].weather[0].icon + '.png'; // Get img URL
                const desc = fiveDay[i].weather[0].description; // Get description
                document.getElementById(imgId).setAttribute('src', imagesrc); // Set image source
                document.getElementById(imgId).setAttribute('alt', desc); // Set Description 
            }
        });
}