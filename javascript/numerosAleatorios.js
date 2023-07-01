let valorMinimo= document.getElementById('valorMinimo')
let valorMaximo= document.getElementById('valorMaximo')
let generar= document.getElementById('generar')
let resultado= document.getElementById('resultado')

generar.addEventListener('click', ()=>{generadorNumerosAleatorios(valorMinimo.value, valorMaximo.value)})

function generadorNumerosAleatorios(min, max) {
  resultado.value = "."
  setTimeout(
    ()=>{
      resultado.value = ".."},
  350)
  setTimeout(
    ()=>{
      resultado.value = "..."},
  650)
  setTimeout(
    ()=>{
      min = Math.ceil(min);
    max = Math.floor(max);
    resultado.value= Math.floor(Math.random() * (max - min) + min)},
  1000)
  }
