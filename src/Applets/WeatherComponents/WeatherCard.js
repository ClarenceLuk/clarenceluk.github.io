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

    let date = period.startTime.split('T')[0].split('-')

    return (
        <div className={classes.cardBox}>
            <div className={classes.basicDescription}>
                <img className={classes.imgBox} src={period.icon} />
                {period.name} - {date[1]}/{date[2]}/{date[0]}
                <br/>
                Temperature : {period.temperature} {period.temperatureUnit}
                <br/>
                Short Forcast : {period.shortForecast}
                <br/>
                Wind: {period.windSpeed} {period.windDirection}
            </div>
            <div>
                Forcast : {period.detailedForecast}
            </div>
        </div>
    )
}

export default WeatherCard