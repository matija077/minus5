import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles,Theme } from '@material-ui/core/styles';
import { darkModeColors } from '../../utility/theme';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';

type HeaderPropsType = {
    children: never[],
    toggleDarkMode: () => void,
    darkMode: boolean
}

const ToggleDarkModeSwitch = withStyles((theme: Theme) => ({
    switchBase: {
        '&$checked + $track': {
            backgroundColor: darkModeColors.white,
            opacity: 1
        },
        '&$checked': {
            color: darkModeColors.lightGrey
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
                <Grid justify="center" container>
                    <Grid item xs={1}>
                        <ArrowBackIcon></ArrowBackIcon>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={"h5"}>
                            NHL TEAMS
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <FormControlLabel
                            control={<ToggleDarkModeSwitch checked={darkMode} onChange={toggleDarkMode} aria-label="dark mode switch"/>}
                            label={darkMode ? 'Dark' : 'Normal'}
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);