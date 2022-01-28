console.log('Hello');
sendAPIRequest();
async function sendAPIRequest(){
let apikey = '37093d94a7918a4064e5b65bc9524875';
let response = await fetch('https://api.themoviedb.org/3116/movie/550?api_key='+apikey);
let data = await response.json();

ApiLoaded(data);
}

function ApiLoaded(data){
  
  document.querySelector("#MainTable").innerHTML += data.original_title;
  
  var row = document.createElement('tr');
  row.setAttribute('class', 'row');
  row.setAttribute('id', 'row');
  document.querySelector("#MainTable").appendChild(row);
  document.querySelector("#row").innerHTML += "<th> "+data.original_title+"</th>";
  document.querySelector("#row").innerHTML += "<th> "+data.release_date+"</th>";
  document.querySelector("#row").innerHTML += "<th> "+data.overview+"</th>";
  document.querySelector("#row").innerHTML += "<th> "+data.vote_average+"</th>";
  document.querySelector("#row").innerHTML += "<th> <img src=https://image.tmdb.org/t/p/w500"+data.poster_path+" alt="+data.original_title+"></th>";
  console.log(data);
}