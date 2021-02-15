import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import { useFetch } from '../../utility/customHooks';
import { TeamDetailsType } from '../../utility/types';

import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const url = "http:///localhost:3333/api/teams";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(0.5),
      textAlign: 'center'
    },
  }),
);

function TeamStats(props: any) {
    console.log(props);
    const { id } = useParams();
    const { state: passedState } = useLocation();
    const classes = useStyles();

    const urlWithParams = url + "/" + id;
    const [teamDetails, loading] = useFetch<TeamDetailsType>(urlWithParams);
    console.log(loading);

    const venueCity = passedState.venue + "/" + passedState.location;

    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant={"h6"}>{passedState.name}</Typography>
                    <Typography variant={"subtitle1"}>{venueCity}</Typography>
                </Paper>
            </Grid>
            {
               !loading
                    ? <Grid item xs={12}>
                        teamDetails.stats.wins
                        </Grid>
                    : <Spinner></Spinner>
            }
        </Grid>
    );
}

export default TeamStats;