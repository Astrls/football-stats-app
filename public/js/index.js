const searchButton = document.getElementById("search-button");
const defaultResult = document.getElementsByClassName("default")
const queryResult = document.getElementsByClassName ("player-wrapper")
const query = document.getElementById("query");


const toggleResult = () => {
  defaultResult.classList.toggle("hidden")
  queryResult.classList.toggle("hidden")
}


const playerQuery = (keyword) => {
  fetch(`http://localhost:9000/api/players`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == keyword) {
          toggleResult()
          queryResult.innerHTML = `
          <div class = "player-entry">
                <div class="name"> <a href="/players/id/${data[i].player_id}">${data[i].name}</a></div>
                <div class="score">${data[i].overallRating}</div>
            </div>
          `
        } else {
          console.log("no player with this name");
        }
      }
    })
    .catch(console.log("Can't access api"));
};

searchButton.addEventListener("click", (e) => {
  playerQuery(`${query.value}`);

});
