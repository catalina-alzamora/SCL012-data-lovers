
import  POKEMON from './data/pokemon/pokemon.js';

import {example, pokemonTypes} from './data.js'

//import pokemonTypes from '/data.js'

console.log(example())

    //función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('screenTwo').style.visibility='visible';
    document.getElementById('screenTwo').style.display='block';
    document.getElementById('screenOne').style.visibility='hidden';
    document.getElementById('screenOne').style.display='none';

    let container= document.getElementById("probando")
    
    //Declarando variable para imprimir pokemon
   // let print= document.getElementById ("pokemonList");
    //imprimiendo nombre de primer pokemon
    //print.innerHTML= `<p class=name> ${POKEMON[0].name}<p>`;

    
    //probando recorrido
    for (let i = 0; i < POKEMON.length; i++) {
        
        container.innerHTML+=

        `<div class="cajitaPokemon">
        <div> <img class="imagen" src= "${POKEMON[i].img}"><div>
        <div class="pokemonCard">    ${POKEMON[i].name}<div>
        </div>`
        console.log(POKEMON)

   

    //poniendo lista de pokemon al html:
        //recorriendo arreglo para imprimir en html
    for (let i = 0; i < POKEMON.length; i++) {
        //creando nuevo arreglo
        let completeList = [];
        //llamando lugar en html donde se va a imprimir
        let print= document.getElementById ("list");
        //agregando nombre de cada pokemon al nuevo arreglo
        completeList.push(POKEMON[i].name);
        //imprimiendo arreglo nuevo
        print.innerHTML+= `<p class="name"> ${completeList}<p>`;

    }
})

//filtrado de pokemon según lista de opciones:

/*//función de filtrado
function filteredPokemon(item, selectedType){
    return POKEMON.filter (item => item.type.includes(selectedType));
} 
*/
    //agregando evento click a la barra de selección
document.getElementById('selector').addEventListener('click',()=>{

    //guardando el valor de lo seleccionado
    let filterType = document.getElementById('selector').value;
    document.getElementById("xd").innerHTML="";
    
    // usando función con filterType
    pokemonTypes(filterType);
    for (let i = 0; i < POKEMON.length; i++) {
        document.getElementById("xd").innerHTML = `<p class="name"> ${pokemon[i].name}<p>`;
console.log(pokemonTypes())
   console.log( pokemonTypes(pokemonTypes) );
   //console.log(pokemonTypes)
   
    }
})