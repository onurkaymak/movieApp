import Movie from "./movie";

export const printResults = (data) => {
    let movie = new Movie();

    movie.title = data.Title;
    movie.releasedYear = data.Released;
    movie.rate = data.Rated;
    movie.genre = data.Genre;
    movie.writer = data.Writer;
    movie.actors = data.Actors;
    movie.country = data.Country;
    movie.awards = data.Awards;
    movie.poster = data.Poster;

    console.log(movie);

    document.getElementById("title").innerText = movie.title;
    document.getElementById("released-year").innerText = movie.releasedYear;
    document.getElementById("rate").innerText = movie.rate;
    document.getElementById("genre").innerText = movie.genre;
    document.getElementById("writer").innerText = movie.writer;
    document.getElementById("actors").innerText = movie.actors;
    document.getElementById("country").innerText = movie.country;
    document.getElementById("awards").innerText = movie.awards;
    document.getElementById("poster").setAttribute("src", movie.poster);

    document.getElementById("container-result").removeAttribute("class", "hidden");
};
