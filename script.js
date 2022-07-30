const numbers = document.querySelectorAll(".rating-numbers span");
const submit = document.querySelector(".rating-btn");
const rating = document.querySelector(".rating");
const selected_nbr = document.querySelector("#selected");
let selected;

numbers.forEach((num) => {
    num.addEventListener("click", function () {
        unselectAll();
        this.classList.add("selected");
        selected = this.dataset.number;
    });
});

submit.addEventListener("click", () => {
    if (!selected) return;
    selected_nbr.textContent = selected;
    rating.classList.add("submited");
});

function unselectAll() {
    numbers.forEach((num) => {
        num.classList.remove("selected");
    });
}
