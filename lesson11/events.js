const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function getEvents(townName) {
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == townName) {
                    let card = document.createElement('section');
                    let text = document.createElement('div');
                    let h3 = document.createElement('h3');

                    h3.textContent = "Upcoming Events";
                    events = towns[i].events;

                    text.appendChild(h3);

                    for (let j = 0; j < events.length; j++) {
                        let p = document.createElement('p');
                        p.textContent = events[j];
                        text.appendChild(p);
                    }

                    card.appendChild(text);

                    document.querySelector('div.events').appendChild(card);
                }
            }
        });
}