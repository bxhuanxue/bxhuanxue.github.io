document.addEventListener('DOMContentLoaded', function() {
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
        } else if (weatherType === 'close'){
            container.innerHTML = '';
        }
    }

    // 获取用户位置和天气数据
    async function fetchLocationAndWeather() {
        try {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiUrl = 'https://apis.map.qq.com/ws/location/v1/ip?key=QNWBZ-K24WT-Z4CXP-VWWLJ-YC6FE-UFFVM&output=json';
            const response = await fetch(proxyUrl + apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Location Data:', data);
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
        const apiKey = 'ff824c952c034da8b824fe089d16cf05'; // QWeather API密钥
        const apiUrl = `https://devapi.qweather.com/v7/weather/now?location=${city}&key=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Weather Data:', data); // 调试: 查看解析的天气数据

            const weatherCode = data.now.icon;
            let weatherType = '';

            // 根据天气代码确定天气类型
            switch (weatherCode) {
                case '100': // 晴
                case '101': // 多云
                case '102': // 少云
                case '103': // 晴间多云
                    weatherType = 'sun';
                    break;
                case '104': // 阴
                case '150': // 晴（夜间）
                case '151': // 多云（夜间）
                case '152': // 少云（夜间）
                case '153': // 晴间多云（夜间）
                    weatherType = 'cloud';
                    break;
                case '300': // 阵雨
                case '301': // 强阵雨
                case '302': // 雷阵雨
                case '303': // 强雷阵雨
                case '304': // 雷阵雨伴有冰雹
                case '305': // 小雨
                case '306': // 中雨
                case '307': // 大雨
                case '308': // 极端降雨
                case '309': // 毛毛雨/细雨
                case '310': // 暴雨
                case '311': // 大暴雨
                case '312': // 特大暴雨
                case '313': // 冻雨
                case '314': // 小到中雨
                case '315': // 中到大雨
                case '316': // 大到暴雨
                case '317': // 暴雨到大暴雨
                case '318': // 大暴雨到特大暴雨
                case '399': // 雨
                    weatherType = 'rain';
                    break;
                case '400': // 小雪
                case '401': // 中雪
                case '402': // 大雪
                case '403': // 暴雪
                case '404': // 雨夹雪
                case '405': // 雨雪天气
                case '406': // 阵雨夹雪
                case '407': // 阵雪
                case '408': // 小到中雪
                case '409': // 中到大雪
                case '410': // 大到暴雪
                case '499': // 雪
                    weatherType = 'snow';
                    break;
                case '500': // 薄雾
                case '501': // 雾
                case '502': // 霾
                case '503': // 扬沙
                case '504': // 浮尘
                case '507': // 沙尘暴
                case '508': // 强沙尘暴
                case '509': // 浓雾
                case '510': // 强浓雾
                case '511': // 中度霾
                case '512': // 重度霾
                case '513': // 严重霾
                case '514': // 大雾
                case '515': // 特强浓雾
                    weatherType = 'cloud';
                    break;
                case '900': // 热
                case '901': // 冷
                case '999': // 未知
                    weatherType = 'close';
                    break;
                default:
                    weatherType = 'close';
                    break;
            }

            console.log('Weather Type:', weatherType); // 调试: 输出天气类型

            // 弹窗提示天气信息
            alert(`Current weather in ${city}: ${data.now.text}`);

            // 根据条件显示天气效果
            showWeather(weatherType);
        } catch (error) {
            console.error('Weather API Error:', error);
        }
    }
});