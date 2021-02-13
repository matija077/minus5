import * as path from 'path';
const PORT = 3333;

const returnCodes = {
    'error': 500,
    'ok': 200,
};

const fileNames = {
    location: "./apps/api/data/",
    prefix:"nhl-",
    teams: "teams",
    suffix: ".json",
    getFileName (name?: string)  {
        const fileName = path.normalize(`${this.location}${this.prefix}${name || this.teams}${this.suffix}`);
        return fileName;
    }
}

export { PORT, returnCodes, fileNames };