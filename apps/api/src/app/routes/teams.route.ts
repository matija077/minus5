import * as express from 'express';
const router = express.Router();
import { returnCodes } from '../config/utils';
import { getTeams as getTeamsService,
    getTeamById as getTeamDetails } from '../services/teams.service';

router
    .get("/teams", async function getTeams(req: express.Request, res: express.Response) {
        try {
            const teams = await getTeamsService();
            res.json(teams);
        }
        catch(error: any) {
            console.log(error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

    .get("/teams/:id", async function getTeamById(req: express.Request, res: express.Response) {
        const id = req.params.id;

        try {
            const teamDetails = await getTeamDetails(+id);
            res.json(teamDetails);
        } catch(error: any) {
            console.log(error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

export default router;