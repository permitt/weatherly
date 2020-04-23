import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function InfoTable(props) {
  const classes = useStyles();

  return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Graph Unit</TableCell>
            <TableCell align="right">Interval</TableCell>
            <TableCell align="right">Measuring Time</TableCell>
            <TableCell align="right">Lowest temp</TableCell>
            <TableCell align="right">Highest temp</TableCell>
            <TableCell align="right">Current temp</TableCell>
            <TableCell align="right">Pressure</TableCell>
            <TableCell align="right">Visibility</TableCell>
            <TableCell align="right">Humidity</TableCell>          
          </TableRow>
        </TableHead>
        
          {props.data.length == 0 ? '' : props.data.map((city) => (


          <TableBody>    
              {city.measurements.map((msr, index) => (
                <TableRow>
                <TableCell component="th" scope="row">
                {index == 0 ? city.name : ''}
              </TableCell>
              <TableCell align="right">{index == 0 ? 
              <Select
                  labelId="graph-unit-change"
                  id="demo-simple-select"
                  value={city.graphUnit}
                  onChange={props.handleGraphUnitChange}
              >
                  <MenuItem value={'temp'}>temperature</MenuItem>
                  <MenuItem value={'pressure'}>pressure</MenuItem>
                  <MenuItem value={'humidity'}>humidity</MenuItem>
                  <MenuItem value={'visibility'}>visibility</MenuItem>
              </Select>
              
               : ''}
               
               </TableCell>
              <TableCell align="right">
              {index == 0 ? 
              
              <input style={{width: '30px'}} type="number" value={city.interval} onChange={props.handleIntervalChange}/>

               : ''}
               </TableCell>
               
              <TableCell align="right">{msr.time}</TableCell>
              <TableCell align="right">{msr.temp_min}</TableCell>
              <TableCell align="right">{msr.temp_max}</TableCell>
              <TableCell align="right">{msr.temp}</TableCell>
              <TableCell align="right">{msr.pressure}</TableCell>
              <TableCell align="right">{msr.visibility}</TableCell>
              <TableCell align="right">{msr.humidity}</TableCell>
              </TableRow>
              ))}
              
              
        </TableBody>    
          ))}
        
      </Table>
    </TableContainer>
    )
}
