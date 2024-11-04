// script.js
document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // OpenWeatherMap API anahtarınızı buraya ekleyin
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const icon = data.weather[0].icon; // Hava durumu simgesi
                document.getElementById('weatherResult').innerHTML = `
                    <h2>${city}</h2>
                    <p>Sıcaklık: ${temperature}°C</p>
                    <p>Hava Durumu: ${weatherDescription}</p>
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weather-icon" alt="Hava durumu simgesi">
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>Şehir bulunamadı!</p>`;
            }
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});
