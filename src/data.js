/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};


/*función de filterData(data, condition): esta función filter o filtrar recibiría la data, 
y nos retornaría aquellos datos que sí cumplan con la condición*/
export const filteredPokemon = () => { POKEMON.filter(d => d.type.includes= "Grass");
return filteredPokemon;
}
/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data,
nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere
ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente*/