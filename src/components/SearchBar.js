import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



export const SearchBar = (props) => {
    const [city, setCity] = useState('')
    

    return (
        <Grid container spacing={0} style={{paddingBottom:'35px'}}>
        <Grid xs={2}>
        </Grid>
            <Grid xs={7}>
                <TextField value={city} onChange={(e) => setCity(e.target.value)} error={props.error} style={{ width: 500 }} label="Enter the city's name" variant="outlined" />
            </Grid>
            <Grid xs={1}>
                <Button style={{ marginTop: '8px', marginLeft:'-15px' }} variant="contained" size="medium" color="secondary" onClick={() => { props.handleSubmit(city); setCity(''); }}>Add</Button>
            </Grid>
            <Grid xs={2}>
        </Grid>
        </Grid>
       
    )
}



