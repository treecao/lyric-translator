// LYRIC API START
const song = document.querySelector(".description");
const lyrics = document.createElement("p");
const currentSongDisplay = document.getElementById("current-song");
let previouslySearched =
  JSON.parse(localStorage.getItem("Last Searched")) || [];
let historyDisplay = document.getElementById("history");

// pulling data from local storage and displaying it on the page
function displayLastSong() {
  let duplicateExists = false;
  for(let i=0; i < previouslySearched.length; i++){
    let songHistory = document.createElement("button");
    songHistory.textContent =
      previouslySearched[i].capitalSong + " - " + previouslySearched[i].capitalArtist;
    songHistory.addEventListener("click", function () {
      songLyric(
        previouslySearched[i].capitalSong,
        previouslySearched[i].capitalArtist
      );
    });
    historyDisplay.append(songHistory);
  }
}
displayLastSong();

// main function for api functionality
function songLyric(songName, artistName) {
  // api url with song/artist names being appended to the url
  var url =
    "https://93b9b720-f4e9-47a8-9f08-341808be2c12.trayapp.io/matcher.lyrics.get?q_track=" +
    songName +
    "&q_artist=" +
    artistName +
    "&apikey=154536b7fb7d5ecc50beb74e5cb895a8";
  console.log(songName);
  console.log(artistName);
  console.log(url);
  // requesting data from api server
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // filtering to the lyrics_body portion of the data
      let songLyrics = result.message.body.lyrics.lyrics_body;
      console.log(typeof songLyrics);
      console.log(songLyrics.split("*******")[0]);
      // splitting un-needed text from lyrics
      lyrics.textContent = songLyrics.split("*******")[0];
      // appending the newly created element to the page.
      song.appendChild(lyrics);
      console.log(result);
    })
    .catch((error) => console.log("error", error));
  // setting the first letter in the song/artist names to capital
  let capitalArtist = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  let capitalSong = songName.charAt(0).toUpperCase() + songName.slice(1);
  // displaying the currently searched song
  currentSongDisplay.innerHTML = capitalArtist + " - " + capitalSong;
  // setting the user input into local storage
  previouslySearched.push({ capitalArtist, capitalSong });
  window.localStorage.setItem(
    "Last Searched",
    JSON.stringify(previouslySearched)
  );
}
//LYRIC API END

$(".clear-history").on("click", function(){
  localStorage.clear();
  location.reload();
  console.log("history cleared & page refreshed");
});

// search button functionality
$("#search-song").on("click", function () {
  // value given by the input boxes on the page
  var songName = document.getElementById("songTitle").value;
  var artistName = document.getElementById("artist-name").value;
  songLyric(songName, artistName);
  displayLastSong();
});

// TRANSLATOR API START
let fetchButton = document.querySelector("#searchBtn");
let apiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY";
const translateBtn = document.querySelector(".buttonT");
const selectTag = document.querySelectorAll("select");

//sort country codes alphabetically
let sortable = [];
for (var country_code in countries) {
  sortable.push([country_code, countries[country_code]]);
}

sortable.sort(function (a, b) {
  return a[1].localeCompare(b[1]);
});
console.log(JSON.stringify(sortable));

// selectTag.forEach(selectTag => {
//     for (const country_code in countries) {
//         //console.log(countries[country_code])
//         let option =`<option value="${country_code}">${countries[country_code]}</option>`
//         selectTag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
//     }
//  });

selectTag.forEach((selectTag) => {
  for (var i = 0; i < sortable.length; i++) {
    //console.log(countries[country_code])
    let option = `<option value="${sortable[i][0]}">${sortable[i][1]}</option>`;
    selectTag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
  }
});

function translateText() {
  var language = document.querySelector(".form-select").value;
  console.log(language);
  var text = document.querySelector(".description").innerText;
  // console.log("LOOK HERE", text)
  //filter out empty space
  text = text.split("\n").filter((s) => s !== "");
  // console.log("LOOK HERE", text)
  var url =
    "https://translation.googleapis.com/language/translate/v2?" +
    "format=text&target=" +
    language +
    "&key=AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY";

  fetch(url, {
    body: JSON.stringify({
      q: text,
    }),
    method: "post",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var translatedText = data.data.translations.map((e) => e.translatedText);
      // debugger;
      // var decodedText = decodeURI(decodeHtml(translatedText));
      // console.log("the decoded text is", decodedText);
      // var translatedLines = JSON.parse(decodedText);
      document.querySelector(".textTranslation").innerText =
        translatedText.join("\n");
    });
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
}

translateBtn.addEventListener("click", translateText);
