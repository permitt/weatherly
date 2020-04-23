import React, {useState, useEffect} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function MessageHandler(props) {
       
    return (
        
        <Snackbar open={props.message.active} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity={props.message.type}>
                    {props.message.msg}
                </Alert>
        </Snackbar> 
        
    )
}
