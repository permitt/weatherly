import { TEMP, HUMID, ONE_DAY, TWO_DAYS, THREE_DAYS, FOUR_DAYS, FIVE_DAYS, THREE_HOURS, TWELVE_HOURS } from './constants';

export const dataForChart = (cities, interval, chartUnit) => {
    let chartData = [];
    const endLimit = getNumOfData(interval);

    cities.forEach(city => {
        const cityData = {};
        city.measurements.slice(0, endLimit).forEach(msr => {
            switch (chartUnit) {
                case TEMP:
                    cityData[msr.dt_txt] = msr.main.temp;
                    break;
                case HUMID:
                    cityData[msr.dt_txt] = msr.main.humidity;
                    break;
                default:
                    cityData[msr.dt_txt] = msr.main.pressure;
            }

        });
        chartData.push({ name: city.name, data: cityData });
    })

    return chartData;
}

export const filterCities = (data, numOfDays) => {
    const endLimit = getNumOfData(numOfDays);
    return data.map((city, index) => {
        return { ...city, measurements: city.measurements.slice(0, endLimit) }
    });
}

export const normalizeCityName = cityName => {
    return cityName
        .trim()
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

export const cityAlreadyAdded = (cityName, allCities) => {
    let exists = false;
    allCities.forEach(city => {
        if (city.name === cityName)
            exists = true;
    });

    return exists;
}


const getNumOfData = (numOfDays) => {
    switch (numOfDays) {
        case THREE_HOURS:
            return 2;
        case TWELVE_HOURS:
            return 5;
        case ONE_DAY:
            return 9;
        case TWO_DAYS:
            return 17;
        case THREE_DAYS:
            return 25;
        case FOUR_DAYS:
            return 33;
        case FIVE_DAYS:
            return 41;
        default:
            return 0;
    }
}