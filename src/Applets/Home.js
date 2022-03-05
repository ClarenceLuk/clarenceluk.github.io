import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return ({
        home: {
            background: 'lavender',
            
        }
    })
})

const Home = () => {
    return (
        <div>
            Home!
        </div>
    )
}

export default Home