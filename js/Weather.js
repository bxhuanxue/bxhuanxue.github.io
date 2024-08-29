// 正确的jQuery加载方式
(function() {
    if (!window.jQuery) {
        const script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.onload = function() {
            // jQuery loaded, execute main logic
            fetchLocationAndWeather();
        };
        document.head.appendChild(script);
    } else {
        // jQuery already loaded, directly execute main logic
        fetchLocationAndWeather();
    }
})();

function showWeather(weatherType) {
    const container = document.getElementById('weather-container');
    container.innerHTML = ''; // 清空容器内容

    if (weatherType === 'cloud') {
        container.innerHTML = `<div class="cloud"></div>`;
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

// 获取用户位置和天气数据
async function fetchLocationAndWeather() {
    try {
        const response = await fetch('https://apis.map.qq.com/ws/location/v1/ip?key=QNWBZ-K24WT-Z4CXP-VWWLJ-YC6FE-UFFVM&output=jsonp');
        const data = await response.json();
        if (data.status === 0) {
            const city = data.result.ad_info.city;
            getWeather(city);
        } else {
            console.error('Failed to retrieve location:', data.message);
        }
    } catch (error) {
        console.error('Location API Error:', error);
    }
}

// 根据城市获取天气信息
async function getWeather(city) {
    const apiKey = '3f3c1b4a1586ffe0a7291c4556ad9f5f'; // OpenWeatherMap API密钥
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const weather = data.weather[0].main.toLowerCase();

        // 根据条件显示天气效果
        if (weather.includes('cloud')) {
            showWeather('cloud');
        } else if (weather.includes('rain')) {
            showWeather('rain');
        } else if (weather.includes('snow')) {
            showWeather('snow');
        } else if (weather.includes('clear')) {
            showWeather('sun');
        } else if (weather.includes('thunderstorm')) {
            showWeather('thunder');
        } else {
        }
    } catch (error) {
        console.error('Weather API Error:', error);
    }
}
