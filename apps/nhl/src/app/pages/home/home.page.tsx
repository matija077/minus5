import React, { useEffect, useState } from 'react';
import { useError } from '../../utility/customHooks';

import { AppBarStyled, MainContainerStyled } from './home.page.styles';
import List from '@material-ui/core/List';

import Spinner from '../../components/spinner/spinner.component';
import TeamRow from '../../components/team-row/teamRow.component';
import { TeamType } from '../../utility/types';

function HomePage() {
    const [error, setError] = useError();
    const [teams, setTeams] = useState<Array<TeamType>>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("http://localhost:3333/api/teams").then(function resolved(result) {
            return result.json();
        })
        .then(function data(data: any) {
            console.log(data);
            setTeams(data);
        })
        .catch(function rejected(error: any) {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

        setLoading(true);
    }, []);

    return (
        <MainContainerStyled>
            <AppBarStyled
                color={"inherit"}
            >
                NHL TEAMS
            </AppBarStyled>
            {!loading
                ? <List>
                    {
                        teams.map((team) => {
                            return <TeamRow key={team.id} {...team}></TeamRow>
                        })
                    }
                </List>
                : <Spinner />}
        </MainContainerStyled>
    );
}

export default HomePage;