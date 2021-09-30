import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    console.log(theme)
    return (
    {
        menuBox: {
            height: theme.spacing(0),
            width: theme.spacing(0),
        },
        menuText: {
            color: theme.palette.text.secondary,
        },
    })})

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.menuBox}>
            <div>
                <Drawer open>
                    Hello World
                </Drawer>
            </div>
        </div>
    )
}

export default Menu