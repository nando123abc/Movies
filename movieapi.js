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
     ApiLoaded(value);
    //json response
  })
  .catch((err) => {
      console.log(err);
  });
}

function ApiLoaded(data){
  
  for (var i = 0; i <= data.length-1; i++){
    var row = document.createElement('tr');
    row.setAttribute('class', 'row'+i);
    row.setAttribute('id', 'row'+i);
    document.querySelector("#MainTable").appendChild(row);
    document.querySelector("#row"+i).innerHTML += "<td> <img src=https://image.tmdb.org/t/p/w500"+data[i].poster_path+" alt="+data[i].original_title+" height=250px></td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].original_title+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].release_date+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].overview+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].vote_average+"</td>";
  }
}