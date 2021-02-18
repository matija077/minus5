import { TeamType, TeamDetailsType } from '../types/teams.types';
import { fileNames } from '../config/utils';
import * as fs from 'fs';
import * as path from 'path';

function fileReader(fileName: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(process.env.LOCATION, fileName), (error, data) => {
            if (error) {
                reject(error);
            }

            const teams = JSON.parse(data.toString());

            resolve(teams)
        });
    })
}

function parseTeams(nonParsedTeams: any): Array<TeamType> {
    const teamsArray = nonParsedTeams.teams;
    const teams = teamsArray.map((team) => {
        return {
            id: team.id,
            name: team.name,
            venue: team.venue.name,
            location: team.locationName
        }
    });

    return teams;
}

function parseTeamDetail(nonParsedTeamDetails: any): TeamDetailsType {
    const regularStats = nonParsedTeamDetails.stats[0].splits[0];
    const regularRanks = nonParsedTeamDetails.stats[1].splits[0];

    const regularStatsParsed = {
        loses: regularStats.stat.losses,
        points: regularStats.stat.pts,
        wins: regularStats.stat.wins,
        goalsPerGame: regularStats.stat.goalsPerGame,
    }

    const regularRanksParsed = {
        loses: regularRanks.stat.losses,
        points: regularRanks.stat.pts,
        wins: regularRanks.stat.wins,
        goalsPerGame: regularRanks.stat.goalsPerGame,
    }

    // replace(/\D/, "")
    const teamDetails: TeamDetailsType = {
        stats: regularStatsParsed,
        ranks: regularRanksParsed
    };

    return teamDetails;
}

async function getTeams(): Promise<any> {
    const teamsFileName = "nhl-teams.json";
    let teams:Array<TeamType> = undefined;

    try {
        const teamsNotParsed = await fileReader(teamsFileName);

        teams = parseTeams(teamsNotParsed);
    } catch(error : any) {
        Promise.reject(error);
    }

    return Promise.resolve(teams);
}

async function getTeamById(id: number): Promise<TeamDetailsType> {
    let idFormatted: string = id.toString();
    if (id < 10) {
        idFormatted = "0" + idFormatted;
    }

    const teamFileName = `nhl-${idFormatted}.json`;
    let teamDetails: TeamDetailsType = undefined;

    try {
        const teamDetailsNotParsed = await fileReader(teamFileName);
        teamDetails = parseTeamDetail(teamDetailsNotParsed);
    } catch(error: any) {
        Promise.reject(error);
    }

    return Promise.resolve(teamDetails);
}

export {
    getTeams,
    getTeamById
}