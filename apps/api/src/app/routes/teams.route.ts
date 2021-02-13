import * as express from 'express';
const router = express.Router();
import { returnCodes } from '../config/utils';
import { getTeams as getTeamsService } from '../services/teams.service';

router
    .get("/teams", async function getTeams(req: express.Request, res: express.Response) {
        try {
            const teams = await getTeamsService();
            //console.log(teams);
            res.json(teams);
        }
        catch(error: any) {
            console.log(error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

export default router;