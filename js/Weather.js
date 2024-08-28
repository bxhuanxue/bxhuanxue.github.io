// Display weather effect based on weather type
src="https://code.jquery.com/jquery-3.6.0.min.js"
function showWeather(weatherType) {
    const container = document.getElementById('weather-container');
    container.innerHTML = ''; // Clear container content

    if (weatherType === 'cloud') {
        container.innerHTML = `
            <div class="cloud"></div>
        `;
    } else if (weatherType === 'rain') {
        container.innerHTML = `
            <div class="cloud_rain">
                <div class="rain" style="left: 30px; animation-delay: 0s;"></div>
                <div class="rain" style="left: 60px; animation-delay: 0.1s;"></div>
                <div class="rain" style="left: 90px; animation-delay: 0.2s;"></div>
                <div class="rain" style="left: 120px; animation-delay: 0.3s;"></div>
                <div class="rain" style="left: 150px; animation-delay: 0.4s;"></div>
            </div>
            <div class="puddle puddle1"></div>
            <div class="puddle puddle2"></div>
            <div class="puddle puddle3"></div>
            <div class="puddle puddle4"></div>
            <div class="puddle puddle5"></div>
            <div class="puddle puddle6"></div>
            <div class="puddle puddle7"></div>
            <div class="puddle puddle8"></div>
        `;
    } else if (weatherType === 'snow') {
        container.innerHTML = `
            <div class="cloud_snow">
                <div class="snowflake large" style="left: 30px; animation-delay: 0s;"></div>
                <div class="snowflake large" style="left: 80px; animation-delay: 0.3s;"></div>
                <div class="snowflake large" style="left: 120px; animation-delay: 0.5s;"></div>
                <div class="snowflake large" style="left: 170px; animation-delay: 0.7s;"></div>
                <div class="snowflake large" style="left: 200px; animation-delay: 0.9s;"></div>
                <div class="snowflake small" style="left: 40px; animation-delay: 0.5s;"></div>
                <div class="snowflake small" style="left: 90px; animation-delay: 0.8s;"></div>
                <div class="snowflake small" style="left: 130px; animation-delay: 0.9s;"></div>
                <div class="snowflake small" style="left: 160px; animation-delay: 1s;"></div>
                <div class="snowflake small" style="left: 220px; animation-delay: 0.1s;"></div>
                <div class="snowman">
                    <!-- Snowman SVG code -->
                </div>
            </div>
        `;
    } else if (weatherType === 'thunder') {
        container.innerHTML = `
            <div class="cloud_thunder">
                <div class="lightning"></div>
                <div class="music_symbol"></div>
                <div class="music_symbol" style="top: 70px; left: 140px;"></div>
                <div class="music_symbol" style="top: 90px; left: 80px;"></div>
            </div>
        `;
    } else if (weatherType === 'sun') {
        container.innerHTML = `
            <div class="cloud_sun">
                <div class="sun"></div>
            </div>
        `;
    } else if (weatherType === 'close'){
        container.innerHTML = '';
    }
}

// Fetch user's location and weather data
function fetchLocationAndWeather() {
    $.ajax({
        type: 'get',
        url: 'https://apis.map.qq.com/ws/location/v1/ip',
        data: {
            key: 'QNWBZ-K24WT-Z4CXP-VWWLJ-YC6FE-UFFVM',
            output: 'jsonp',
        },
        dataType: 'jsonp',
        success: function (res) {
            console.log('Location Data:', res);
            if (res.status === 0) {
                const city = res.result.ad_info.city;
                getWeather(city);
            } else {
                console.error('Failed to retrieve location:', res.message);
            }
        },
        error: function (err) {
            console.error('Location API Error:', err);
        }
    });
}

// Fetch weather information based on city
function getWeather(city) {
    const apiKey = '3f3c1b4a1586ffe0a7291c4556ad9f5f'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Weather API URL:', apiUrl); // Debug: Output constructed Weather API URL

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data); // Debug: View parsed weather data

            const weather = data.weather[0].main.toLowerCase();
            console.log('Weather:', weather); // Debug: Output weather condition

            // Show weather effect based on condition
            if (weather.includes('cloud')) {
                console.log('Displaying Cloudy Weather');
                showWeather('cloud');
            } else if (weather.includes('rain')) {
                console.log('Displaying Rainy Weather');
                showWeather('rain');
            } else if (weather.includes('snow')) {
                console.log('Displaying Snowy Weather');
                showWeather('snow');
            } else if (weather.includes('clear')) {
                console.log('Displaying Sunny Weather');
                showWeather('sun');
            } else if (weather.includes('thunderstorm')) {
                console.log('Displaying Thunderstorm Weather');
                showWeather('thunder');
            } else {
                console.log('No matching weather condition found.');
            }
        })
        .catch(err => console.error('Weather API Error:', err));
}

// Call the function on page load to fetch and display weather
document.addEventListener('DOMContentLoaded', fetchLocationAndWeather);
