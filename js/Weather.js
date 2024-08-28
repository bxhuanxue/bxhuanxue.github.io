function showWeather(weatherType) {
    const container = document.getElementById('weather-container');
    container.innerHTML = ''; // 清空容器内容

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
                <img src="snowman-svgrepo.svg" class="snowman" alt="Snowman">
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
    }
}
