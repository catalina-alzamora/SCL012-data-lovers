import { example, filtered, ascendingOrder } from "../src/data";

describe('example', () => {

  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});

// probando con funcion de filtrado (filtered):
describe('filtered', () => {

  it('debería ser una función', () => {
    expect(typeof filtered).toBe('function');
  });
});

describe('ascendingOrder', () => {

  it('debería ser una función', () => {
    expect(typeof ascendingOrder).toBe('function');
  });
});

// inventando un arreglo para testear funciones
const pokemonArray = [{
    id: 15,
    num: '015',
    name: 'Beedrill',
    type: [
      'Bug',
      'Poison',
  ]},
   {
    id: 16,
    num: '016',
    name: 'Pidgey',
    type: [
      'Normal',
      'Flying',
    ],
  }
]
// función de filtrar pokémon por tipo
describe('filtered', () => {
  it('Debería retornar "Pidgey" para pokemonArray y "Normal"', () => {
    expect(filtered(pokemonArray,'Normal')).toMatchObject([{"id": 16, "num": '016', "name": "Pidgey", "type": ["Normal","Flying"]}])
  })
});
//función de ordenar pokémon por nombre
describe('ascendingOrder', () => {
  it('Debería retornar "-1" al comparar "Beedrill y Pidgey" para pokemonArray usando ascendingOrder', () => {
    expect(ascendingOrder(pokemonArray[0], pokemonArray[1])).toBe(-1);
  })
  it('Debería retornar "1" al comparar "Pidgey y Beedrill" para pokemonArray usando ascendingOrder', () => {
    expect(ascendingOrder(pokemonArray[1], pokemonArray[0])).toBe(1);
  })
});

