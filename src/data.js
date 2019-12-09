/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};

let numArray = [1,2,3,4,5,6,7,8,9,10] 
let filterNumArray = numArray.filter(element => element > 5)

console.log("numArray => ", numArray)
console.log("filterNumArray => ", filterNumArray)

/*función de filterData(data, condition): esta función filter o filtrar recibiría la data, 
y nos retornaría aquellos datos que sí cumplan con la condición*/
//export let filteredPokemon = POKEMON.filter(element => element.type.includes("Grass"));


/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data,
nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere
ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente*/