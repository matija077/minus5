import React from 'react';

import { RanksType, StatsType } from '../../utility/types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

type TeamDetailsRowPropsType = {
    data: RanksType | StatsType,
}

const useStyles = makeStyles({
    root: {
        backgroundColor: "primary"
    }
})

function TeamDetailsRow({ data }: TeamDetailsRowPropsType) {
    console.log(data);
    return (
        <List>
            {
                Object.entries(data).map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText>{item[0]}</ListItemText>
                        <ListItemText>{item[1]}</ListItemText>
                    </ListItem>
                ))
            }
        </List>
    );
}

export default TeamDetailsRow;