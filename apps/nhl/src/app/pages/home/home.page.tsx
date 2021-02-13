import React, { useEffect, useState } from 'react';
import { AppBarStyled, MainContainerStyled, GridListStyled } from './home.page.styles';
import { useError } from '../../utility/customHooks';
import Spinner from '../../components/spinner/spinner.component';

type TeamType = {
    id: number,
    name: string,
    venue: string,
    city: string
}

function HomePage() {
    const [error, setError] = useError();
    const [teams, setTeams] = useState<Array<TeamType>>();
    const [loading, setLoading] = useState<boolean>(false);

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
            <AppBarStyled>
                NHL TEAMS
            </AppBarStyled>
            {loading
                ? <GridListStyled>

                </GridListStyled>
                : <Spinner />}
        </MainContainerStyled>
    );
}

export default HomePage;