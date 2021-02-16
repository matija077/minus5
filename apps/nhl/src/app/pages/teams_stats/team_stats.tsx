import React, { useState, useEffect } from 'react';
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
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

const url = "http:///localhost:3333/api/teams";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(0.5),
      textAlign: 'center',
    },
    box: {
        width: "100vw"
    },
    box2: {
        width: "50vw",
        display: "inline-block"
    }
  }),
);

enum dataTypes {
    "rankings" = "rankings",
    "stats" = "stats"
}

function TeamStats(props: any) {
    // hooks
    const { id } = useParams();
    const { state: passedState } = useLocation();
    const [openRankings, setOpenRankings] = useState<boolean>(false);
    const [openStats, setOpenStats] = useState<boolean>(true);
    const classes = useStyles();

    // data fetching
    const urlWithParams = url + "/" + id;
    const [teamDetails, loading] = useFetch<TeamDetailsType>(urlWithParams);

    let landscapeM = window.matchMedia('(max-width: 1023px) and (orientation: landscape)' );
    let portraitM = window.matchMedia('(max-width: 600px) and (orientation: portrait)' );

    useEffect(() => {
        function captureScreenOrientationChange(event: any) {
            console.log(landscapeM.matches);
            console.log(portraitM.matches)
        }

        window.addEventListener("resize", captureScreenOrientationChange);

        return () => {
            window.removeEventListener("resize", captureScreenOrientationChange);
        }
    }, [])


    // handlers
    function handleClickExpand(event: any) {
        const type = event.currentTarget.dataset.type;

        if (type === dataTypes.stats) {
            setOpenStats(stats => !stats);
        } else if (type === dataTypes.rankings) {
            setOpenRankings(rankings => !rankings);
        }
    }




    // component related data
    const venueCity = passedState.venue + "/" + passedState.location;

    const mobileLandscape = useMediaQuery('(max-width: 1023px) and (orientation: landscape)');
    const mobilePortrait = useMediaQuery('(max-width: 600px) and (orientation: portrait)');
    const mobile = mobilePortrait || mobileLandscape;
    console.log(mobileLandscape);
    console.log(mobilePortrait);
    console.log(mobile);

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
                    ? <Box className={classes.box}>
                        { mobile
                            ? <Grid container spacing={2} className={classes.grid}>
                                <List>
                                    <ListItem button onClick={handleClickExpand} data-type={dataTypes.stats}>
                                        <ListItemText primary="Stats" />
                                        {openStats ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={openStats} timeout="auto">
                                        <TeamDetailsItem data={teamDetails.stats} />
                                    </Collapse>
                                    <ListItem button onClick={handleClickExpand} data-type={dataTypes.rankings}>
                                        <ListItemText primary="Rankings" />
                                        {openRankings ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={openRankings} timeout="auto">
                                        <TeamDetailsItem data={teamDetails.ranks} />
                                    </Collapse>
                                </List>
                            </Grid>
                            : <Grid container spacing={1}>
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
                        }
                    </Box>
                    : <Spinner></Spinner>
            }
        </Grid>
    );
}

export default TeamStats;