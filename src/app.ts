import express from 'express';
import bodyParser from 'body-parser';
import commands from './routes/commands';

const app = express();
app.use(bodyParser.json());
app.use(commands);

export default app;
