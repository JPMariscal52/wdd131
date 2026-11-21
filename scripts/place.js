const tempCelsius = 10;
const windSpeed = 15;

// Returns the wind chill in Celsius.
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Current year and last modified date.
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

// Calculate wind chill.
const windChillElement = document.querySelector("#wind-chill");

if (tempCelsius <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(tempCelsius, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
