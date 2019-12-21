function forecast(citycode, id) {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + citycode + "&appid=d177f9a2f10fb5fa6a90b89e06a479aa&units=imperial"
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            document.getElementById(id).textContent = "High: " + jsObject.main.temp + " °F";
        });
}

function getTemples() {
    fetch("https://mariaconsueloj.github.io/lesson12/temples.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.log(jsonObject)
            const temples = jsonObject['temples'];
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let img = document.createElement('img');
                let text = document.createElement('div');
                let name = document.createElement('h2');
                let ul = document.createElement('ul');
                let services = document.createElement('ul');
                let history = document.createElement('ul');
                let sessions = document.createElement('ul');
                let closures = document.createElement('ul');
                let servicesli = document.createElement('li');
                let historyli = document.createElement('li');
                let sessionsli = document.createElement('li');
                let closuresli = document.createElement('li');
                let li = document.createElement('li');
                let addressli = document.createElement('li');
                let teleli = document.createElement('li');
                let emailli = document.createElement('li');

                img.setAttribute('src', temples[i].imageurl);
                img.setAttribute('alt', temples[i].name);
                img.setAttribute('class', "templeimg");
                text.appendChild(img);

                name.textContent = temples[i].name;
                text.appendChild(name);

                addressli.textContent = "Address: " + temples[i].address;
                ul.appendChild(addressli);

                teleli.textContent = "Telephone: " + temples[i].telephone;
                ul.appendChild(teleli);
                emailli.textContent = "Email: " + temples[i].email;
                ul.appendChild(emailli);
                servicesli.textContent = "Services: ";

                for (let j = 0; j < temples[i].services.length; j++) {
                    let li2 = document.createElement('li');
                    li2.textContent = temples[i].services[j];
                    services.appendChild(li2);
                }
                servicesli.appendChild(services);
                ul.appendChild(servicesli);

                historyli.textContent = "History: ";
                for (let j = 0; j < temples[i].history.length; j++) {
                    let li2 = document.createElement('li');
                    li2.textContent = temples[i].history[j];
                    history.appendChild(li2);
                }
                historyli.appendChild(history);
                ul.appendChild(historyli);

                sessionsli.textContent = "Endowment Sessions: ";
                for (let j = 0; j < temples[i].sessionschedule.length; j++) {
                    let li2 = document.createElement('li');
                    li2.textContent = temples[i].sessionschedule[j];
                    sessions.appendChild(li2);
                }
                sessionsli.appendChild(sessions);
                ul.appendChild(sessionsli);

                closuresli.textContent = "Temple Closures: ";
                for (let j = 0; j < temples[i].templeclosureschedule.length; j++) {
                    let li2 = document.createElement('li');
                    li2.textContent = temples[i].templeclosureschedule[j];
                    closures.appendChild(li2);
                }
                closuresli.appendChild(closures);
                ul.appendChild(closuresli);

                li.setAttribute('id', temples[i].citycode);
                ul.appendChild(li);

                text.appendChild(ul);
                card.appendChild(text);

                document.querySelector('div.temples').appendChild(card);
                forecast(temples[i].citycode, temples[i].citycode);
            }
        });
}