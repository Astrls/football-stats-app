const express = require("express");
const router = express.Router();
const path = require("path")
const Player = require("../models/player_model");
const nameConvert = require("../middleware/nameConvert");


//Static routes
router.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'info.html'));
});


router.get("/", async (req, res) => {
  try {
    const players = await Player.find({}).sort({ overallRating: -1 });
    res.render("./index.ejs", { players });
    console.log(players);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/players/id/:id", async (req, res) => {
  try {
    const players = await Player.find({ player_id: req.params.id });
    res.render("./player.ejs", { players });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/players/:name", nameConvert, async (req, res) => {
  try {
    const players = await Player.find({ name: res.locals.playerName });
    res.render("./player.ejs", { players });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
