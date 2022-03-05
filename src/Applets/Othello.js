import React, { useState } from 'react';
import OthelloGame from './OthelloComponents/OthelloGame';
import { v1 as uuidv1 } from 'uuid';

const Othello = () => {
    const [uniqId, setUniqId] = useState(uuidv1())



    return (
        <div>
            <OthelloGame key={ uniqId }/>
            <button onClick={() => setUniqId(uuidv1())}>Reset</button>
        </div>
    )
}

export default Othello;