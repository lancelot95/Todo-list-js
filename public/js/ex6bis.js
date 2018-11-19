 var nombre0 = document.querySelector(".chiffre0");
 var nombre1 = document.querySelector(".chiffre1");
 var nombre2 = document.querySelector(".chiffre2");
 var nombre3 = document.querySelector(".chiffre3");
 var nombre4 = document.querySelector(".chiffre4");
 var nombre5 = document.querySelector(".chiffre5");
 var nombre6 = document.querySelector(".chiffre6");
 var nombre7 = document.querySelector(".chiffre7");
 var nombre8 = document.querySelector(".chiffre8");
 var nombre9 = document.querySelector(".chiffre9");
 var plus = document.querySelector(".plus");
 var moins = document.querySelector(".moins");
 var fois = document.querySelector(".fois");
 var egal = document.querySelector(".egal")
 var efface = document.querySelector(".c");
 var diviser= document.querySelector(".diviser");
 let operateur = "";
 let elem1 = "";
 let elem2 = "";
 let result = "";
 let index;

 let e = document.getElementById("lancelot");

 nombre0.addEventListener("click", function () {
     e.value += "0";
 })

 nombre1.addEventListener("click", function () {
     e.value += "1";
 })



 nombre2.addEventListener("click", function () {
     e.value += "2";
 })



 nombre3.addEventListener("click", function () {
     e.value += "3";
 })


 nombre4.addEventListener("click", function () {
     e.value += "4";
 })


 nombre5.addEventListener("click", function () {
     e.value += "5";
 })


 nombre6.addEventListener("click", function () {
     e.value += "6";
 })

 nombre7.addEventListener("click", function () {
     e.value += "7";
 })


 nombre8.addEventListener("click", function () {
     e.value += "8";
 })

 nombre9.addEventListener("click", function () {
     e.value += "9";
 })



 plus.addEventListener("click", function () {
     operateur = "+";
     elem1 = e.value;
     e.value += operateur;
 });
 moins.addEventListener("click", function () {
     operateur = "-";
     elem1 = e.value;
     e.value += operateur;
 });
 fois.addEventListener("click", function () {
     operateur = "*";
     elem1 = e.value;
     e.value += operateur;
 });
 diviser.addEventListener("click", function () {
     operateur = "/";
     elem1 = e.value;
     e.value += operateur;
 });


 egal.addEventListener("click", function () {
     switch (operateur) {
         case "+":
             index = e.value.indexOf("+") + 1;
             elem2 = e.value.substring(index);
             result = Number(elem1) + Number(elem2);
             e.value = result;
             break;
         case "-":
             index = e.value.indexOf("-") + 1;
             elem2 = e.value.substring(index);
             result = Number(elem1) - Number(elem2);
             e.value = result;
             break;
         case "*":
             index = e.value.indexOf("*") + 1;
             elem2 = e.value.substring(index);
             result = Number(elem1) * Number(elem2);
             e.value = result;
             break;
         case "/":
             index = e.value.indexOf("/") + 1;
             elem2 = e.value.substring(index);
             result = Number(elem1) / Number(elem2);
             e.value = result;
             break;

     }
 });



 function c() {
     e.value = "";
 }
 efface.addEventListener("click", c)