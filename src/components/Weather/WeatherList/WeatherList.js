import React, {Fragment} from 'react';


function WeatherList(props) {

    let isWeather = Object.keys(props.weather).length !== 0;
    let month = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    const detail = () => {
        props.clickWeather('xxx')
    };

    let weather;
    if (isWeather) {
        weather = props.weather.data.map((weather, index) => {
            const currentMonth = weather.valid_date.split('-')[1];
            const currentDate = weather.valid_date.split('-')[2];
            return (
                <div className="weather__box" onClick={detail} key={index}>
                    <div className="weather__box-date">
                        <p className="currentDate">{currentDate}</p>
                        <p> {month[currentMonth - 1]}</p>
                    </div>
                    <p>Min: {Math.round(weather.min_temp)}&deg;, Max: {Math.round(weather.max_temp)}&deg;</p>
                </div>
            );
            }
        );
    }
    return (
        <div className={isWeather ? "weather" : ""}>
            {weather}
        </div>
    );
}

export default WeatherList;
