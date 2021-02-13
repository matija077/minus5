import * as express from 'express';
const router = express.Router();
import { returnCodes } from '../config/utils';

router
    .get("/teams", function getTeams(req: express.Request, res: express.Response) {
        try {
            res.send("test");
        }
        catch(error: any) {
            res.status(returnCodes.error).send("something went wrong");
        }
    })

export default router;