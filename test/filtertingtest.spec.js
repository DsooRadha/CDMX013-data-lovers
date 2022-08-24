import {filtering} from '../src/data.js';


describe("comprobando si filtering es una funcion", () => {
  
    it("filtering debe ser una funcion", () => {
        expect(typeof filtering).toBe("function");
    });})


describe('filtrarporgenero', ()=> {

it('filtra segun el genero indicado', () => {

 const data = [
    {
        gender: 'Female'
    },
    {
        gender: 'Male'
    },
    {
        gender:'n/a'
    },
 ];
    expect(filtering(data, 'gender', 'Male')).toStrictEqual([
    {
        gender:'Male'
    },
]);  
  });})

  
   