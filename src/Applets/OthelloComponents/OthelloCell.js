import React, { useEffect, useState, memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return ({
        cell: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        legalMoves: {
            borderRadius: '25px',
            height: '10px',
            width: '10px',
        },
    })
})

const OthelloCell = (props) => {
    const classes = useStyles();

    return (
        <div className={ classes.cell } onClick={props.onClick}>
            <div className={ props.board[props.r][props.c] == 1 ? classes.blackPiece : props.board[props.r][props.c] == 2 ? classes.whitePiece : null }/>
        </div>
    )
}

export default memo(OthelloCell);