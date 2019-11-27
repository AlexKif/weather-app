import React, {Fragment} from 'react';
import {urlHelper} from "../../helpers/urlHelper";
import {weatherServices} from "../../services/weatherService";
import {addCity} from "../../actions/weatherActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherList from "./WeatherList/WeatherList";

import './style.scss'

class Weather extends React.Component{

    componentDidMount() {
        const { dispatch, location } = this.props;
        const cityValue = urlHelper.getUrlParameter('city', location.search);
        if (location.search) {
            weatherServices.getSities(cityValue).then(city => {
                dispatch(addCity(city));
            });
        }
    }



    render() {
        return (
            <Fragment>
                <WeatherForm/>
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