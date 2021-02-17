import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { darkModeColors } from '../../utility/theme';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

type HeaderPropsType = {
    children: never[],
    toggleDarkMode: () => void,
    darkMode: boolean
}

const useStyles = makeStyles((theme: Theme) => {
    console.log(theme.palette.primary.main);
  return createStyles({
    root: {
      color: theme.palette.primary.main,
    },
  }) }
)


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
    const history = useHistory();
    const [renderBackButton, setRenderBackButton] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const unlisten = history.listen(location => {
            console.log(location);
            if (location.pathname.startsWith("/team")) {
                setRenderBackButton(true);
            } else {
                setRenderBackButton(false)
            }
        })

        return () => unlisten();
    }, [renderBackButton, history])

    function onBackButtonClickHandler(event: any) {
        history.goBack();
    }

    return (
        <AppBar
            color={"secondary"}
            position="sticky"
        >
            <Toolbar

            >
                <Grid justify="center" container>
                    <Grid item xs={1}>
                        {
                            renderBackButton && <IconButton onClick={onBackButtonClickHandler} color={"inherit"}>
                                <ArrowBackIcon></ArrowBackIcon>
                            </IconButton>
                        }
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