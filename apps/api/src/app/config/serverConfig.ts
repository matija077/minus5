import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import dotenv from "dotenv";

function configServerMiddlewares(app: express.Application) {
    //app.use(helmet());
    //app.use(cors());
    //app.use(express.urlencoded({extended: true}));
    app.use(express.json());
}

/**
 * should be run before any environment calls
 */
function config() {
    if (process.env.NODE_ENV !== 'production') {
        const result = dotenv.config({ path: "./apps/api/src/.env"});

        if (result.error) {
            console.log("error reading env");
        }
    }
}
config();

export default configServerMiddlewares;