import express from 'express';
import {runScript} from '../controllers/commands';

const commands = express.Router();

commands.post('/', (req, res) => {
    runScript(req.body.workdir, req.body.command).then(result => {
        console.log(result);
        res.send(result);
    }, error => {
        res.send(error.message)
    });
})

export default commands;
