// importamos la función `example`
import { example, filtered } from "../src/data";

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

//inventando un arreglo para testear la función
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
describe('filtered', () => {
  it('Debería retornar "Pidgey" para pokemonArray y "Normal"', () => {
    expect(filtered(pokemonArray,'Normal')).toMatchObject([{"id": 16, "num": '016', "name": "Pidgey", "type": ["Normal","Flying"]}])
  })
});

