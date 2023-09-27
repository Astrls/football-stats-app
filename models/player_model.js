const mongoose = require("mongoose")


const playerSchema = new mongoose.Schema({
    name: String,
    nationality: String,
    club: String,
    overallRating: Number,
    player_id: Number
  });
  
  const Player = mongoose.model("Player", playerSchema);

  module.exports = Player