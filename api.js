const express = require('express');
const router = express.Router();
const Player = require('./models/player_model');

router.get('/players', async (req, res) => {
try {
const players = await Player.find({});
res.json(players);
} catch (err) {
console.log(err);
res.status(500).send('Server error');
}
});

router.get('/players/:name', async (req, res) => {
    const playerArr = req.params.name.split('-')
    for (let i = 0; i < playerArr.length; i++) {
        playerArr[i] = playerArr[i].charAt(0).toUpperCase() + playerArr[i].slice(1);
    }
    let playerName = playerArr.join(' ');
    playerName = playerName.replace(/-/g, ' ');
    try {
    const players = await Player.find({name: playerName});
    res.json(players);
    } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
    }
    });

module.exports = router;