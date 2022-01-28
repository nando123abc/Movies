console.log('Hello');
sendAPIRequest();
async function sendAPIRequest(){
let apikey = '37093d94a7918a4064e5b65bc9524875';
let requestURL = 'https://api.themoviedb.org/3/movie/3116?api_key='+apikey;

let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key='+apikey);
let data = await response.json();

ApiLoaded(data);
}

function ApiLoaded(data){
  
  document.querySelector("#MainTable").innerHTML += data.original_title;
  console.log(data);
}