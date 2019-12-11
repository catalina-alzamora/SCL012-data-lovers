
import  POKEMON from './data/pokemon/pokemon.js';

import {filtered} from './data.js'

    //función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('screenTwo').style.visibility='visible';
    document.getElementById('screenTwo').style.display='block';
    document.getElementById('screenOne').style.visibility='hidden';
    document.getElementById('screenOne').style.display='none';

    //guardando div de html en variable
    let container= document.getElementById('pokemon')
    
    //recorriendo arreglo
    for (let i = 0; i < POKEMON.length; i++) {

        //imprimiendo nombre e imagen de cada pokemon en Html
        container.innerHTML+=
        `<div class='cajitaPokemon'>
        <div> <img class='imagen' src= "${POKEMON[i].img}"><div>
        <div class='nombre'>    ${POKEMON[i].name}<div>
        </div>`
    }
})

    //agregando función de filtrado a la barra de selección de tipo de pokemon
document.getElementById('selectorType').addEventListener('change',()=>{

    //vaciando contenedor
   document.getElementById('pokemon').innerHTML="";

    //guardando el tipo de pokemon seleccionado
    let filterType = document.getElementById('selectorType').value;
  console.log(filterType);

    // función de filtrado está en data.

    //guardando lista de pokemon filtrados en una variable
    let chosenType = (filtered (filterType));

    //recorriendo la lista de pokemon filtrados
    for (let i = 0; i < chosenType.length; i++) {

    //imprimiendo lista de pokemon en html
    document.getElementById('pokemon').innerHTML += `
    <div class='cajitaPokemon'>
    <div> <img class='imagen' src= "${chosenType[i].img}"><div>
    <div class='nombre'>    ${chosenType[i].name}<div>
    </div>`
}})

/*//función abriendo ventana
document.getElementById('')
document.getElementById('pokemon').innerHTML = `
<div class='cajitaPokemon'>
    <div> <img class='imagen' src= "${chosenType[i].img}"><div>
    <div class='pokemonCard'>    ${chosenType[i].name}<div>
    </div>`
    ver https://www.youtube.com/watch?v=RXTCrhos5w8
    */