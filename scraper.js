const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Player = require("./models/player_model.js");
require("./db.js");

for (let i = 1; i < 606; i++) {
  axios
    .get(`https://www.fifaindex.com/players/?page=${i}`)
    .then((response) => {
      const $ = cheerio.load(response.data);
      $("tbody > tr[data-playerid]").each(async (index, element) => {
        const name = $(element).find('td[data-title="Name"] > a').text();
        const nationality = $(element)
          .find('td[data-title="Nationality"] > a')
          .attr("title");
        const club = $(element)
          .find('td[data-title="Team"] > a')
          .attr("title")
          .slice(0, -8);
        const overallRating = $(element)
          .find('td[data-title="OVR / POT"] > span:nth-child(1)')
          .text();
        const playerId = index*i
        const newPlayer = new Player({
          name: name,
          nationality: nationality,
          club: club,
          overallRating: overallRating,
          player_id: playerId,
        });
        await newPlayer.save();
      });
      console.log(`page ${i} correctly added`);
    })
    .catch((error) => {
      console.log(error);
    });
}
