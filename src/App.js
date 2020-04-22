import React from 'react';
import './App.css';
import Header from './components/Header';

import { SearchBar } from './components/SearchBar';
import { Table } from './components/Table';
import { LineChart } from './components/LineChart';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

function App() {


  return (

    <Container maxWidth="sm">
      <Header />
      <SearchBar />
      <Table />
      <LineChart />
    </Container>

  );
}

export default App;
