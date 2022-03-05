import React, { useEffect, useState } from 'react';
import OthelloBoard from './OthelloBoard';

const OthelloGame = () => {
    const [player, setPlayer] = useState(1)



    return (
        <div>
            <OthelloBoard player={player} setPlayer={setPlayer}/>
        </div>
    )
}

export default OthelloGame;