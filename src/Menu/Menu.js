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
        menuOpen: {
            width: '30px',
        },
        menuClosed: {
            
        },
        menuText: {
            color: theme.palette.text.secondary,
        },
        menuButtonOpen: {
            width: '100px',
        },
        menuButtonClosed: {
            width: '20px',
        },
        menuChoiceBox: {
            display: 'flex',
            flexDirection: 'column',
        },
    })})

const Menu = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.menuOpen}>
            <button className={props.menuState ? classes.menuButtonOpen : classes.menuButtonClosed} onClick={() => props.setMenuState(menuState => !menuState)}>OpenClose</button>
            {props.menuState ? (
                <div className={classes.menuChoiceBox}>
                    <Link to="/">Home</Link>
                    <Link to="/weather">Weather</Link>\
                    <Link to="/othello">Othello</Link>
                </div>) : null
            }
        </div>
    )
}

export default Menu