export const printResults = (data) => {
    const title = document.getElementById("title");
    const releasedYear = document.getElementById("released-year");
    const rate = document.getElementById("rate");
    const genre = document.getElementById("genre");
    const writer = document.getElementById("writer");
    const actors = document.getElementById("actors");
    const country = document.getElementById("country");
    const awards = document.getElementById("awards");

    title.innerText = data.Title;
    releasedYear.innerText = data.Year;
    rate.innerText = data.Rated;
    genre.innerText = data.Genre;
    writer.innerText = data.Writer;
    actors.innerText = data.Actors;
    country.innerText = data.Country;
    awards.innerText = data.Awards;

};