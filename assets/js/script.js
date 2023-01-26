//commenting out full JS file --WIP
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f',
// 		'X-RapidAPI-Host': 'songmeanings.p.rapidapi.com'
// 	}
// };

// // genius api keys --- 
// // client secret - 6TN71dOvz3RALlGNElYVxN8fcWs9EugrZmw6BlgP7yBPFA9hSGhH2DEAKuAFWRKFVUXlG_872zKAYznnWDbr6Q
// // client id - SqLiLKN6DJazosWp9rDJGFMgnI8vdP4Gv_NuyII3yv71Uys3BHPSjbkNve9iy0Bb

// fetch('https://songmeanings.p.rapidapi.com/?key=c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f&sm_lid=0&lyric_title=promise&artist_name=romeo%20santos&format=json&method=lyrics.get', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'abda84d1f8msh4bb923c1351dbaap1eb66fjsnc8953d95392f',
// 		'X-RapidAPI-Host': 'sridurgayadav-chart-lyrics-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// 	console.log(fetch);

// const api_url = "http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP";

// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);



// console.log(api_url);

let apiKey = "154536b7fb7d5ecc50beb74e5cb895a8";
function getApi() {
	var requestUrl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&appid=154536b7fb7d5ecc50beb74e5cb895a8";
	fetch(requestUrl, {
		mode: "no-cors" 
	})

	.then(function(response) {
		console.log(response)
	})
	.then(data => console.log(data))

}

// 	.then(function(data) {
// 		var songName = document.createElement("h1");
// 		songName.textContent = 
// 	})

// 	const selectTag = document.querySelectorAll("select");

// selectTag.forEach(selectTag => {
// 	console.log(selectTag);
// });






// let apiKey = 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f'

// function getApi(){
// 	var requestUrl = "google-translate1.p.rapidapi.com"
// }
