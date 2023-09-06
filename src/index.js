import { fetcher } from "./js/fetcher";

const formSubmitHandler = () => {
    event.preventDefault();
    const input = document.getElementById("input");
    fetcher(input.value);
    input.value = null;
};

window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmitHandler);
});