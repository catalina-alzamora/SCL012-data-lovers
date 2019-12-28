
import POKEMON from './data/pokemon/pokemon.js';
import { filtered, ascendingOrder } from './data.js';

// Función de cambio de pantalla 
document.getElementById('playBtn').addEventListener('click', () => {
  document.getElementById('screenTwo').style.visibility = 'visible';
  document.getElementById('screenTwo').style.display = 'block';
  document.getElementById('screenOne').style.visibility = 'hidden';
  document.getElementById('screenOne').style.display = 'none';
  // Guardando div de html 
  const container = document.getElementById('pokemon');
  for (let i = 0; i < POKEMON.length; i++) {
    // Imprimiendo imagen y datos de cada pokémon (lista completa) en html
    container.innerHTML += `<div class='pokemonBox'>
        <div> <img class='pokeImg' src='${POKEMON[i].img}'><div>
        <h2 class="cardText"> #${POKEMON[i].num}</h2>
        <h2 class="cardText"> ${POKEMON[i].name}</h2>
        <h3 class="cardTextTwo"> Caramelos: ${POKEMON[i].candy}
        <br>
         Mide: ${POKEMON[i].height}
        <br>
         Peso: ${POKEMON[i].weight}</h3> 
        </div>`;
  }
});
//  función  ordenar por nombre
document.getElementById('orderByName').addEventListener('change',() => {
  const orderType = document.getElementById('orderByName').value;
  let pokemonOrdered = '';
  // ordenando según lo seleccionado
  if(orderType === 'aToZ'){
    pokemonOrdered = POKEMON.sort(ascendingOrder);
  }
  if(orderType === 'zToA'){
    pokemonOrdered = POKEMON.sort(ascendingOrder).reverse();
  }
  // imprimiendo
  document.getElementById('pokemon').innerHTML = '';
  for (let i = 0; i < pokemonOrdered.length; i++) {
    document.getElementById('pokemon').innerHTML += `<div class='pokemonBox'>
    <div> <img class='pokeImg' src='${pokemonOrdered[i].img}'><div>
     <h2 class="cardText"> #${pokemonOrdered[i].num}</h2>
     <h2 class="cardText"> ${pokemonOrdered[i].name}</h2>
     <h3 class="cardTextTwo"> Caramelos:${pokemonOrdered[i].candy}
     <br>
      Mide: ${pokemonOrdered[i].height}
     <br>
      Peso: ${pokemonOrdered[i].weight}</h3>
    </div>`;
}  
});
// Función filtrado
document.getElementById('selectorType').addEventListener('change', () => {
  document.getElementById('pokemon').innerHTML = '';
  const filterType = document.getElementById('selectorType').value;
  const chosenType = (filtered(POKEMON,filterType));
  // recorriendo la lista de pokémon filtrados
  for (let i = 0; i < chosenType.length; i++) {
    // imprimiendo lista de pokémon en html
    document.getElementById('pokemon').innerHTML += `<div class='pokemonBox'>
    <div> <img class='pokeImg' src='${chosenType[i].img}'><div>
     <h2 class="cardText"> #${chosenType[i].num}</h2>
     <h2 class="cardText"> ${chosenType[i].name}</h2>
     <h3 class="cardTextTwo"> Caramelos:${chosenType[i].candy}
     <br>
      Mide: ${chosenType[i].height}
     <br>
      Peso: ${chosenType[i].weight}</h3>
    </div>`;
  }
});
// Función subir
document.getElementById('upBtn').addEventListener("click",() => {
  window.scrollTo(0,0);
});
