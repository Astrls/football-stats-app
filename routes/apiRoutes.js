const express = require('express');
const router = express.Router();
const Player = require('../models/player_model');
const nameConvert = require('../middleware/nameConvert')

router.get('/players', async (req, res) => {
try {
const players = await Player.find({});
res.json(players);
} catch (err) {
console.log(err);
res.status(500).send('Server error');
}
});

router.get('/players/:name', nameConvert, async (req, res) => {
    try {
    const players = await Player.find({name: res.locals.playerName});
    res.json(players);
    } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
    }
    });

module.exports = router;