fetch('https://apis.map.qq.com/ws/location/v1/ip?key=QNWBZ-K24WT-Z4CXP-VWWLJ-YC6FE-UFFVM')
    .then(response => {
        console.log('Location API Response:', response); // 调试：查看位置API的响应
        return response.json();
    })
    .then(data => {
        console.log('Location Data:', data); // 调试：查看解析后的位置数据
        if (data.status === 0) {
            const location = data.result.ad_info;
            const city = location.city;
            console.log('Location:', city); // 调试：输出获取到的城市名称

            // 获取天气信息
            getWeather(city);
        } else {
            console.error('Failed to retrieve location:', data.message);
        }
    })
    .catch(err => console.error('Location API Error:', err)); // 调试：捕获和显示位置API的错误

function getWeather(city) {
    const apiKey = '3f3c1b4a1586ffe0a7291c4556ad9f5f'; // 你的OpenWeatherMap API密钥
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Weather API URL:', apiUrl); // 调试：输出构建的天气API URL

    fetch(apiUrl)
        .then(response => {
            console.log('Weather API Response:', response); // 调试：查看天气API的响应
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data); // 调试：查看解析后的天气数据

            const weather = data.weather[0].main.toLowerCase();
            console.log('Weather:', weather); // 调试：输出天气状况

            // 清空当前的天气效果
            document.body.innerHTML = '';

            // 根据天气情况显示不同的效果
            if (weather.includes('cloud')) {
                console.log('Displaying Cloudy Weather');
                showCloudy();
            } else if (weather.includes('rain')) {
                console.log('Displaying Rainy Weather');
                showRain();
            } else if (weather.includes('snow')) {
                console.log('Displaying Snowy Weather');
                showSnow();
            } else if (weather.includes('clear')) {
                console.log('Displaying Sunny Weather');
                showSunny();
            } else if (weather.includes('thunderstorm')) {
                console.log('Displaying Thunderstorm Weather');
                showThunder();
            } else {
                console.log('No matching weather condition found.');
            }
        })
        .catch(err => console.error('Weather API Error:', err)); // 调试：捕获和显示天气API的错误
}

function showCloudy() {
    console.log('Rendering Cloudy Weather'); // 调试：渲染阴天效果
    document.body.innerHTML = '<div class="cloud"></div>';
}

function showRain() {
    console.log('Rendering Rainy Weather'); // 调试：渲染下雨效果
    document.body.innerHTML = `
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
}

function showSnow() {
    console.log('Rendering Snowy Weather'); // 调试：渲染下雪效果
    document.body.innerHTML = `
        <div class="container">
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
                <img src="source\img\snowman-svgrepo.svg" class="snowman" alt="Snowman">
            </div>
        </div>
    `;
}

function showSunny() {
    console.log('Rendering Sunny Weather'); // 调试：渲染晴天效果
    document.body.innerHTML = `
        <div class="cloud_sun">
            <div class="sun"></div>
        </div>
    `;
}

function showThunder() {
    console.log('Rendering Thunderstorm Weather'); // 调试：渲染雷暴效果
    document.body.innerHTML = `
        <div class="cloud_thunder">
            <div class="lightning"></div>
            <div class="music_symbol"></div>
            <div class="music_symbol" style="top: 70px; left: 140px;"></div>
            <div class="music_symbol" style="top: 90px; left: 80px;"></div>
        </div>
    `;
}
