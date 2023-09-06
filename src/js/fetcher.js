import { printResults } from "./printResults";

export const fetcher = (movieName) => {
    let promise = new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}`;
        request.addEventListener("loadend", function () {
            const response = JSON.parse(this.responseText);

            if (this.status === 200) {
                resolve(response);
            } else {
                reject(response);
            }
        });

        request.open("GET", url, true);
        request.send();
    });

    promise.then(function (response) {
        printResults(response);
    }, function (errorMessage) {
        console.log(errorMessage);
    });
};

