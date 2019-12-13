
import POKEMON from './data/pokemon/pokemon.js';
import { filtered } from './data.js';

// función de cambio de pantalla con el botón de ingresar
document.getElementById('playBtn').addEventListener('click', () => {
  document.getElementById('screenTwo').style.visibility = 'visible';
  document.getElementById('screenTwo').style.display = 'block';
  document.getElementById('screenOne').style.visibility = 'hidden';
  document.getElementById('screenOne').style.display = 'none';

  // guardando div de html en variable
  const container = document.getElementById('pokemon');
  for (let i = 0; i < POKEMON.length; i++) {
    // imprimiendo imagen y datos de cada pokemon en Html
    container.innerHTML += `<div class='pokemonBox'>
        <div> <img class='pokeImg' src='${POKEMON[i].img}'><div>
        <h2> #${POKEMON[i].num}</h2>
        <h2> ${POKEMON[i].name}</h2>
        <h3> Caramelos: ${POKEMON[i].candy}
        <br>
         Mide: ${POKEMON[i].height}
        <br>
         Peso: ${POKEMON[i].weight}</h3> 
        </div>`;
  }
});
// Agregando función de filtrado a la barra de selección de tipo de pokemon
document.getElementById('selectorType').addEventListener('change', () => {
  // vaciando contenedor
  document.getElementById('pokemon').innerHTML = '';
  // guardando el tipo de pokemon seleccionado
  const filterType = document.getElementById('selectorType').value;
  // función de filtrado está en data.
  // guardando lista de pokemon filtrados en una variable
  const chosenType = (filtered(filterType));
  // recorriendo la lista de pokemon filtrados
  for (let i = 0; i < chosenType.length; i++) {
    // imprimiendo lista de pokemon en html
    document.getElementById('pokemon').innerHTML += `<div class='pokemonBox'>
    <div> <img class='pokeImg' src='${chosenType[i].img}'><div>
     <h2> #${chosenType[i].num}</h2>
     <h2> ${chosenType[i].name}</h2>
     <h3> Caramelos:${chosenType[i].candy}
     <br>
      Mide: ${chosenType[i].height}
     <br>
      Peso: ${chosenType[i].weight}</h3>
    </div>`;
  }
});
