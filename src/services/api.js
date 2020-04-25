import axios from 'axios';

const getUrl = (cityName) => `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bad677f72c2a549d00b8ffdcb5b01f6d&units=metric`;


export const fetchCities = async (city) => {
    const url = getUrl(city);

    const res = axios.get(url)
        .then(res => (res))
        .catch(err => ({ status: err.response.data.code, message: err.response.data.message }));
    return res;
};