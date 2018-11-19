let inp = document.querySelector('.i');

function salut() {
    i.classList.remove("hidden");
}

let sami = document.querySelector('.sami');
sami.addEventListener('click', go);
let input = document.querySelector("input");
let span = document.querySelector("h2 span");

function go() {
    span.innerText = input.value

}