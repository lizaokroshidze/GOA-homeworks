const apiKey = "YOUR_API_KEY_HERE"; // Replace with your real API key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const description = document.getElementById("weather-description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

const weatherInfo = document.querySelector(".weather-info");
const errorMessage = document.querySelector(".error-message");

// Helper: Format current date
function getFormattedDate() {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// Main: Fetch weather by city
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        // Update UI
        cityName.textContent = data.name + ", " + data.sys.country;
        date.textContent = getFormattedDate();
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;

        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    } catch (error) {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
}

// Event Listener
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});