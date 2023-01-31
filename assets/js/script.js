// beginning of lyric api integration
const song = document.querySelector(".description");
const lyrics = document.createElement("p");
const historyDisplay = document.getElementById("current-song");
// pulling data from local storage and displaying it on the page
function displayLastSong() {
    document.getElementById("history").innerHTML =  "Last Searched: " + localStorage.getItem("Last Searched");
}
displayLastSong();
// main function for api functionality 
function songLyric() {
  // value given by the input boxes on the page
  var songName = document.getElementById("songTitle").value;
  var artistName = document.getElementById("artist-name").value;
  // api url with song/artist names being appended to the url
  var url = "https://93b9b720-f4e9-47a8-9f08-341808be2c12.trayapp.io/matcher.lyrics.get?q_track=" + songName + "&q_artist=" + artistName + "&apikey=154536b7fb7d5ecc50beb74e5cb895a8";
  console.log(songName);
  console.log(artistName);
  console.log(url);
// requesting data from api server
  fetch(url)
  .then(response => response.json())
  .then((result) => {
    // filtering to the lyrics_body portion of the data
    let songLyrics = result.message.body.lyrics.lyrics_body
    console.log(songLyrics.split("*******")[0])
    // splitting un-needed text from lyrics
    lyrics.textContent = songLyrics.split("*******")[0]
    // appending the newly created element to the page. 
    song.appendChild(lyrics);
    console.log(result)
  })
  .catch(error => console.log('error', error));

// setting the first letter in the song/artist names to capital
  let capitalArtist = artistName.charAt(0).toUpperCase() + artistName.slice(1);
  let capitalSong = songName.charAt(0).toUpperCase() + songName.slice(1);
  // displaying the currently searched song
  historyDisplay.innerHTML = capitalArtist + ' - ' + capitalSong;
  // setting the user input into local storage
  window.localStorage.setItem("Last Searched", capitalArtist + " - " + capitalSong);
};

// search button functionality
$("#search-song").on("click", songLyric);



// translator api code begins here
let fetchButton = document.querySelector("#searchBtn")

let apiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"
const translateBtn = document.querySelector(".buttonT")
const selectTag = document.querySelectorAll("select");

selectTag.forEach(selectTag => { 
    for (const country_code in countries) {
        //console.log(countries[country_code])
        let option =`<option value="${country_code}">${countries[country_code]}</option>`
        selectTag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
    }
 });

function translateText() {
    var language = document.querySelector('.form-select').value;
    console.log(language);

    var text = document.querySelector('.description').innerText;
    console.log(text)
    
    var url = "https://translation.googleapis.com/language/translate/v2?q=" + text + "&target=" + language + "&key=AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.textTranslation').innerText = data.data.translations[0].translatedText
    })
}

translateBtn.addEventListener("click", translateText);