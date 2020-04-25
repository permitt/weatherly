import React from 'react'
import { TEMP, HUMID, PRESS, ONE_DAY, TWO_DAYS, THREE_DAYS, FOUR_DAYS, FIVE_DAYS, THREE_HOURS, TWELVE_HOURS } from '../services/constants';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
export default function SettingsBoard(props) {
    return (

        <Grid container spacing={0} style={{ paddingBottom: '35px' }}>


            <Grid xs={2}>
            </Grid>
            <Grid xs={5} style={{ paddingBottom: 15 }}>
                <Typography>Choose the unit for the chart to display: </Typography>
            </Grid>
            <Grid xs={3}>
                <Select
                    style={{ width: 130 }}
                    value={props.chartUnit}
                    onChange={(e) => props.handleChartUnitChange(e.target.value)}
                >
                    <MenuItem value={TEMP}>{TEMP}</MenuItem>
                    <MenuItem value={PRESS}>{PRESS}</MenuItem>
                    <MenuItem value={HUMID}>{HUMID}</MenuItem>
                </Select>
            </Grid>
            <Grid xs={2}>
            </Grid>


            <Grid xs={2}>
            </Grid>

            <Grid xs={5}>
                <Typography>Weather data for the next: </Typography>
            </Grid>
            <Grid xs={3}>
                <Select
                    style={{ width: 130 }}
                    value={props.interval}
                    onChange={(e) => props.handleIntervalChange(e.target.value)}
                >
                    <MenuItem value={THREE_HOURS}>{THREE_HOURS}</MenuItem>
                    <MenuItem value={TWELVE_HOURS}>{TWELVE_HOURS}</MenuItem>
                    <MenuItem value={ONE_DAY}>{ONE_DAY}</MenuItem>
                    <MenuItem value={TWO_DAYS}>{TWO_DAYS} </MenuItem>
                    <MenuItem value={THREE_DAYS}>{THREE_DAYS}</MenuItem>
                    <MenuItem value={FOUR_DAYS}>{FOUR_DAYS}</MenuItem>
                    <MenuItem value={FIVE_DAYS}>{FIVE_DAYS}</MenuItem>
                </Select>
            </Grid>
            <Grid xs={2}>
            </Grid>
        </Grid>
    )
}
