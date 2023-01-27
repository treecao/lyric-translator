
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


// 	const selectTag = document.querySelectorAll("select");

// selectTag.forEach(selectTag => {
// 	console.log(selectTag);
// });


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




// let apiKey = 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f'

// function getApi(){
// 	var requestUrl = "google-translate1.p.rapidapi.com"
// }

