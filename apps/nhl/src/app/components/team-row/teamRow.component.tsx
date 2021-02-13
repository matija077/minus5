import React from 'react';
import { RowStyles, ListItemTextStyles, ListStyles } from './teamRow.component.styles';
import { TeamType } from '../../utility/types';

function TeamRow({ location, id, name, venue }: TeamType) {
    return (
        <RowStyles button>
                <ListItemTextStyles primary={name} secondary={location + "/" + venue}></ListItemTextStyles>
        </RowStyles>
    );
}

export default TeamRow;