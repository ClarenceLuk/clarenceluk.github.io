import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import citiesAPI from "cities";
import weatherAPI from "weather-gov-api";
import WeatherCard from './WeatherComponents/WeatherCard.js'

const useStyles = makeStyles(theme => {
    return (
        {
            weatherBox: {
                display: 'flex',
                flexDirection: 'column',
            },
        }
        
    )
})

const getWeather = (latitude, longitude) => {
    
}

const Weather = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [weather, setWeather] = useState([])

    const classes = useStyles();

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    })

    useEffect(() => {
        weatherAPI
        .getForecast("default", latitude, longitude)
        .then((data) => {
            setWeather(data.data.properties.periods)
            console.log(data.data.properties.periods)
        })
        .catch(err => err).finally();
    }, [latitude, longitude])

    return (
        <div className={classes.weatherBox}>
            {weather.map(period => {
                return (
                    <WeatherCard period={period} key={period.number}/>
                )
            })}
        </div>
    )
}

export default Weather