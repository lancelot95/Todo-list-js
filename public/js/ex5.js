function newBtn(){
   
    let img= document.createElement("img");
    img.setAttribute("src", "../../img/200px-Earth_Dragon_Egg.png");
    document.querySelector(".zaki").appendChild(img);
}

let btn = document.querySelector('.zak')

btn.addEventListener('click', newBtn)