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



// var settings = {
// 	"url": "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=save%20me&q_artist=avenged%20sevenfold&apikey=154536b7fb7d5ecc50beb74e5cb895a8",
// 	"method": "GET",
// 	"timeout": 0,
// 	"headers": {
// 		mode: "no-cors",
// 	  "apikey": "154536b7fb7d5ecc50beb74e5cb895a8",
	  
// 	},
//   };
  
//   $.ajax(settings).done(function (response) {
// 	console.log(response);
//   });
// let apiKey = 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f'

// function getApi(){
// 	var requestUrl = "google-translate1.p.rapidapi.com"
// }

