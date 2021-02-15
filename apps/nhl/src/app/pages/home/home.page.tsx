import React, { Fragment } from 'react';


import { AppBarStyled, MainContainerStyled } from './home.page.styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import Spinner from '../../components/spinner/spinner.component';
import TeamRow from '../../components/team-row/teamRow.component';
import { TeamType } from '../../utility/types';
import { useFetch } from '../../utility/customHooks';

const url = "http:///localhost:3333/api/teams";

const useStyles = makeStyles((theme: Theme) => {
    console.log(theme.palette.primary.main);
  return createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
  }) }
)

function HomePage() {
    const [teams, loading] = useFetch<Array<TeamType>>(url);
    const classes = useStyles();

    return (
        <MainContainerStyled maxWidth={false} className={classes.root}>
            {!loading
                ? <List>
                    {
                        teams.map((team) => {
                            return (
                                <Fragment key={team.id}>
                                    <TeamRow {...team}></TeamRow>
                                    <Divider></Divider>
                                </Fragment>
                            )
                        })
                    }
                </List>
                : <Spinner />}
        </MainContainerStyled>
    );
}

export default HomePage;