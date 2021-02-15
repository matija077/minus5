import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles,Theme } from '@material-ui/core/styles';

type HeaderPropsType = {
    children: never[],
    toggleDarkMode: () => void,
    darkMode: boolean
}

const ToggleDarkModeSwitch = withStyles((theme: Theme) => ({
    switchBase: {
        '&$checked + $track': {
            backgroundColor: "#ffffff",
            opacity: 1
        },
        '&$checked': {
            color: theme.palette.primary.main
        }
    },
    checked: {},
    track: {},
  }))(Switch);


function Header({ toggleDarkMode, darkMode }: HeaderPropsType) {

    return (
        <AppBar
            color={"secondary"}
            position="sticky"
        >
            <Toolbar

            >
                <Typography variant={"h5"}>
                    NHL TEAMS
                </Typography>
                <FormControlLabel
                control={<ToggleDarkModeSwitch checked={darkMode} onChange={toggleDarkMode} aria-label="dark mode switch"/>}
                label={darkMode ? 'Dark' : 'Normal'}
            />
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);