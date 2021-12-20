import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return (
        {
            cardBox: {
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                borderRadius: '5px',
                maxWidth: theme.spacing(60),
            },
            imgBox: {
                width: theme.spacing(10),
            },
            basicDescription: {
                display: 'flex',
                flexDirection: 'row',
            }
        }
    )
})

const WeatherCard = ({period}) => {
    const classes = useStyles()
    return (
        <div className={classes.cardBox}>
            <div className={classes.basicDescription}>
                <img className={classes.imgBox} src={period.icon} />
                {period.name}
                <br/>
                Temperature : {period.temperature} {period.temperatureUnit}
                <br/>
                Short Forcast : {period.shortForecast}
            </div>
            
            <div>
                Forcast : {period.detailedForecast}
            </div>
        </div>
    )
}

export default WeatherCard