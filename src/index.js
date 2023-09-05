import { fetcher } from "./js/business";

const formSubmitHandler = () => {
    event.preventDefault();
    const input = document.getElementById("input").value;
    fetcher(input);
};

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmitHandler);
});