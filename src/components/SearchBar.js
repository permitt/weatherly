import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const SearchBar = (props) => {
    const [city, setCity] = useState('')
    const [citiesAvailable, setCitiesAvailable] = useState([])

    return (
        <Grid container spacing={0}>
            <Grid xs={11}>

                <Autocomplete
                    id="combo-box-demo"
                    options={citiesAvailable}
                    getOptionLabel={(option) => option}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} fullWidth label="Enter the city's name" variant="outlined" />}
                />

            </Grid>
            <Grid xs={1}>
                <Button variant="contained" size="large" color="secondary" onClick={() => { alert("HA") }}>Add</Button>
            </Grid>
        </Grid>
    )
}

