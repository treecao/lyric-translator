// // genius api keys --- 
// // client secret - 6TN71dOvz3RALlGNElYVxN8fcWs9EugrZmw6BlgP7yBPFA9hSGhH2DEAKuAFWRKFVUXlG_872zKAYznnWDbr6Q
// // client id - SqLiLKN6DJazosWp9rDJGFMgnI8vdP4Gv_NuyII3yv71Uys3BHPSjbkNve9iy0Bb

// beginning of lyric api integration
const song = document.querySelector(".description");
const lyrics = document.createElement("p")

function songLyric() {
  var songName = document.getElementById("songTitle").value;
  var artistName = document.getElementById("artist-name").value;
  var url = "https://93b9b720-f4e9-47a8-9f08-341808be2c12.trayapp.io/matcher.lyrics.get?q_track=" + songName + "&q_artist=" + artistName + "&apikey=154536b7fb7d5ecc50beb74e5cb895a8";
  console.log(songName);
  console.log(artistName);
  console.log(url);

  fetch(url)
  .then(response => response.json())
  .then((result) => {
    let songLyrics = result.message.body.lyrics.lyrics_body
    console.log(typeof songLyrics)
    console.log(songLyrics.split("*******")[0])
    lyrics.textContent = songLyrics.split("*******")[0]
    song.appendChild(lyrics);
    console.log(result.message.body.lyrics.lyrics_body)
  })
  .catch(error => console.log('error', error));

  window.localStorage.setItem(songName, artistName)
};

$("#search-song").on("click", songLyric)

// translator api code begins here
let fetchButton = document.querySelector("#searchBtn")

let apiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"
const translateBtn = document.querySelector(".buttonT")
const selectTag = document.querySelectorAll("select");

//sort country codes alphabetically
let sortable = [];
for (var country_code in countries) {
    sortable.push([country_code, countries[country_code]]);
}

sortable.sort(function(a, b) {
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

selectTag.forEach(selectTag => { 
  for (var i=0; i < sortable.length; i++) {
      //console.log(countries[country_code])
      let option =`<option value="${sortable[i][0]}">${sortable[i][1]}</option>`
      selectTag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
  }
});

function translateText() {
    var language = document.querySelector('.form-select').value;
    console.log(language);

    var text = document.querySelector('.description').innerText;
    console.log("LOOK HERE", text)
    //filter out empty space 
    text = text.split("\n").filter(s => s !== ""); 
    console.log("LOOK HERE", text)
    
    var url = "https://translation.googleapis.com/language/translate/v2?" + "format=text&target=" + language + "&key=AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"

    fetch(url, {
      body:JSON.stringify({
        q:text}), 
      method:"post"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
        var translatedText = data.data.translations.map(e => e.translatedText);
        // debugger;
        // var decodedText = decodeURI(decodeHtml(translatedText));
        // console.log("the decoded text is", decodedText);
        // var translatedLines = JSON.parse(decodedText);
        
        document.querySelector('.textTranslation').innerText = translatedText.join("\n");
      });
      function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
}


translateBtn.addEventListener("click", translateText);