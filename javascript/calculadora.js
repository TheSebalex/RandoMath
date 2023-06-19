//Variables

let borrar= document.querySelector('#delete');
let input = document.querySelector('#input');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let cinco = document.querySelector('#cinco');
let seis = document.querySelector('#seis');
let siete = document.querySelector('#siete');
let ocho = document.querySelector('#ocho');
let nueve = document.querySelector('#nueve');
let cero = document.querySelector('#cero');
let suma = document.querySelector('#sumar');
let resta = document.querySelector('#restar');
let multiplicacion = document.querySelector('#multiplicar');
let division = document.querySelector('#dividir');
let coma = document.querySelector('#coma');
let igual = document.querySelector('#igual');
let clear = document.querySelector('#clear');
let raiz = document.querySelector('#raiz');
let potencia = document.querySelector('#potencia');
let numeroElevado

//Eventos
uno.addEventListener('click', () =>{input.value +=1});
dos.addEventListener('click', () =>{input.value +=2});
tres.addEventListener('click', () =>{input.value +=3});
cuatro.addEventListener('click', () =>{input.value +=4});
cinco.addEventListener('click', () =>{input.value +=5});
seis.addEventListener('click', () =>{input.value +=6});
siete.addEventListener('click', () =>{input.value +=7});
ocho.addEventListener('click', () =>{input.value +=8});
nueve.addEventListener('click', () =>{input.value +=9});
cero.addEventListener('click', () =>{input.value +=0});
coma.addEventListener('click', () =>{if(input.value.slice(-2) !== ".."){input.value +="."}});

//Eventos > Operaciones y Condicionales
suma.addEventListener('click', () =>{if(input.value.slice(-1) !== "+"){input.value +="+"}});

resta.addEventListener('click', () =>{if(input.value.slice(-1) !== "-"){input.value +="-"}});

multiplicacion.addEventListener('click', () =>{if(input.value.slice(-1) !== "*"){input.value +="*"}});

division.addEventListener('click', () =>{if(input.value.slice(-1) !== "/"){input.value +="/"}});

raiz.addEventListener('click', () =>{
    resultado = eval(input.value);
    input.value = resultado
    input.value= Math.sqrt(resultado);
});

potencia.addEventListener('click', () =>{if(input.value.slice(-2) !== "**"){input.value +="**"}});

igual.addEventListener('click', () =>{
    resultado = eval(input.value);
    input.value = resultado;});

// Limpiar y Borrar
clear.addEventListener('click', () => {input.value=""});

borrar.addEventListener('click', () => {
    input.value= input.value.slice(0, -1)
});


