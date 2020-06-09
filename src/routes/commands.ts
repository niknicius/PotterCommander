import express from 'express';

const commands = express.Router();

commands.get('/', (req, res) => {
    res.send("Hello World!");
})

export default commands;
