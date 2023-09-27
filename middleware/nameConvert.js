const nameConvert = (req, res, next) => {
  const playerArr = req.params.name.split("-");
  for (let i = 0; i < playerArr.length; i++) {
    playerArr[i] = playerArr[i].charAt(0).toUpperCase() + playerArr[i].slice(1);
  }
  let playerName = playerArr.join(" ");
  playerName = playerName.replace(/-/g, " ");
  res.locals.playerName = playerName
  next();
};

module.exports = nameConvert