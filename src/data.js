import POKEMON from './data/pokemon/pokemon.js';
export const example = () => {
  return 'example';
};
export const filtered = (POKEMON,filterType) => {
  const result = POKEMON.filter((element) => {
    return element.type.includes(filterType);
  });
  return result;
};
