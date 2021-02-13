import React from 'react';
import { RowStyles, ListItemTextStyles, ListStyles } from './teamRow.component.styles';
import { TeamType } from '../../utility/types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "primary"
    }
})

function TeamRow({ location, id, name, venue }: TeamType) {
    const color = id % 2 === 0 ? "primary" : "inherit";
    const classes = useStyles();

    return (
        <RowStyles button>
                <ListItemTextStyles style={{backgroundColor: color}} primary={name} secondary={location + "/" + venue} classes={{root: classes.root}} ></ListItemTextStyles>
        </RowStyles>
    );
}

export default TeamRow;