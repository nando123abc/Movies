console.log('Hello');
sendAPIRequest();
async function sendAPIRequest(){
let apikey = '37093d94a7918a4064e5b65bc9524875';
let response = await fetch('https://api.themoviedb.org/3/movie/3116?api_key='+apikey);
let data = await response.json();

ApiLoaded(data);
}

function ApiLoaded(data){
  
  document.querySelector("#MainTable").innerHTML += data.original_title;
  
  var row = document.createElement('tr');
  row.setAttribute('class', 'row');
  row.setAttribute('id', 'row');
  document.querySelector("#MainTable").appendChild(row);
  document.querySelector("#row").innerHTML += "<td> "+data.original_title+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.release_date+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.overview+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.vote_average+"</td>";
  document.querySelector("#row").innerHTML += "<img src=https://image.tmdb.org/t/p/w500"+data.poster_path+" alt="+data.original_title+">";
  console.log(data);
}