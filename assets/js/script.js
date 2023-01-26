// beginning of lyric api integration
let apiKey = "154536b7fb7d5ecc50beb74e5cb895a8";
let fetchButton = document.querySelector("#searchBtn")

// function getLyric(songName) {
//     // let requestUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${songName}&apikey=${apiKey}`;
//     // &q_artist=${artist}
//     let requestUrl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao
//     &apikey=${apiKey}`;}
   
    var myHeaders = new Headers();
    myHeaders.append("apikey", "154536b7fb7d5ecc50beb74e5cb895a8");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow', mode:"no-cors"
    };
    
    fetch("http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=save%20me&q_artist=avenged%20sevenfold&apikey=154536b7fb7d5ecc50beb74e5cb895a8", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

//     fetch(requestUrl, {
//         mode:"no-cors"
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         // console.log(data)
// }

// fetchButton.addEventListener('click', function(){
//     const songTitle = document.querySelector(".songTitle");
//     let song = songTitle.value;
//     getLyric(song)
// });