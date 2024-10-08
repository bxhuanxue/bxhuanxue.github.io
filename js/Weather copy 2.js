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
                <div class="snowman">
                <svg width="60px" height="240px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><circle fill="#E1E8ED" cx="18" cy="26" r="10"></circle><path fill="#E1E8ED" d="M12 11a6 6 0 1 1 12 0a6 6 0 0 1-12 0z"></path><path fill="#414042" d="M23 6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4z"></path><path fill="#231F20" d="M25 7a1 1 0 0 1-1 1H12a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1z"></path><path fill="#DD2E44" d="M22.5 15h-9a1.495 1.495 0 0 0-.5 2.908V25a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7h6.5a1.5 1.5 0 1 0 0-3z"></path><path fill="#414042" d="M19 24a1 1 0 1 1-1.998.002A1 1 0 0 1 19 24zm0 5a1 1 0 1 1-1.998.002A1 1 0 0 1 19 29z"></path><path fill="#F4900C" d="M19 12a1 1 0 1 1-1.998.002A1 1 0 0 1 19 12z"></path><path fill="#414042" d="M16 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0a1 1 0 1 1 2 0z"></path><path fill="#FFAC33" d="M10.394 20.081l-3.452-1.479l-.547-2.866a1 1 0 0 0-1.965.375l.294 1.54l-1.33-.57a.999.999 0 1 0-.788 1.838l.743.318l-1.056 1.056a.999.999 0 1 0 1.414 1.414l1.621-1.621l4.278 1.833a.999.999 0 1 0 .788-1.838zm22.922-3.03l-1.465-.488l.855-.855a.999.999 0 1 0-1.414-1.414l-.751.751l-.572-2.287a.999.999 0 1 0-1.939.486l.862 3.45l-3.6 3.6a.999.999 0 1 0 1.415 1.413l3.563-3.563l2.413.805a.999.999 0 1 0 .633-1.898z"></path><path d="M10.08 2.113a.5.5 0 0 0-.693-.138l-.887.591V1.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.831l1.04.694l-1.04.693a.5.5 0 0 0 .555.833l.886-.592V5.5a.5.5 0 0 0 1 0V4.434l.887.591a.5.5 0 1 0 .555-.832L8.901 3.5l1.04-.693a.5.5 0 0 0 .139-.694zm-4 7a.5.5 0 0 0-.693-.138l-.887.591V8.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.831l1.04.693l-1.04.693a.5.5 0 1 0 .555.832l.886-.59V12.5a.5.5 0 0 0 1 0v-1.066l.887.591a.5.5 0 1 0 .555-.832L4.901 10.5l1.04-.693a.5.5 0 0 0 .139-.694zm0 17a.5.5 0 0 0-.693-.139l-.887.592V25.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.832l1.04.693l-1.04.693a.5.5 0 1 0 .555.832l.886-.591V29.5a.5.5 0 0 0 1 0v-1.066l.887.591a.5.5 0 1 0 .555-.832L4.901 27.5l1.04-.693a.5.5 0 0 0 .139-.694zM33.901 9.5l1.04-.693a.5.5 0 1 0-.554-.832l-.887.591V7.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.832l1.04.693l-1.04.693a.5.5 0 1 0 .555.832l.887-.591V11.5a.5.5 0 0 0 1 0v-1.066l.887.591a.5.5 0 1 0 .555-.832L33.901 9.5zm.179 13.613a.5.5 0 0 0-.693-.139l-.887.592V22.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.832l1.04.693l-1.04.693a.5.5 0 1 0 .555.832l.887-.591V26.5a.5.5 0 0 0 1 0v-1.066l.887.591a.5.5 0 1 0 .555-.832l-1.04-.693l1.04-.693a.502.502 0 0 0 .137-.694zm-4.139-18.92l-1.04-.693l1.04-.693a.5.5 0 1 0-.554-.832l-.887.591V1.5a.5.5 0 0 0-1 0v1.066l-.887-.591a.5.5 0 1 0-.554.832l1.04.693l-1.04.693a.5.5 0 1 0 .555.832l.886-.591V5.5a.5.5 0 0 0 1 0V4.434l.887.591a.5.5 0 1 0 .554-.832z" fill="#88C9F9"></path></svg>
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
