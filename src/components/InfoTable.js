import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { makeStyles } from '@material-ui/core/styles';

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded ?
        expandComponent : ''
      }
    </>
  );
};

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
            <TableCell padding="checkbox" />
            <TableCell>City</TableCell>
            <TableCell align="right">Measuring Time</TableCell>
            <TableCell align="right">Lowest °C</TableCell>
            <TableCell align="right">Highest °C</TableCell>
            <TableCell align="right">Current °C</TableCell>
            <TableCell align="right">Pressure</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell algin="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.data.length == 0 ? '' : props.data.map((city) => (

            <ExpandableTableRow
              key={city.name}
              expandComponent={

                city.measurements.slice(1).map((msr, index) => (
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{msr.dt_txt}</TableCell>
                    <TableCell align="right">{msr.main.temp_min}</TableCell>
                    <TableCell align="right">{msr.main.temp_max}</TableCell>
                    <TableCell align="right">{msr.main.temp}</TableCell>
                    <TableCell align="right">{msr.main.pressure}</TableCell>
                    <TableCell align="right">{msr.main.humidity}</TableCell>
                    <TableCell align="right">
                    </TableCell>
                  </TableRow>
                ))}

            >
              <TableCell component="th" scope="row">
                {city.name}
              </TableCell>
              <TableCell align="right">{city.measurements[0].dt_txt}</TableCell>
              <TableCell align="right">{city.measurements[0].main.temp_min}</TableCell>
              <TableCell align="right">{city.measurements[0].main.temp_max}</TableCell>
              <TableCell align="right">{city.measurements[0].main.temp}</TableCell>
              <TableCell align="right">{city.measurements[0].main.pressure}</TableCell>
              <TableCell align="right">{city.measurements[0].main.humidity}</TableCell>
              <TableCell align="right">
                <Button color='secondary' onClick={() => props.handleRemoveCity(city.name)}>Remove City</Button>
              </TableCell>
            </ExpandableTableRow>


          ))
          }
        </TableBody>
      </Table>
    </TableContainer >
  )
}
