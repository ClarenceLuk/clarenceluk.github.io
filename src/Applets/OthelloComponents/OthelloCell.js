import React, { useEffect, useState, memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return ({
        cell: {
            padding: '5px',
            border: '1px solid black',
            background: 'green',
            height: '50px',
            width: '50px',
        },
        whitePiece: {
            borderRadius: '25px',
            height: '50px',
            width: '50px',
            background: 'white',
        },
        blackPiece: {
            borderRadius: '25px',
            height: '50px',
            width: '50px',
            background: 'black',
        },
    })
})

const OthelloCell = (props) => {
    const [cellColor, setCellColor] = useState(-1)
    const classes = useStyles();
    console.log(props)

    const onClickEvent = () => {
        console.log("clicked!")
        if (cellColor == -1) {
            setCellColor(props.player)
        }
    }

    return (
        <div className={ classes.cell } onClick={() => onClickEvent()}>
            <div className={ cellColor == 0 ? classes.blackPiece : cellColor == 1 ? classes.whitePiece : null }/>
        </div>
    )
}

export default memo(OthelloCell);