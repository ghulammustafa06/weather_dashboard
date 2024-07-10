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

document.addEventListener('DOMContentLoaded', function () {
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
    switch (error.code) {
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

function fetchHourlyWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch hourly weather data');
            }
            return response.json();
        })
        .then(data => displayHourlyWeather(data))
        .catch(error => displayError(error.message));
}

function displayHourlyWeather(data) {
    const hourlyContainer = document.getElementById('hourlyContainer');
    hourlyContainer.innerHTML = '';

    for (let i = 0; i < 8; i++) { // Display next 8 hours
        const hourlyData = data.list[i];
        const time = new Date(hourlyData.dt * 1000).getHours();
        const temp = hourlyData.main.temp;
        const icon = hourlyData.weather[0].icon;
        const humidity = hourlyData.main.humidity;
        const windSpeed = hourlyData.wind.speed;

        const hourlyItem = document.createElement('div');
        hourlyItem.classList.add('hourly-item');
        hourlyItem.innerHTML = `
            <p>${time}:00</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
            <p>${temp}°C</p>
            <p>${humidity}%</p>
            <p>${windSpeed} m/s</p>
        `;
        hourlyContainer.appendChild(hourlyItem);
    }
}

// Update the fetchWeather function to also fetch hourly weather
function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchHourlyWeather(city);
        })
        .catch(error => displayError(error.message));
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for form submission
    document.getElementById('locationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const city = document.getElementById('cityInput').value;

        // Show loading indicator
        showLoading();

        fetchWeather(city);
    });

    // Function to display loading indicator
    function showLoading() {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Loading...</p>';
        weatherInfo.classList.remove('hidden');
    }

    // Function to fetch weather data
    function fetchWeather(city) {
        const apiKey = 'e3868b75c7c75932337e372db17ade6c'; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
                fetchHourlyWeather(city);
            })
            .catch(error => displayError(error.message));
    }

    // Function to display weather data
    function displayWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        document.getElementById('cityName').textContent = cityName;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('weatherDescription').textContent = `Description: ${weatherDescription}`;

        document.getElementById('weatherInfo').classList.remove('hidden');
    }

    // Function to display error messages
    function displayError(error) {
        document.getElementById('weatherInfo').innerHTML = `<p class="error">${error}</p>`;
        document.getElementById('weatherInfo').classList.remove('hidden');
    }
});

function fetchWeather(city) {
    const apiKey = 'e3868b75c7c75932337e372db17ade6c'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Check if weather data for this city is already cached
    const cachedWeather = localStorage.getItem(city);
    if (cachedWeather) {
        displayWeather(JSON.parse(cachedWeather));
        fetchHourlyWeather(city); // Fetch hourly weather in case it's not cached
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            // Cache the fetched weather data
            localStorage.setItem(city, JSON.stringify(data));
            displayWeather(data);
            fetchHourlyWeather(city); // Fetch hourly weather
        })
        .catch(error => displayError(error.message));
}
document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    fetchWeather(city);
});


function displayError(error) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.textContent = error;
    document.getElementById('weatherInfo').innerHTML = '';
    document.getElementById('weatherInfo').appendChild(errorElement);
    document.getElementById('weatherInfo').classList.remove('hidden');
}

