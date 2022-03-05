import { TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import OthelloCell from './OthelloCell';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return ({
        boardRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        boardCol: {

        },
    })
})

const OthelloBoard = (props) => {
    const defaultSize = 8
    const [boardDimension, setBoardDimension] = useState(defaultSize)
    const board = new Array(boardDimension).fill(new Array(boardDimension).fill(-1))

    console.log("boardLength", props)

    const classes = useStyles()

    return (
        <div>
            {board.map((row) => (
                <div className={ classes.boardRow }>
                    {row.map((col) => (
                        <OthelloCell row={row} col={col} player={props.player} setPlayer={props.setPlayer} board={board}/>
                    ))}
                </div>
                )
            )}
        </div>
    )
}

export default OthelloBoard;