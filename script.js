document.getElementById('locationForm').addEventListener('submit', function(e) {
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
