/api key = fb12c189ded2329690fbb85c2a304601

//https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=fb12c189ded2329690fbb85c2a304601&format=json



//fetch api request
function sendFetchRequest() {
  fetch(
    "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=fb12c189ded2329690fbb85c2a304601&format=json",
  )
    .then((response) => response.json())
    .then((data) => console.log("Fetch API:", data))
    .catch((error) => console.error("Fetch error:", error));
}





searchButton = document.getElementById("searchButton");



searchButton.addEventListener("click", sendFetchRequest);