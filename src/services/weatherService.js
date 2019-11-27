import axios from "axios";

export const  weatherServices = {
    getSities
};

function getSities(city) {
    return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=2c8861bba14e43e8ad9528e990ab5686&days=7`)
        .then(res => res.data)
}
