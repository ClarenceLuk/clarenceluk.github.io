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

    const classes = useStyles()

    const cellClickHandler = (row, col) => {
        board[row][col] = props.player;
        console.log("what", board)
        props.setPlayer(player => player == 1 ? 0 : 1)
    };

    return (
        <div>
            {board.map((row, i) => (
                <div className={ classes.boardRow }>
                    {row.map((col, j) => (
                        <OthelloCell onClick={() => cellClickHandler(i, j)} r={i} c={j} player={props.player} board={board}/>
                    ))}
                </div>
                )
            )}
        </div>
    )
}

export default OthelloBoard;