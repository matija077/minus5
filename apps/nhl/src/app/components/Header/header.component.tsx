import React from 'react';

import { withRouter } from 'react-router-dom';

import { AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
    //const history = useHistory();
    console.log(props);
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

            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);