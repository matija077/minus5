import * as express from 'express';
import configServerMiddlewares from './app/config/serverConfig';
import teamsRoute from './app/routes/teams.route';
import { PORT } from './app/config/utils';

// initialize env if needed

// and set ports
const port = process.env.port || PORT;

// initialize necessary apps
const app = express();

// middlewares for all routes
configServerMiddlewares(app);


app.use('/api', teamsRoute);


const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
