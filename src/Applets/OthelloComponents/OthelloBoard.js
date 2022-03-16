import { TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
    const [board, setBoard] = useState(() => new Array(boardDimension).fill(new Array(boardDimension).fill(-1)))

    useEffect(() => {
        const initialBoard = [...board].map(a => [...a])
        initialBoard[Math.floor(boardDimension/2)][Math.floor(boardDimension/2)] = 1
        initialBoard[Math.floor(boardDimension/2)-1][Math.floor(boardDimension/2)-1] = 1
        initialBoard[Math.floor(boardDimension/2)-1][Math.floor(boardDimension/2)] = 2
        initialBoard[Math.floor(boardDimension/2)][Math.floor(boardDimension/2)-1] = 2
        setBoard(initialBoard)
    }, [])

    const classes = useStyles()

    const flipTiles = (player) => {
        
    }

    const cellClickHandler = (row, col) => {
        if (board[row][col] == -1) {
            setBoard(board => {
                const newBoard = [...board].map(a => [...a])
                newBoard[row][col] = props.player
                return newBoard
            })
            props.setPlayer(player => player == 1 ? 2 : 1)
        }
    };

    return (
        <div>
            {board.map((row, i) => (
                <div className={ classes.boardRow }>
                    {row.map((col, j) => (
                        <OthelloCell onClick={() => cellClickHandler(i, j)} r={i} c={j} player={props.player} setPlayer={props.setPlayer} board={board}/>
                    ))}
                </div>
                )
            )}
        </div>
    )
}

export default OthelloBoard;