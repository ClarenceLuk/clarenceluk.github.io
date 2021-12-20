import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles(theme => {
    console.log(theme)
    return (
    {
        menuBox: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '2px',

            height: theme.spacing(0),
            minWidth: theme.spacing(15),
        },
        menuText: {
            color: theme.palette.text.secondary,
        },
    })})

const Menu = () => {
    const classes = useStyles();

    return (
        <div open className={classes.menuBox} BackdropProps={{ invisible: true }} variant='persistant'>
            <Link to="/">Home</Link>
            <Link to="/Weather">Weather</Link>
        </div>
    )
}

export default Menu