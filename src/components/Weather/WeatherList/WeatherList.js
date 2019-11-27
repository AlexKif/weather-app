import React, {Fragment} from 'react';


function WeatherList(props) {
    let isWeather = Object.keys(props.weather).length !== 0;
    let month = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // let testMonth = props.weather.data.valid_date;
    // console.log(testMonth);

    let weather;
    if (isWeather) {
        // let testMonth = props.weather.data[0].valid_date;
        // testMonth = testMonth.split('-')[1];
        // console.log(testMonth);
        weather = props.weather.data.map((weather, index) => {
            const currentMonth = weather.valid_date.split('-')[1];
            const currentDate = weather.valid_date.split('-')[2];
            console.log(currentDate);
            return (
                <Fragment key={index}>
                    <div className="weather__box">
                        <p>{currentDate} {month[currentMonth-1]}</p>
                        <p>Min: {weather.min_temp} Max: {weather.max_temp}</p>
                    </div>
                </Fragment>
            )
            }
        );
    }
    return (
        <div className="weather">
            {weather}
        </div>
    );
}

export default WeatherList;
