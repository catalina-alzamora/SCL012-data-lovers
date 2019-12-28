import POKEMON from './data/pokemon/pokemon.js';
export const example = () => {
  return 'example';
};

// función de filtrado
export const filtered = (POKEMON,filterType) => {
  const result = POKEMON.filter((element) => {
    return element.type.includes(filterType);
  });
  return result;
};

// función de ordenar A-Z
export const ascendingOrder = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
 };

// Función buscar por nombre de pokémon
export const nameSearch = (POKEMON,finalName) => {
  const searched = POKEMON.filter((element) => {
    return element.name.includes(finalName);
  });
  return searched;
};
  