import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useFetch } from '../../utility/customHooks';
import { TeamDetailsType } from '../../utility/types';

const url = "http:///localhost:3333/api/teams";

function TeamStats(props: any) {
    console.log(props);
    const { id } = useParams();
    const { state: passedState } = useLocation();

    const urlWithParams = url + "/" + id;
    const [teamDetails, loading] = useFetch<TeamDetailsType>(urlWithParams);
    console.log(loading);

    return (
        <>
            <div>{passedState.name}</div>
            <div>{passedState.venue}/{passedState.city}</div>
        </>
    );
}

export default TeamStats;