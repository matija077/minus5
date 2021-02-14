import React, { Fragment } from 'react';


import { AppBarStyled, MainContainerStyled } from './home.page.styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Spinner from '../../components/spinner/spinner.component';
import TeamRow from '../../components/team-row/teamRow.component';
import { TeamType } from '../../utility/types';
import { useFetch } from '../../utility/customHooks';

const url = "http:///localhost:3333/api/teams";

function HomePage() {
    const [teams, loading] = useFetch<Array<TeamType>>(url);

    return (
        <MainContainerStyled>
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