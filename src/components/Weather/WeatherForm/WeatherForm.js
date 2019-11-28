import React, {Fragment} from 'react';
import {Button, Input} from "reactstrap";

class WeatherForm extends React.Component {

    state = {
        cityValue: ''
    };

    handleChange = (event) => {
        this.setState({cityValue: event.target.value})
    };

    clickBtn = () => {
        this.props.clickWeather(this.state.cityValue);
        this.setState({cityValue: ''})
    };

    keyPressed = (event) => {
        if (event.key === 'Enter') {
            this.clickBtn()
        }
    };

    render() {
        return (
            <div className="city-form">
                <Input placeholder="Enter city" type="text" onChange={this.handleChange} value={this.state.cityValue} onKeyPress={this.keyPressed} />
                <Button color="primary" onClick={this.clickBtn}>Search</Button>
            </div>
        );
    }
}

export default WeatherForm;