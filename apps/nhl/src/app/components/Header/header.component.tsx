import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const ToggleDarkModeSwitch = withStyles({
    switchBase: {
        '&$checked + $track': {
            backgroundColor: "#ffffff",
            opacity: 1
        }
    },
    checked: {},
    track: {},
  })(Switch);


function Header(props) {
    //const history = useHistory();
    console.log(props);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    function toggleDarkMode() {
        setDarkMode((state) => !state);
    }

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
                control={<ToggleDarkModeSwitch checked={darkMode} onChange={toggleDarkMode} aria-label="dark mode switch" color="primary"/>}
                label={darkMode ? 'Dark' : 'Normal'}
            />
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);