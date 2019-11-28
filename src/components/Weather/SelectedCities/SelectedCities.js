import React, {Fragment} from 'react';

function SelectedCities(props) {
    let cityHeadline;
    if(props.city) {
        cityHeadline = <div className="current-weather">Weather in {props.city.charAt(0).toUpperCase() + props.city.substr(1)}</div>;

    }
    return (
        <Fragment>
            {cityHeadline}
        </Fragment>
    );
}

export default SelectedCities;