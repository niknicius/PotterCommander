import express from 'express';
import {runScript} from '../controllers/commands';

const commands = express.Router();

commands.post('/', (req, res) => {
    runScript(req.body.workdir, req.body.command).then(result => {
        res.send({result: result});
    }, error => {
        res.send({result: error});
    });
})

export default commands;
