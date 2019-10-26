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