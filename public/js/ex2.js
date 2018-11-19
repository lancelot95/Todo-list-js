// var x = document.querySelectorAll('a');
// x[1].addEventListener('click', refresh);

// function refresh() {
//     event.preventDefault();
//     document.querySelector('.modifier').style.display = "none";
//     document.querySelector('.ecouteur').style.display = "block";
// }


// var x = document.querySelectorAll('a');
// x[1].addEventListener('click', refresh);

// function refresh() {
//     event.preventDefault();
//     document.querySelector('.modifier').style.display = "none";
//     document.querySelector('.welcome').style.display = "block";
// }

let tabs = document.querySelectorAll('.container .row .col-3 a');
let panels = document.querySelectorAll('.panels section');

for (let i = 0; i < tabs.length; i++) {
   tabs[i].addEventListener('click', () => {
       event.preventDefault();
       for (let j = 0; j < tabs.length; j++) {
           tabs[j].parentElement.classList.remove("active");
           panels[j].classList.remove("visible");
       }
       tabs[i].parentElement.classList.add("active");
       panels[i].classList.add("visible");
   })
}