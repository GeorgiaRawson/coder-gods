//to add JavaScript

//api key = fb12c189ded2329690fbb85c2a304601

//https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=fb12c189ded2329690fbb85c2a304601&format=json

const feelingInput = document.getElementById("feeling");

//fetch api request
function sendFetchRequest() {
  feeling = feelingInput.value;
  fetch(
    "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=" +
      feeling +
      "&api_key=fb12c189ded2329690fbb85c2a304601&format=json",
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetch API:", data);
      getSongs(data.tracks.track);
    })
    .catch((error) => console.error("Fetch error:", error));
}
//sdd
const x = 2;
searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", sendFetchRequest);

songsFromGenre = document.createElement("ul");

searchDiv = document.querySelector(".search");

searchDiv.append(songsFromGenre);

function getSongs(tracks) {
  for (let i = 0; i < 5; i++) {
    song = tracks[i];
    console.log(song);
    const songLi = document.createElement("li");
    songLi.textContent = song.name;
    searchDiv.append(songLi);
  }
}
