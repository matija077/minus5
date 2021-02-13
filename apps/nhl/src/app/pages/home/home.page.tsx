import React, { useEffect } from 'react';
import { AppBar} from '@material-ui/core';

function HomePage() {

    useEffect(() => {
        fetch("http://localhost:3333/api/teams").then(function resolved(result) {
            return result.json();
        })
        .then(function data(data: any) {
            console.log(data);
        })
        .catch(function rejected(error: any) {
            console.log(error);
        })
    }, []);

    return (
        <>
        <AppBar
            position="sticky"
        >
            NHL TEAMS
        </AppBar>
        </>
    );
}

export default HomePage;