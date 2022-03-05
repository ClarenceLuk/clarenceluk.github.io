import './App.css';
import React, {useState} from 'react';
import Menu from './Menu/Menu.js';
import Home from './Applets/Home';
import Weather from './Applets/Weather.js';
import Othello from './Applets/Othello';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  console.log(theme)
  return (
  {
    appBox: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: theme.spacing(100),
      left: theme.spacing(0),
      top: theme.spacing(2),
    },
    menuBox: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: theme.spacing(2),
      left: theme.spacing(0)
    },
    menuText: {
      color: theme.palette.text.secondary,
    },
    routeBox: {
      display: 'flex',
      position: 'relative',
      left: theme.spacing(10),
    },
  })})

const App = () => {
  const [menuState, setMenuState] = useState(true)
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.appBox}>
        <div className={classes.menuBox}>
          <Menu menuState={menuState} setMenuState={setMenuState}/>
        </div>
        <div className={classes.routeBox}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/weather" element={<Weather/>}/>
            <Route path="/othello" element={<Othello/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
