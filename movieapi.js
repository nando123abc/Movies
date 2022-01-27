let apikey = '37093d94a7918a4064e5b65bc9524875';
let requestURL = 'https://api.themoviedb.org/3/movie/550?api_key='+apikey;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key='+apikey);
let data = await response.json();

console.log(data);

request.onload = function() {
  const superHeroes = request.response;
  console.log(superHeroes);
}