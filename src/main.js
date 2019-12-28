
import POKEMON from './data/pokemon/pokemon.js';
import { filtered, ascendingOrder, nameSearch } from './data.js';

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
//  Función  ordenar por nombre
document.getElementById('orderByName').addEventListener('change',() => {
  const orderType = document.getElementById('orderByName').value;
  let pokemonOrdered = '';
  if(orderType === 'aToZ'){
    pokemonOrdered = POKEMON.sort(ascendingOrder);
  }
  if(orderType === 'zToA'){
    pokemonOrdered = POKEMON.sort(ascendingOrder).reverse();
  }
  else{
    pokemonOrdered = POKEMON;
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
  let chosenType = '';
  if(filterType === '0'){
    chosenType = POKEMON;
  }
  else{
    chosenType = (filtered(POKEMON,filterType));
  }
  for (let i = 0; i < chosenType.length; i++) {
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
// Función buscar por nombre de pokémon
document.getElementById('okBtn').addEventListener('click', () => {
  document.getElementById('pokemon').innerHTML = '';
  const name = document.getElementById('search').value;
  const finalName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let chosenName = (nameSearch(POKEMON,finalName));;
for (let i = 0; i < chosenName.length; i++) {
  document.getElementById('pokemon').innerHTML += `<div class='pokemonBox'>
  <div> <img class='pokeImg' src='${chosenName[i].img}'><div>
   <h2 class="cardText"> #${chosenName[i].num}</h2>
   <h2 class="cardText"> ${chosenName[i].name}</h2>
   <h3 class="cardTextTwo"> Caramelos:${chosenName[i].candy}
   <br>
    Mide: ${chosenName[i].height}
   <br>
    Peso: ${chosenName[i].weight}</h3>
  </div>`;
}
});
// Función mostrar lista completa
document.getElementById('all').addEventListener('click', () => {
  document.getElementById('pokemon').innerHTML = '';
  document.getElementById('search').value = '';
  document.getElementById('orderByName').value = 0;
  document.getElementById('selectorType').value = 0;
  const container = document.getElementById('pokemon');
  for (let i = 0; i < POKEMON.length; i++) {
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
// Función subir
document.getElementById('upBtn').addEventListener("click",() => {
  window.scrollTo(0,0);
});
