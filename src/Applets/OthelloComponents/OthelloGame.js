import React, { useEffect, useState } from 'react';
import OthelloBoard from './OthelloBoard';

const OthelloGame = () => {
    const [player, setPlayer] = useState(1)



    return (
        <div>OthelloGame
            <OthelloBoard props={{player, setPlayer}}/>
        </div>
    )
}

export default OthelloGame;