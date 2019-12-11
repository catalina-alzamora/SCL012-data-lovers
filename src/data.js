
import  POKEMON from './data/pokemon/pokemon.js';

export const filtered = (filterType) => {
  let result = POKEMON.filter(element => {
    return element.type.includes(filterType);
});
  return result;
};