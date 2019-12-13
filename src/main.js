
import  POKEMON from './data/pokemon/pokemon.js';

import {filtered} from './data.js';

//función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('screenTwo').style.visibility='visible';
    document.getElementById('screenTwo').style.display='block';
    document.getElementById('screenOne').style.visibility='hidden';
    document.getElementById('screenOne').style.display='none';

    //guardando div de html en variable
    let container= document.getElementById('pokemon');
   
    //recorriendo arreglo
    for (let i = 0; i < POKEMON.length; i++) {
        //imprimiendo nombre e imagen de cada pokemon en Html
        container.innerHTML+=
        `<div class='cajitaPokemon'>
        <div> <img class='imagen' src='${POKEMON[i].img}'><div>
        <h2> #${POKEMON[i].num}</h2>
        <h2> ${POKEMON[i].name}</h2>
        <h3> Caramelos: ${POKEMON[i].candy}
        <br>
         Mide: ${POKEMON[i].height}
        <br>
         Peso: ${POKEMON[i].weight}</h3>
         
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
    function funcionconectada () {
        return console.log('funciona')
      };
    //recorriendo la lista de pokemon filtrados
    for (let i = 0; i < chosenType.length; i++) {

    //imprimiendo lista de pokemon en html
    document.getElementById('pokemon').innerHTML += 
    `<div class='cajitaPokemon'>
    <div> <img class='imagen' src='${chosenType[i].img}'><div>
     <h2> #${chosenType[i].num}</h2>
     <h2> ${chosenType[i].name}</h2>
     <h3> Caramelos: ${chosenType[i].candy}
     <br>
      Mide: ${chosenType[i].height}
     <br>
      Peso: ${chosenType[i].weight}</h3>
    </div>`
}})