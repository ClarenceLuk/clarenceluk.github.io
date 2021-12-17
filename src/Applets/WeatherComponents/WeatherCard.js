import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return (
        {
            cardBox: {
                display: 'flex',
                border: '1px solid black',
                borderRadius: '5px',
            },
        }
    )
})

const WeatherCard = ({period}) => {
    const classes = useStyles()
    return (
        <div className={classes.cardBox}>
            <img src={period.icon}/>
            <br/>
            {period.name}
            <br/>
            Temperature : {period.temperature} {period.temperatureUnit}
            <br/>
            Short Forcast : {period.shortForecast}
            <br/>
            Forcast : {period.detailedForecast}
        </div>
    )
}

export default WeatherCard