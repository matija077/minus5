import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import { useFetch } from '../../utility/customHooks';
import { TeamDetailsType } from '../../utility/types';
import TeamDetailsItem from '../../components/team-details-row/teamDetailsRow.component';

import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    typography: {
        color: theme.palette.primary.main
    }
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
    const tabletLandscape = useMediaQuery('(min-width: 1023px) and (orientation: landscape)');
    const tablePortrait = useMediaQuery('(min-width: 600px) and (orientation: portrait)');
    const tablet = tablePortrait || tabletLandscape;
    console.log("portrait " + tablePortrait)
    /*const mobileLandscape = useMediaQuery('(min-width: 1023px) and (orientation: landscape)');
    const mobilePortrait = useMediaQuery('(min-width: 600px) and (orientation: portrait)');
    const mobile = mobilePortrait || mobileLandscape;
    console.log(tablet);*/
    const mobile = false;

    //(min-width: 600px) and (orientation: "portrait"), (min-width: 1000px) and (orientation: "landscape")

    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant={"h6"} className={classes.typography}>{passedState.name}</Typography>
                    <Typography variant={"subtitle1"}>{venueCity}</Typography>
                </Paper>
            </Grid>
            {
               !loading
                    ? mobile
                        ? <Grid container spacing={2}>
                            "mobile"
                        </Grid>
                        : <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Paper>
                                    <Typography variant={"h6"}>Stats</Typography>
                                </Paper>
                                <TeamDetailsItem data={teamDetails.stats} />
                            </Grid>
                            <Grid item xs={6}>
                                <Paper>
                                    <Typography variant={"h6"}>Rankings</Typography>
                                </Paper>
                                <TeamDetailsItem data={teamDetails.ranks}></TeamDetailsItem>
                            </Grid>
                        </Grid>
                    : <Spinner></Spinner>
            }
        </Grid>
    );
}

export default TeamStats;