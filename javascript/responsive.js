let menu = document.getElementsByClassName("menu")
let img = document.getElementById("icono")
let logo = document.getElementById("logo")
let deployUl = document.querySelector(".listaResponsive")
let main = document.querySelector("main")
let ex = document.getElementById("ex")

window.onresize = resize 
window.onload = resize
img.onclick = deploy
main.onclick = nodeploy
ex.onclick = nodeploy


function resize(){
    if(window.innerWidth < 1080){
        img.classList.remove("icono");
        for(let i= 0; i < menu.length; i++){
            menu[i].classList.add("esconderOpciones")
        }
        logo.classList.add("logoResponsive");       
    } else {
        img.classList.add("icono")
        for(let i= 0; i < menu.length; i++){
            menu[i].classList.remove("esconderOpciones")
        }
        logo.classList.remove("logoResponsive"); 
    }
} 

function deploy(){
    deployUl.classList.add("desplegar")
}

function nodeploy(){
    deployUl.classList.remove("desplegar")
}
