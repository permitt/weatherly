import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Table } from './components/Table';
import { Chart } from './components/Chart';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <header className="App-header">
          <Typography>WEATHERLY</Typography>
        </header>

      </Grid>
      <Grid container item xs={12} spacing={3}>

      </Grid>
      <Grid container item xs={12} spacing={3}>

      </Grid>



      <SearchBar />
      <Table />
      <Chart />
    </Grid>

  );
}

export default App;
