// 显示天气的函数
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
                <div class="snowman"></div>
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

// 根据天气描述确定天气类型的函数
function determineWeatherType(weatherText) {
    if (weatherText.includes("雨")) {
        return 'rain';
    } else if (weatherText.includes("云")) {
        return 'cloud';
    } else if (weatherText.includes("雷")) {
        return 'thunder';
    } else if (weatherText.includes("雪")) {
        return 'snow';
    } else if (weatherText.includes("晴")) {
        return 'sun';
    } else {
        console.error('未识别的天气类型:', weatherText);
        return 'unknown';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let weatherShown = false; // 标志变量，用于检查天气效果是否已经呈现

    (function() {
        if (!window.jQuery) {
            const script = document.createElement('script');
            script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
            script.onload = function() {
                fetchLocationAndWeather();
            };
            document.head.appendChild(script);
        } else {
            fetchLocationAndWeather();
        }
    })();

    function fetchLocationAndWeather() {
        const apiKey = 'ff824c952c034da8b824fe089d16cf05'; // 替换为你的API Key
        const locationId = '101010100'; // 替换为你要查询的LocationID

        $.ajax({
            url: `https://devapi.qweather.com/v7/weather/now?location=${locationId}&key=${apiKey}`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data.code === "200") {
                    const weatherText = data.now.text;
                    let weatherType = determineWeatherType(weatherText);

                    if (weatherType !== 'unknown' && !weatherShown) {
                        showWeather(weatherType);
                        weatherShown = true; // 设置标志变量，表示天气效果已经呈现
                    }
                } else {
                    console.error('Failed to fetch weather data: ', data.code);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Failed to fetch weather data:', textStatus, errorThrown);
            }
        });
    }

    // 给按钮添加点击事件监听
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            const weatherType = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showWeather(weatherType);
        });
    });
});