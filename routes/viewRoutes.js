const express = require("express");
const router = express.Router();
const Player = require("../models/player_model");
const nameConvert = require('../middleware/nameConvert')

router.get("/players", async (req, res) => {
  try {
    const players = await Player.find({}).sort({ overallRating: -1 }).limit(10);
    res.json(players);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const players = await Player.find({}).sort({ overallRating: -1 }).limit(10);
    res.render("./index.ejs", { players });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/players/:name", nameConvert, async (req, res) => {
    try {
      const players = await Player.find({name: res.locals.playerName});
      res.render("./player.ejs", { players });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  });

module.exports = router;
