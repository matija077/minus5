import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

function TeamStats(props: any) {
    console.log(props);
    const { id } = useParams();
    const { state: passedState } = useLocation();
    console.log(useLocation());
    console.log(useHistory());
    console.log(id);
    console.log(passedState);
    return (
        <div>"Team stats"</div>
    );
}

export default TeamStats;