import express from 'express';
import commands from './routes/commands';

const app = express();
app.use(commands);

export default app;
