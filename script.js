function searchMovie(){

let movieName = document.getElementById("movieInput").value;

let url = "https://www.omdbapi.com/?apikey=trilogy&t=" + movieName;

fetch(url)

.then(function(response){
return response.json();
})

.then(function(data){

console.log(data);

if(data.Response === "False"){
document.getElementById("movieDetails").innerHTML = "Movie not found";
return;
}

let output = `
<h2>${data.Title}</h2>

<img src="${data.Poster}">

<p><b>Release Date:</b> ${data.Released}</p>

<p><b>Writer:</b> ${data.Writer}</p>

<p><b>Actors:</b> ${data.Actors}</p>

<p><b>Language:</b> ${data.Language}</p>

<p><b>Country:</b> ${data.Country}</p>

<p><b>Awards:</b> ${data.Awards}</p>

<p><b>IMDb Rating:</b> ${data.imdbRating}</p>
`;

document.getElementById("movieDetails").innerHTML = output;

})

.catch(function(){
document.getElementById("movieDetails").innerHTML = "Error loading movie";
});

}