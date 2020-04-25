export const filterCities = (data, numOfDays) => {
    const days = getNumOfDays(numOfDays);
    return data.map((city, index) => {
        return { ...city, measurements: city.measurements.slice(0, days * 8) }
    });
}

export const normalizeCityName = cityName => {
    return cityName
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


const getNumOfDays = (numOfDays) => {
    switch (numOfDays) {
        case "one day":
            return 1;
        case "two days":
            return 2;
        case "three days":
            return 3;
        case "four days":
            return 4;
        case "five days":
            return 5;
        default:
            return 0;
    }
}