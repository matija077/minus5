import * as express from 'express';
import configServerMiddlewares from './app/config/serverConfig';
import teamsRoute from './app/routes/teams.route';
import { PORT } from './app/config/utils';
import * as path from 'path';

// initialize env if needed

// and set ports
const port = process.env.port || PORT;

// initialize necessary apps
const app = express();

// middlewares for all routes
configServerMiddlewares(app);

app.use(express.static(path.join(__dirname, '../nhl')));

app.use('/api', teamsRoute);

app.get('*', (req,res) =>{
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../nhl/index.html"));
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);