document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('weatherDescription').textContent = `Description: ${weatherDescription}`;

    document.getElementById('weatherInfo').classList.remove('hidden');
}

document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => displayError(error.message));
}

function displayError(error) {
    document.getElementById('weatherInfo').innerHTML = `<p class="error">${error}</p>`;
    document.getElementById('weatherInfo').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        displayError('Geolocation is not supported by this browser.');
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherByCoords(lat, lon);
}

function fetchWeatherByCoords(lat, lon) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data for your location');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => displayError(error.message));
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            displayError('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            displayError('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            displayError('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            displayError('An unknown error occurred.');
            break;
    }
}

