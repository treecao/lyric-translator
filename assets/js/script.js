// // genius api keys --- 
// // client secret - 6TN71dOvz3RALlGNElYVxN8fcWs9EugrZmw6BlgP7yBPFA9hSGhH2DEAKuAFWRKFVUXlG_872zKAYznnWDbr6Q
// // client id - SqLiLKN6DJazosWp9rDJGFMgnI8vdP4Gv_NuyII3yv71Uys3BHPSjbkNve9iy0Bb

// beginning of lyric api integration

let lyricApiKey = "154536b7fb7d5ecc50beb74e5cb895a8";



function songLyric() {
  // 
  

  var lyrics = document.querySelector(".description").innerHTML; //= body.lyrics.lyrics_body[0].translatedText
  console.log(lyrics);
  var songName = document.getElementById("songTitle").value;
  var artistName = document.getElementById("artist-name").value;
  var url = "https://93b9b720-f4e9-47a8-9f08-341808be2c12.trayapp.io/matcher.lyrics.get?q_track=" + songName + "&q_artist=" + artistName + "&apikey=154536b7fb7d5ecc50beb74e5cb895a8";
  console.log(songName);
  console.log(artistName);
  console.log(url);

  fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

function getApi() {

};
// $("button").on("click", getApi);

// translator api code begins here
let fetchButton = document.querySelector("#searchBtn")

let apiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"
const translateBtn = document.querySelector(".buttonT")
const selectTag = document.querySelectorAll("select");
const song = document.querySelector(".description");

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
    // 
    var url = "https://translation.googleapis.com/language/translate/v2?q=" + text + "&target=" + language + "&key=AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.textTranslation').innerText = data.data.translations[0].translatedText
    })
}


translateBtn.addEventListener("click", translateText);