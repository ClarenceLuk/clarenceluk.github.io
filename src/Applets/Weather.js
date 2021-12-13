import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import citiesAPI from "cities";
import weatherAPI from "weather-gov-api";

const useStyles = makeStyles(theme => {
    console.log(theme)
})

const getWeather = (latitude, longitude) => {
    
}

const Weather = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [weather, setWeather] = useState([])
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
        }).catch(err => console.log(err));
    }, [latitude, longitude])

    return (
        <div>
            {weather.map(period => {
                return (
                    <div>
                        <br/>
                        {period.name}
                        <br/>
                        Temperature : {period.temperature}
                        <br/>
                        Short Forcast : {period.shortForecast}
                        <br/>
                        Forcast : {period.detailedForecast}
                    </div>
                )
            })}
        </div>
    )
}

export default Weather