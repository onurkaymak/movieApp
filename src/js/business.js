export const fetcher = (movieName) => {
    let request = new XMLHttpRequest();
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}`;

    request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        console.log(response);
    });

    request.open("GET", url, true);
    request.send();
};