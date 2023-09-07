import Movie from "./js/movie";
import { printResults } from "./js/printResults";

function printError(error) {
    document.getElementById("error-message").innerText = error[0].Error;
    document.getElementById("error-title").innerText = error[1].status;
}

const formSubmitHandler = (event) => {
    event.preventDefault();
    const movieName = document.getElementById("input").value;
    document.querySelector('#input').value = null;

    let promise = Movie.findMovieByName(movieName);

    promise.then(function (data) {
        printResults(data);
    }, function (errorDataArr) {
        printError(errorDataArr);
    });
};

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmitHandler);
});