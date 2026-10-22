"use strict";
//const movieDataLS = fetch("movies.json")
//.then(response => response.json());
// above would've worked just fine, but the aysnc function worked a bit better
//.then(data => showInfo(data));
//const movienData = movieDataLS.json()
//const movieStringData = JSON.stringify(movieData);
//const movies = JSON.parse(movieStringData);
// my poor attempts at trying to access the .json file
const movieList = document.querySelector('#movie-list');
/**
 * Get the data from the .json file, passes each .json object into addMovie() and ultimately displays them on the webpage
 * Displays Movies
 */
async function displayMovies() {
    const response = await fetch("movies.json");
    const movies = await response.json();
    movies.forEach(addMovie);
    //addMovie(movies[0]);
}
/**
 * Adds moive .json objects to the movie-list article element on the main page
 */
function addMovie(movie) {
    if (!movieList)
        return;
    movieList.innerHTML += `
        <article class="movie">
            <h2>${movie.title}</h2>
            <img src=${movie.image} alt="${movie.imageAlt}">
            <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
            <p><strong>Recommended Age:</strong> ${movie.recommendedAge}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> <span aria-label="${movie.ratingAlt}">${movie.rating}</span></p>
            <p id='desc'>${movie.description}</p>
        </article>`;
    //movieList?.innerHTML+= exmovie;
}
displayMovies();
