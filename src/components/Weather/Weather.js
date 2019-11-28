import React, {Fragment} from 'react';
import {weatherServices} from "../../services/weatherService";
import {addCity} from "../../actions/weatherActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherList from "./WeatherList/WeatherList";

import './style.scss'
import SelectedCities from "./SelectedCities/SelectedCities";

class Weather extends React.Component{

    state = {
        cities: [],
        city: ''
    };

    clickWeather = (value) => {
        const { dispatch } = this.props;
        const cities = this.state.cities;
        weatherServices.getSities(value).then(city => {
            cities.push(value);
            this.setState({cities: cities});
            dispatch(addCity(city));
        });
    };

    render() {
        return (
            <Fragment>
                <WeatherForm clickWeather={this.clickWeather}/>
                <SelectedCities/>
                <WeatherList weather={this.props.cityWeather}/>
            </Fragment>
        );
    }
}

const mapStateToProps = ({weatherReducer}) => {
    return {
        cityWeather: weatherReducer.cityWeather
    }
};

export default connect(mapStateToProps)(withRouter(Weather));