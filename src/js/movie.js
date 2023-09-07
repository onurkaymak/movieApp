export default class Movie {
    static findMovieByName(movieName) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}`;
            request.addEventListener("loadend", function () {
                const response = JSON.parse(this.responseText);

                if (this.status === 200) {
                    resolve(response);
                } else {
                    reject([response, this]);
                }
            });
            request.open("GET", url, true);
            request.send();
        });
    }
}