function forecast(citycode, id) {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + citycode + "&appid=d177f9a2f10fb5fa6a90b89e06a479aa&units=imperial"
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            document.getElementById(id).textContent = jsObject.main.temp;
        });
}

function getTemples() {
    fetch("temples.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.log(jsonObject)
            const temples = jsonObject['temples'];
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let text = document.createElement('div');
                let name = document.createElement('h2');
                let ul = document.createElement('ul');
                let u2 = document.createElement('ul');
                let li = document.createElement('li');

                name.textContent = temples[i].name;
                text.appendChild(name);
                text.appendChild(ul);

                li.textContent = "Telephone: " + temples[i].telephone;
                ul.appendChild()

                for (let j = 0; j < events.length; j++) {
                    let p = document.createElement('p');
                    p.textContent = events[j];
                    text.appendChild(p);
                }

                card.appendChild(text);

                document.querySelector('div.events').appendChild(card);
            }
        });
}