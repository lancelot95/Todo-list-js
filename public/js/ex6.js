let num1 = document.querySelector(".un ");
let num2 = document.querySelector(".deux");
let btnEgal = document.querySelector(".calcul");
let resultat1 = document.querySelector(".resultat")

function addition() {


    let nombre1 = parseInt(num1.value);
    let nombre2 = parseInt(num2.value);

    let resultat = nombre1 + nombre2;

    resultat1.textContent = resultat;
}

btnEgal.addEventListener('click', addition);

