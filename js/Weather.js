document.addEventListener('DOMContentLoaded', function() {
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
        const apiKey = 'YOUR_API_KEY'; // 替换为你的API Key
        const locationId = '101010100'; // 替换为你要查询的LocationID

        $.ajax({
            url: `https://api.qweather.com/v7/weather/now?location=${locationId}&key=${apiKey}`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data.code === "200") {
                    const weatherText = data.now.text;
                    let weatherType;

                    // 根据 weatherText 确定天气类型
                    if (weatherText.includes("雨")) {
                        weatherType = 'rain';
                    } else if (weatherText.includes("云")) {
                        weatherType = 'cloud';
                    } else if (weatherText.includes("雷")) {
                        weatherType = 'thunder';
                    } else if (weatherText.includes("雪")) {
                        weatherType = 'snow';
                    } else if (weatherText.includes("晴")) {
                        weatherType = 'sun';
                    } else {
                        // 抛出异常并显示 text 的值
                        console.error('未识别的天气类型:', weatherText);
                        weatherType = 'unknown';
                    }

                    if (weatherType !== 'unknown') {
                        showWeather(weatherType);
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

    function showWeather(weatherType) {
        const container = document.getElementById('weather-container');
        if (!container) {
            console.error('Weather container not found!');
            return;
        }
        
        container.innerHTML = ''; // 清空容器内容

        if (weatherType === 'cloud') {
            container.innerHTML = '<div class="cloud"></div>';
        } else if (weatherType === 'rain') {
            container.innerHTML = 
                '<div class="cloud_rain">' +
                    '<div class="rain" style="left: 30px; animation-delay: 0s;"></div>' +
                    '<div class="rain" style="left: 60px; animation-delay: 0.1s;"></div>' +
                    '<div class="rain" style="left: 90px; animation-delay: 0.2s;"></div>' +
                    '<div class="rain" style="left: 120px; animation-delay: 0.3s;"></div>' +
                    '<div class="rain" style="left: 150px; animation-delay: 0.4s;"></div>' +
                '</div>' +
                '<div class="puddle puddle1"></div>' +
                '<div class="puddle puddle2"></div>' +
                '<div class="puddle puddle3"></div>' +
                '<div class="puddle puddle4"></div>' +
                '<div class="puddle puddle5"></div>' +
                '<div class="puddle puddle6"></div>' +
                '<div class="puddle puddle7"></div>' +
                '<div class="puddle puddle8"></div>';
        } else if (weatherType === 'snow') {
            container.innerHTML = 
                '<div class="cloud_snow">' +
                    '<div class="snowflake large" style="left: 30px; animation-delay: 0s;"></div>' +
                    '<div class="snowflake large" style="left: 80px; animation-delay: 0.3s;"></div>' +
                    '<div class="snowflake large" style="left: 120px; animation-delay: 0.5s;"></div>' +
                    '<div class="snowflake large" style="left: 170px; animation-delay: 0.7s;"></div>' +
                    '<div class="snowflake large" style="left: 200px; animation-delay: 0.9s;"></div>' +
                    '<div class="snowflake small" style="left: 40px; animation-delay: 0.5s;"></div>' +
                    '<div class="snowflake small" style="left: 90px; animation-delay: 0.8s;"></div>' +
                    '<div class="snowflake small" style="left: 130px; animation-delay: 0.9s;"></div>' +
                    '<div class="snowflake small" style="left: 160px; animation-delay: 1s;"></div>' +
                    '<div class="snowflake small" style="left: 220px; animation-delay: 0.1s;"></div>' +
                    '<div class="snowman">' +
                        '<!-- Snowman SVG code -->' +
                    '</div>' +
                '</div>';
        } else if (weatherType === 'thunder') {
            container.innerHTML = 
                '<div class="cloud_thunder">' +
                    '<div class="lightning"></div>' +
                    '<div class="music_symbol"></div>' +
                    '<div class="music_symbol" style="top: 70px; left: 140px;"></div>' +
                    '<div class="music_symbol" style="top: 90px; left: 80px;"></div>' +
                '</div>';
        } else if (weatherType === 'sun') {
            container.innerHTML = 
                '<div class="cloud_sun">' +
                    '<div class="sun"></div>' +
                '</div>';
        } else if (weatherType === 'unknown') {
            container.innerHTML = `<div class="unknown">无法识别的天气类型: ${weatherText}</div>`;
        }
    }
});
