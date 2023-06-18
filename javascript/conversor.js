//Variables

let selectorDistancia1= document.querySelector('#unidadDistancia1')
let selectorDistancia2= document.querySelector('#unidadDistancia2')
let inputDistanciaN1 = document.querySelector('#inputDistanciaN1')
let inputDistanciaN2 = document.querySelector('#inputDistanciaN2')

let resultadoMetros
let resultadoDistancia

// Eventos

inputDistanciaN1.addEventListener('keyup', convertirDistancia)
selectorDistancia1.addEventListener('change', convertirDistancia)
selectorDistancia2.addEventListener('change', convertirDistancia)


function convertirDistancia(){

    //El primer Switch convierte la unidad del inputDistanciaN1 a Metros desde la unidad seleccionada en el select 1

    switch(selectorDistancia1.value){
        case "1": resultadoMetros= inputDistanciaN1.value * 1000;
        break;
        case "2": resultadoMetros= inputDistanciaN1.value * 100;
        break;
        case "3": resultadoMetros= inputDistanciaN1.value * 10;
        break;
        case "4": resultadoMetros= inputDistanciaN1.value * 1;
        break;
        case "5": resultadoMetros= inputDistanciaN1.value * 0.1;
        break;
        case "6": resultadoMetros= inputDistanciaN1.value * 0.01;
        break;
        case "7": resultadoMetros= inputDistanciaN1.value * 0.001;
        break;
        case "8": resultadoMetros= inputDistanciaN1.value / 39.37;
        break;
        case "9": resultadoMetros= inputDistanciaN1.value / 3.28084;
        break;
        case "10": resultadoMetros= inputDistanciaN1.value * 0.9144;
        break;
        default: console.log('no hay numero');
        break;
    };

    //El segundo Switch convierne la unidad de metros  la unidad seleccionada en el select2 y se asigna el valor al input #unidadDistancia2

    switch(selectorDistancia2.value){
        case "1": resultadoDistancia= resultadoMetros * 0.001;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "2": resultadoDistancia= resultadoMetros * 0.01;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "3": resultadoDistancia= resultadoMetros * 0.1;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "4": resultadoDistancia= resultadoMetros * 1;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "5": resultadoDistancia= resultadoMetros * 10;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "6": resultadoDistancia= resultadoMetros * 100;
        inputDistanciaN2.value= resultadoDistancia
        break;
        case "7": resultadoDistancia= resultadoMetros * 1000;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "8": resultadoDistancia= resultadoMetros * 39.37;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        case "9": resultadoDistancia= resultadoMetros * 3.28084;
        inputDistanciaN2.value= resultadoDistancia;
        case "10": resultadoDistancia= resultadoMetros / 0.9144;
        inputDistanciaN2.value= resultadoDistancia;
        break;
        default: console.log('no hay numero');
    }
}





//Variables

let selectorArea1= document.querySelector('#unidadArea1')
let selectorArea2= document.querySelector('#unidadArea2')
let inputAreaN1 = document.querySelector('#inputAreaN1')
let inputAreaN2 = document.querySelector('#inputAreaN2')

let resultadoMetrosCuadrados
let resultadoArea

// Eventos

inputAreaN1.addEventListener('keyup', convertirArea)
selectorArea1.addEventListener('change', convertirArea)
selectorArea2.addEventListener('change', convertirArea)


function convertirArea(){

    //El primer Switch convierte la unidad del inputAreaN2 a Metros desde la unidad seleccionada en el select 1

    switch(selectorArea1.value){
        case "1": resultadoMetrosCuadrados= inputAreaN1.value * 1000000;
        break;
        case "2": resultadoMetrosCuadrados= inputAreaN1.value * 10000;
        break;
        case "3": resultadoMetrosCuadrados= inputAreaN1.value * 100;
        break;
        case "4": resultadoMetrosCuadrados= inputAreaN1.value * 1;
        break;
        case "5": resultadoMetrosCuadrados= inputAreaN1.value / 100;
        break;
        case "6": resultadoMetrosCuadrados= inputAreaN1.value / 10000;
        break;
        case "7": resultadoMetrosCuadrados= inputAreaN1.value / 1000000;
        break;
        default: console.log('no hay numero');
        break;
    };

    //El segundo Switch convierne la unidad de metros  la unidad seleccionada en el select2 y se asigna el valor al input #unidadArea2

    switch(selectorArea2.value){
        case "1": resultadoArea= resultadoMetrosCuadrados / 1000000;
        inputAreaN2.value= resultadoArea;
        break;
        case "2": resultadoArea= resultadoMetrosCuadrados / 10000;
        inputAreaN2.value= resultadoArea;
        break;
        case "3": resultadoArea= resultadoMetrosCuadrados / 100;
        inputAreaN2.value= resultadoArea;
        break;
        case "4": resultadoArea= resultadoMetrosCuadrados * 1;
        inputAreaN2.value= resultadoArea;
        break;
        case "5": resultadoArea= resultadoMetrosCuadrados * 100;
        inputAreaN2.value= resultadoArea;
        break;
        case "6": resultadoArea= resultadoMetrosCuadrados * 10000;
        inputAreaN2.value= resultadoArea
        break;
        case "7": resultadoArea= resultadoMetrosCuadrados * 1000000;
        inputAreaN2.value= resultadoArea;
        break;
        default: console.log('no hay numero');
    }
}






//Variables

let selectorVolumen1= document.querySelector('#unidadVolumen1')
let selectorVolumen2= document.querySelector('#unidadVolumen2')
let inputVolumenN1 = document.querySelector('#inputVolumenN1')
let inputVolumenN2 = document.querySelector('#inputVolumenN2')

let resultadoLitros
let resultadoVolumen

// Eventos

inputVolumenN1.addEventListener('keyup', convertirVolumen)
selectorVolumen1.addEventListener('change', convertirVolumen)
selectorVolumen2.addEventListener('change', convertirVolumen)


function convertirVolumen(){

    //El primer Switch convierte la unidad del inputVolumenN2 a Metros desde la unidad seleccionada en el select 1

    switch(selectorVolumen1.value){
        case "1": resultadoLitros= inputVolumenN1.value * 1000;
        break;
        case "2": resultadoLitros= inputVolumenN1.value * 100;
        break;
        case "3": resultadoLitros= inputVolumenN1.value * 10;
        break;
        case "4": resultadoLitros= inputVolumenN1.value * 1;
        break;
        case "5": resultadoLitros= inputVolumenN1.value * 0.1;
        break;
        case "6": resultadoLitros= inputVolumenN1.value * 0.01;
        break;
        case "7": resultadoLitros= inputVolumenN1.value * 0.001;
        break;
        default: console.log('no hay numero');
        break;
    };

    //El segundo Switch convierne la unidad de metros  la unidad seleccionada en el select2 y se asigna el valor al input #unidadDistancia2

    switch(selectorDistancia2.value){
        case "1": resultadoVolumen= resultadoLitros * 0.001;
        inputVolumenN2.value= resultadoVolumen;
        break;
        case "2": resultadoVolumen= resultadoLitros * 0.01;
        inputVolumenN2.value= resultadoVolumen;
        break;
        case "3": resultadoVolumen= resultadoLitros * 0.1;
        inputVolumenN2.value= resultadoVolumen;
        break;
        case "4": resultadoVolumen= resultadoLitros * 1;
        inputVolumenN2.value= resultadoVolumen;
        break;
        case "5": resultadoVolumen= resultadoLitros * 10;
        inputVolumenN2.value= resultadoVolumen;
        break;
        case "6": resultadoVolumen= resultadoLitros * 100;
        inputVolumenN2.value= resultadoVolumen
        break;
        case "7": resultadoVolumen= resultadoLitros * 1000;
        inputVolumenN2.value= resultadoVolumen;
        break;
        default: console.log('no hay numero');
    }
}

//Variables

let selectorPeso1= document.querySelector('#unidadPeso1')
let selectorPeso2= document.querySelector('#unidadPeso2')
let inputPesoN1 = document.querySelector('#inputPesoN1')
let inputPesoN2 = document.querySelector('#inputPesoN2')

let resultadoKilos
let resultadoPeso

// Eventos

inputPesoN1.addEventListener('keyup', convertirPeso)
selectorPeso1.addEventListener('change', convertirPeso)
selectorPeso2.addEventListener('change', convertirPeso)


function convertirPeso(){

    //El primer Switch convierte la unidad del inputPesoN2 a Metros desde la unidad seleccionada en el select 1

    switch(selectorPeso1.value){
        case "1": ResultadoKilos= inputPesoN1.value * 1000;
        break;
        case "2": ResultadoKilos= inputPesoN1.value * 100;
        break;
        case "3": ResultadoKilos= inputPesoN1.value * 10;
        break;
        case "4": ResultadoKilos= inputPesoN1.value * 1;
        break;
        case "5": ResultadoKilos= inputPesoN1.value * 0.1;
        break;
        case "6": ResultadoKilos= inputPesoN1.value * 0.01;
        break;
        case "7": ResultadoKilos= inputPesoN1.value * 0.001;
        break;
        default: console.log('no hay numero');
        break;
    };

    //El segundo Switch convierne la unidad de metros  la unidad seleccionada en el select2 y se asigna el valor al input #unidadPeso2

    switch(selectorPeso2.value){
        case "1": resultadoPeso= ResultadoKilos * 0.001;
        inputPesoN2.value= resultadoPeso;
        break;
        case "2": resultadoPeso= ResultadoKilos * 0.01;
        inputPesoN2.value= resultadoPeso;
        break;
        case "3": resultadoPeso= ResultadoKilos * 0.1;
        inputPesoN2.value= resultadoPeso;
        break;
        case "4": resultadoPeso= ResultadoKilos * 1;
        inputPesoN2.value= resultadoPeso;
        break;
        case "5": resultadoPeso= ResultadoKilos * 10;
        inputPesoN2.value= resultadoPeso;
        break;1
        case "6": resultadoPeso= ResultadoKilos * 100;
        inputPesoN2.value= resultadoPeso
        break;
        case "7": resultadoPeso= ResultadoKilos * 1000;
        inputPesoN2.value= resultadoPeso;
        break;
        default: console.log('no hay numero');
    }
}

