// Variables
let numero1= document.querySelector('#a');
let numero2= document.querySelector('#b');
let numero3= document.querySelector('#c');
let resultado= document.querySelector('#resultado');
let resolverBoton= document.querySelector('#resolver');

//Funcion principal
let funcionResolver= function(a, b, c){
    let bElevado= Math.pow(b, 2);
    let elementoRaiz= bElevado - 4*a*c;
    let raiz= Math.sqrt(elementoRaiz);
    let sumando= -b + raiz;
    let restando= -b - raiz;
    let dividendo= 2*a;
    let resultado1= sumando / dividendo;
    let resultado2= restando / dividendo;

if(isNaN(raiz)) {
    resultado1= 'X es compleja o imaginario';
    resultado.value= resultado1;
} else {
    resultado.value= `x1= ${resultado1}  y  x2= ${resultado2}`;
}}

resolverBoton.addEventListener('click', () => {funcionResolver(numero1.value, numero2.value, numero3.value)});