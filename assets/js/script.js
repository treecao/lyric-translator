// // genius api keys --- 
// // client secret - 6TN71dOvz3RALlGNElYVxN8fcWs9EugrZmw6BlgP7yBPFA9hSGhH2DEAKuAFWRKFVUXlG_872zKAYznnWDbr6Q
// // client id - SqLiLKN6DJazosWp9rDJGFMgnI8vdP4Gv_NuyII3yv71Uys3BHPSjbkNve9iy0Bb



// let apiKey = "154536b7fb7d5ecc50beb74e5cb895a8";
// function getApi() {
// 	var requestUrl = "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao&apikey=154536b7fb7d5ecc50beb74e5cb895a8";
// 	fetch(requestUrl, {
// 		mode: "no-cors" 
// 	})

// 	.then(function(response) {
// 		console.log(response.json);
// 	})
// }
function getApi(){
  fetch("https://93b9b720-f4e9-47a8-9f08-341808be2c12.trayapp.io/matcher.lyrics.get?q_track=save%20me&q_artist=avenged%20sevenfold&apikey=154536b7fb7d5ecc50beb74e5cb895a8")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  $("description")
};

$("button").on("click", getApi);

let lyricApiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"









// beginning of lyric api integration
let apiKey = "154536b7fb7d5ecc50beb74e5cb895a8";
let fetchButton = document.querySelector("#searchBtn")

function getLyric(songName) {
    // let requestUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${songName}&apikey=${apiKey}`;
    // &q_artist=${artist}
    let requestUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao
    &apikey=${apiKey}`;

    fetch(requestUrl, {
        mode:"no-cors"
    })
        .then(function (response) {
            console.log(response)
            return response.json;
        })
        .then(console.log)
        .catch(console.error)
}

fetchButton.addEventListener('click', function(){
    const songTitle = document.querySelector(".songTitle");
    let song = songTitle.value;
    
});
getLyric()


//commenting out full JS file --WIP
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f',
// 		'X-RapidAPI-Host': 'songmeanings.p.rapidapi.com'
// 	}
// };

// fetch('https://songmeanings.p.rapidapi.com/?key=c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f&sm_lid=0&lyric_title=promise&artist_name=romeo%20santos&format=json&method=lyrics.get', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
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

// var myHeaders = new Headers();
// myHeaders.append("apikey", "154536b7fb7d5ecc50beb74e5cb895a8");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow', mode:"no-cors"
// };


// fetch("http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=save%20me&q_artist=avenged%20sevenfold&apikey=154536b7fb7d5ecc50beb74e5cb895a8", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


        document.querySelector('.textTranslation').innerText = data.data.translations[0].translatedText
    })
}


translateBtn.addEventListener("click", translateText);



// let apiKey = 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f'

// function getApi(){
// 	var requestUrl = "google-translate1.p.rapidapi.com"
// }

