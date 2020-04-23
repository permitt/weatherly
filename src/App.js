import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import MessageHandler from "./components/MessageHandler";
import { SearchBar } from './components/SearchBar';
import { InfoTable } from './components/InfoTable';
import { LineChart } from './components/LineChart';
import {fetchCities} from './services/api';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

function App() {
  const [message, setMessage] = useState({type:'warning',active:true,msg:'FUCK MOUSE THATa!'})
  const [allCities, setAllCities] = useState([]);
  useEffect(() => {

   
  });

  const addCity = async (newCity) => {
    // API CALL, provjera, i onda dodaes u allCities kao objekat ili vracas error.
    const response = await fetchCities(newCity);
    console.log("EVO TI PISLJIVI RESPONSE " + response)
    if(response.status != 200){
      setMessage({type:'error', active:true, msg: response.message})
      return;
      }
    

      setMessage({type:'success', active:true, msg: 'Successfuly added the city!'})
      const weatherData = {...response.data.main, visibility: response.data.visibility, time: new Date().toLocaleString()};
      console.log("STIGAO BRE PICKO : " + weatherData);
      setAllCities([...allCities, {name:newCity, graphUnit:'temp', interval:0, measurements:[weatherData, weatherData, weatherData, weatherData]}])
      


  }
  const closeMessage = () => {
    setMessage({...message, active:false});
  }

  return (

    <Container maxWidth="md">

    <Grid md={12}>
      <Header />
</Grid>
      <Grid md={12}>
      <SearchBar error={message.active && message.type=='error'} handleSubmit={addCity} />
</Grid>
      <Grid md={12}>
      <InfoTable data={allCities} />
</Grid>
      <Grid md={12}>
      <LineChart />
      </Grid>
      <MessageHandler message={message} handleClose={closeMessage} />
    </Container>

  );
}

export default App;
