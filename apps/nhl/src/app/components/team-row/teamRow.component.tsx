import React from 'react';
import { Link } from 'react-router-dom';
import { RowStyles, ListItemTextStyles } from './teamRow.component.styles';
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
    const secondary = location + "/" + venue;

    return (
        <Link to={{
            pathname:`/team/${id}`,
            state: {name, venue, location}
        }}>
            <RowStyles button>
                    <ListItemTextStyles style={{backgroundColor: "primary"}} primary={name} secondary={secondary} classes={{root: classes.root}} ></ListItemTextStyles>
            </RowStyles>
        </Link>
    );
}

export default TeamRow;