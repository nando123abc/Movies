console.log('Hello');
sendAPIRequest();
async function sendAPIRequest(){
let apikey = '37093d94a7918a4064e5b65bc9524875';
// let response = await fetch('https://api.themoviedb.org/3/movie/3116?api_key='+apikey);
// let data = await response.json();

let url1='https://api.themoviedb.org/3/movie/3116?api_key='+apikey;
let url2='https://api.themoviedb.org/3/movie/550?api_key='+apikey;

Promise.all([
  fetch(url1).then(value => value.json()),
  fetch(url2).then(value => value.json())
  ])
  .then((value) => {
     console.log(value)
    //json response
  })
  .catch((err) => {
      console.log(err);
  });

// ApiLoaded(data);
}

function ApiLoaded(data){
  var row = document.createElement('tr');
  row.setAttribute('class', 'row');
  row.setAttribute('id', 'row');
  document.querySelector("#MainTable").appendChild(row);
  document.querySelector("#row").innerHTML += "<td> "+data.original_title+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.release_date+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.overview+"</td>";
  document.querySelector("#row").innerHTML += "<td> "+data.vote_average+"</td>";
  document.querySelector("#row").innerHTML += "<td> <img src=https://image.tmdb.org/t/p/w500"+data.poster_path+" alt="+data.original_title+"></td>";
  console.log(data);
}

Promise.all([
  fetch(url1).then(value => value.json()),
  fetch(url2).then(value => value.json())
  ])
  .then((value) => {
     console.log(value)
    //json response
  })
  .catch((err) => {
      console.log(err);
  });