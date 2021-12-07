import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu.js'
import Weather from './Applets/Weather.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import Home from './Applets/Home';

const useStyles = makeStyles(theme => {
  console.log(theme)
  return (
  {
    appBox: {
      display: 'flex',
    },
    menuBox: {
      height: theme.spacing(0),
      width: theme.spacing(11),
    },
    menuText: {
      color: theme.palette.text.secondary,
    },
  })})

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <div class={classes.appBox}>
        <div class={classes.menuBox}>
          <Menu />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Weather" element={<Weather/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
