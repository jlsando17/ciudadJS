import { barcelona, roma, paris, londres, sogamoso } from './ciudades.js'

//elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')


//Agregar un evento al click a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //limpiar los enlaces del active
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar active al enlace seleccionado
        this.classList.add('active')

        //obtener el contenido de acuerdo al enlace seleccionado
        let contenido=obtenerContenido(this.textContent)

        //mostrar el contenido del DOM
        tituloElemento.innerHTML=contenido.titulo
        subtituloElemento.innerHTML=contenido.subtitulo
        parrafoElemento.innerHTML=contenido.parrafo
        
    });
});

//traer la info de ciudades.js
function obtenerContenido(enlace){
    let contenido={
        'Sogamoso':sogamoso,
        'Barcelona':barcelona,
        'Roma':roma,
        'Paris':paris,
        'Londres':londres
        
    };
    return contenido[enlace];
}