import Movie from "./js/movie";
import { printResults } from "./js/printResults";
import "./css/styles.css";

function printError(error) {
    document.getElementById("error-message").innerText = error[0].Error;
    document.getElementById("error-title").innerText = error[1].status;
    document.getElementsByClassName("container-error")[0].removeAttribute("class", "hidden");
}

const formSubmitHandler = (event) => {
    event.preventDefault();
    const input = document.getElementById("input");

    input.addEventListener("input", function () {
        document.getElementById("container-result").setAttribute("class", "hidden");
    });

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