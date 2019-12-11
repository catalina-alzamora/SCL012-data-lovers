
import  POKEMON from './data/pokemon/pokemon.js';

//import {example} from './data.js'

document.getElementById('playBtn').addEventListener('click', () => {

  console.log("el click funciona");
});
//console.log(example())
//console.log(filtered())

    //función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('screenTwo').style.visibility='visible';
    document.getElementById('screenTwo').style.display='block';
    document.getElementById('screenOne').style.visibility='hidden';
    document.getElementById('screenOne').style.display='none';

    //llamando id de div en html
    let container= document.getElementById('probando')
    
    //recorriendo arreglo
    for (let i = 0; i < POKEMON.length; i++) {
        //imprimiendo en Html
        container.innerHTML+=

        `<div class='cajitaPokemon'>
        <div> <img class='imagen' src= "${POKEMON[i].img}"><div>
        <div class='pokemonCard'>    ${POKEMON[i].name}<div>
        </div>`
      //  console.log(POKEMON)
    }
})

/*
    //agregando función de filtrado a la barra de selección
document.getElementById('selector').addEventListener('change',()=>{

    //vaciando contenedor
   document.getElementById('probando').innerHTML="";

    //guardando el valor de lo seleccionado
    let filterType = document.getElementById('selector').value;
  console.log('filterType');
    // usando función con filterType
   let filtered = (pokemon, userfilter) => {
        let result = pokemon.filter(element => {
          return element.type.includes(userfilter);
        });
        return result;
      };
    let chosenType = filtered(POKEMON, filterType);
    for (let i = 0; i < chosenType.length; i++) {
    document.getElementById('probando').innerHTML += `
    <div class='cajitaPokemon'>
    <div> <img class='imagen' src= "${chosenType[i].img}"><div>
    <div class='pokemonCard'>    ${chosenType[i].name}<div>
    </div>`

}})

*/
/*//función abriendo ventana
document.getElementById('')
document.getElementById('pokemon').innerHTML = `
<div class='cajitaPokemon'>
    <div> <img class='imagen' src= "${chosenType[i].img}"><div>
    <div class='pokemonCard'>    ${chosenType[i].name}<div>
    </div>`
    ver https://www.youtube.com/watch?v=RXTCrhos5w8
    */