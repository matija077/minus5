import { TeamType } from '../types/teams.types';
import { fileNames } from '../config/utils';
import * as fs from 'fs';
import * as path from 'path';

async function getTeams(): Promise<any> {
    const teamsFileName = "nhl-teams.json";
    const teamsNotParsed = await fileReader(teamsFileName);
    const teams = parseTeams(teamsNotParsed);
    //console.log(teams);

    return Promise.resolve(teams);
}

function parseTeams(nonParsedTeams: any): any {
    //console.log(nonParsedTeams);
    const teams = nonParsedTeams;

    return teams;
}

function fileReader(fileName: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(process.env.LOCATION, fileName), (error, data) => {
            if (error) {
                reject(error);
            }
            //console.log(fileNames.getFileName());
            //console.log(process.env.LOCATION);
            console.log(data);

            const teams = JSON.parse(data.toString());
            //console.log(teams);
            resolve(teams)
        });
    })
}

export {
    getTeams,
    parseTeams
}