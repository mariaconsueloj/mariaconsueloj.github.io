function getDate() {
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];
    months = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    var d = new Date;
    var year = d.getFullYear();
    var day = days[d.getDay()];
    var month = months[d.getMonth()];
    var date = day + ', ' + d.getDate() + ' ' + month + ' ' + year;
    document.getElementById("currentDate").textContent = date;
}

function updateDates() {
    getDate();
}

function toggleMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "hidden") {
        x.className = "shown";
    } else {
        x.className = "hidden";
    }
}