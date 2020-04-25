import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MessageHandler from "./components/MessageHandler";
import { TEMP, ONE_DAY } from './services/constants';
import { filterCities, normalizeCityName, cityAlreadyAdded, dataForChart } from './services/utils';
import { SearchBar } from './components/SearchBar';
import { InfoTable } from './components/InfoTable';
import { fetchCities } from './services/api';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import SettingsBoard from './components/SettingsBoard';
import { LineChart, PieChart } from 'react-chartkick'
import Link from '@material-ui/core/Link';
import 'chart.js'


function App() {
  const [message, setMessage] = useState({ active: false })
  const [allCities, setAllCities] = useState([]);
  const [chartUnit, setChartUnit] = useState(TEMP);
  const [interval, setInterval] = useState(ONE_DAY)

  const addCity = async (cityKeyword) => {

    const newCity = normalizeCityName(cityKeyword);
    if (cityAlreadyAdded(newCity, allCities)) {
      setMessage({ type: 'warning', active: true, msg: "That city has already been added." });
      return;
    }

    const response = await fetchCities(newCity);
    if (response.status != 200) {
      setMessage({ type: 'error', active: true, msg: response.message[0].toUpperCase() + response.message.substring(1) + '.' })
      return;
    }

    setMessage({ type: 'success', active: true, msg: 'Successfuly added the city!' })
    const weatherData = [...response.data.list];
    setAllCities([...allCities, { name: newCity, measurements: weatherData }])
  }

  const removeCity = (cityName) => {
    setAllCities(allCities.filter(city => city.name !== cityName));
    setMessage({ type: 'success', active: true, msg: 'City removed successfuly!' });
  }

  const closeMessage = () => {
    setMessage({ ...message, active: false });
  }

  return (

    <Container maxWidth="md">

      <Grid md={12}>
        <Header />
      </Grid>
      <Grid md={12}>
        <SearchBar error={message.active && message.type == 'error'} handleSubmit={addCity} />
      </Grid>
      <Grid md={12}>
        <SettingsBoard interval={interval} chartUnit={chartUnit} handleIntervalChange={setInterval} handleChartUnitChange={setChartUnit} />
      </Grid>
      <Grid md={12}>
        <InfoTable data={filterCities(allCities, interval)} handleRemoveCity={removeCity} />
      </Grid>
      <Grid md={12}>
        <LineChart xtitle="time" ytitle={chartUnit} data={dataForChart(allCities, interval, chartUnit)} />
      </Grid>
      <Typography style={{ textAlign: 'center', paddingTop: 50 }}>
        &copy; {new Date().getFullYear()}.
         <Link color='secondary' href='http://github.com/permitt'>Weatherly</Link>
      </Typography>
      <MessageHandler message={message} handleClose={closeMessage} />
    </Container >

  );
}

export default App;
