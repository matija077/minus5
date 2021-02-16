import React, { Fragment } from 'react';

import { RanksType, StatsType } from '../../utility/types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


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
                    <Fragment key={index}>
                        <ListItem>
                            <Box component="span" ml={1}>
                                <Grid>
                                    <ListItemText>{item[0]}</ListItemText>
                                    <ListItemText>{item[1]}</ListItemText>
                                </Grid>
                            </Box>
                        </ListItem>
                        <Divider></Divider>
                    </Fragment>
                ))
            }
        </List>
    );
}

export default TeamDetailsRow;