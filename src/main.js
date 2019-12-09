
import  POKEMON  from './data/pokemon/pokemon.js';

//probando si sale el objeto bulbasaur
console.log(POKEMON [0]);

//viendo keys de bulbasaur
console.log(Object.keys(POKEMON [0]));
/*Keys de cada pokemon:
"id", "num", "name", "img", "type", "height", "weight", "candy", "candy_count", "egg", "spawn_chance",
 "avg_spawns", "spawn_time", "multipliers", "weaknesses", "next_evolution"*/

//viendo valor de key-tipo de bulbasaur
console.log(POKEMON[0].type);



/*Probando si recorre
for (let i = 0; i <= POKEMON.length; i++) {
    console.log(POKEMON[i].type);
}
*/
//probando hacer arreglo con pokemons tipo planta
function filterByGrass(POKEMON){
let grassPokemon = [];
for (let i = 0; i <= POKEMON.length; i++) {
    if ((POKEMON[i].type).includes("Grass")) {
     grassPokemon.push(POKEMON[i]);  
     console.log(grassPokemon)
    }}    
   return grassPokemon
}

//función de filtrado
/*let filteredPokemon = POKEMON.filter(element => element.type.includes("Fire"));
console.log("filteredPokemon => ", filteredPokemon);*/

//probando import de función de filtrado
//import {filteredPokemon} from './src/data.js';
//console.log(filteredPokemon);




    //función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('screenTwo').style.visibility='visible';
    document.getElementById('screenTwo').style.display='block';
    document.getElementById('screenOne').style.visibility='hidden';
    document.getElementById('screenOne').style.display='none';
    
    //Declarando variable para imprimir pokemon
   // let print= document.getElementById ("pokemonList");
    //imprimiendo nombre de primer pokemon
    //print.innerHTML= `<p class=name> ${POKEMON[0].name}<p>`;

    
//probando si funciona grasspokemon
  grassPokemon ();

    //probando recorrido
    for (let i = 0; i <= POKEMON.length; i++) {
        let completeList = [];
        let print= document.getElementById ("pokemonList");
        completeList.push(POKEMON[i].name);
        print.innerHTML+= `<p class="name"> ${completeList}<p>`;
    }

})

//obteniendo el valor seleccionado de la lista de opciones
document.getElementById('selector').addEventListener('click',()=>{
    let filterType = document.getElementById('selector').value;
    document.getElementById('pokemonList').innerHTML= "you selected " + filterType;
})