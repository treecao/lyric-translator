let apiKey = "AIzaSyDvziRZmcbKKXHY2F8MOmbO68tHiSo0fMY"









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

        document.querySelector('.textTranslation').innerText = data.data.translations[0].translatedText
    })
}


translateBtn.addEventListener("click", translateText);

// let apiKey = 'c6f85fcc6bmsh14916e6daadafd9p1db2b9jsnf63ac98ea77f'

// function getApi(){
// 	var requestUrl = "google-translate1.p.rapidapi.com"
// }
