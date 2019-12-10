/* Manejo de data */
import  POKEMON from './data/pokemon/pokemon.js';
// esta es una función de ejemplo

export const example = () => {
  console.log('hola')
  return 'chao';
};

//Función de filtrado. 
//element es el dato que ingresa (en este caso es el arreglo de pokemon)
export let pokemonTypes = function filteredPokemon(filterTypes){
  const filterPokemon = POKEMON.filter((element) => {
    console.log(element.type);
    return element.type.includes(filterType());
  })
//console.log(filterPokemon);
return filterPokemon;
}
/*export let pokemonTypes = function filteredPokemon(POKEMON, typeSelected){
  const filterPokemon = POKEMON.filter((element) => {
    console.log(element.type);
    return element.type.includes(typeSelected);
  })}*/