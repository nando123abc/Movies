console.log('Hello Updated v1.0');
sendAPIRequest();
async function sendAPIRequest(){
let apikey = '37093d94a7918a4064e5b65bc9524875';
// let response = await fetch('https://api.themoviedb.org/3/movie/3116?api_key='+apikey);
// let data = await response.json();

let url1='https://api.themoviedb.org/3/movie/3116?api_key='+apikey;//midnight cowboy
let url2='https://api.themoviedb.org/3/movie/550?api_key='+apikey;//fight clubsaving
let url3='https://api.themoviedb.org/3/movie/857?api_key='+apikey;//Saving Private Ryan
let url4='https://api.themoviedb.org/3/movie/157336?api_key='+apikey;//Interstellar
let url5='https://api.themoviedb.org/3/movie/419704?api_key='+apikey;//Ad astra
let url6='https://api.themoviedb.org/3/movie/324857?api_key='+apikey;//Spider-Man: Into The Spider-Verse
let url7='https://api.themoviedb.org/3/movie/13398?api_key='+apikey;//Tokyo Godfathers
let url8='https://api.themoviedb.org/3/movie/129?api_key='+apikey;//Spirited Away
let url9='https://api.themoviedb.org/3/movie/530915?api_key='+apikey;//1917
let url10='https://api.themoviedb.org/3/movie/10494?api_key='+apikey;//Perfect Blue
let url11='https://api.themoviedb.org/3/movie/76341?api_key='+apikey;//Mad Max:Fury Road
let url12='https://api.themoviedb.org/3/movie/1949?api_key='+apikey;//Zodiac
let url13='https://api.themoviedb.org/3/movie/24?api_key='+apikey;//Kill Bill Vol.1 & 2
let url14='https://api.themoviedb.org/3/movie/335984?api_key='+apikey;//Blade Runner 2049
let url15='https://api.themoviedb.org/3/movie/4512?api_key='+apikey;//The Assassination of Jesse James by the Coward Robert Ford
let url16='https://api.themoviedb.org/3/movie/496243?api_key='+apikey;//Parasite
let url17='https://api.themoviedb.org/3/movie/505192?api_key='+apikey;//Shoplifters
let url18='https://api.themoviedb.org/3/movie/406?api_key='+apikey;//La haine
let url19='https://api.themoviedb.org/3/movie/598?api_key='+apikey;//City of God
let url20='https://api.themoviedb.org/3/movie/290098?api_key='+apikey;//The Handmaiden
let url21='https://api.themoviedb.org/3/movie/7345?api_key='+apikey;//There Will Be Blood
let url22='https://api.themoviedb.org/3/movie/14337?api_key='+apikey;//Primer

Promise.all([
  fetch(url1).then(value => value.json()),
  fetch(url2).then(value => value.json()),
  fetch(url3).then(value => value.json()),
  fetch(url4).then(value => value.json()),
  fetch(url5).then(value => value.json()),
  fetch(url6).then(value => value.json()),
  fetch(url7).then(value => value.json()),
  fetch(url8).then(value => value.json()),
  fetch(url9).then(value => value.json()),
  fetch(url10).then(value => value.json()),
  fetch(url11).then(value => value.json()),
  fetch(url12).then(value => value.json()),
  fetch(url13).then(value => value.json()),
  fetch(url14).then(value => value.json()),
  fetch(url15).then(value => value.json()),
  fetch(url16).then(value => value.json()),
  fetch(url17).then(value => value.json()),
  fetch(url18).then(value => value.json()),
  fetch(url19).then(value => value.json()),
  fetch(url20).then(value => value.json()),
  fetch(url21).then(value => value.json()),
  fetch(url22).then(value => value.json())
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
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].title+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].release_date+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> "+data[i].tagline+"<br><br>Description:" +data[i].overview+"</td>";
    document.querySelector("#row"+i).innerHTML += "<td> <div class='fas fa-star'></div> Rating:" +data[i].vote_average+" <br>Voters:"+data[i].vote_count+"<br>Popularity:"+data[i].popularity+"</td>";

  }
}