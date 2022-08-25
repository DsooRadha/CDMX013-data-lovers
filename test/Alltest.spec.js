import {filtering, orderAZ, orderZA} from '../src/data.js';
//import {allcharacters} from '../src/data.js';

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

  describe("orderAZ ordena de la AZ", () => {
    it('ordena los nombres de la AZ', () => {

        const data = [
           {
               name: 'Pazu'
           },
           {
               name: 'Totoro'
           },
           {
               name:'Abso'
           },
        ];
           expect(orderAZ(data, 'name')).toStrictEqual([
            {
                name: 'Abso' 
            },
            {
                name: 'Pazu' 
            },
            {
                name:'Totoro'
            },
       ]);  
         });})

         describe("orderZA ordena de la AZ", () => {
            it('ordena los nombres de la AZ', () => {
        
                const data = [
                   {
                       name: 'Pazu'
                   },
                   {
                       name: 'Totoro'
                   },
                   {
                       name:'Abso'
                   },
                ];
                   expect(orderZA(data, 'name')).toStrictEqual([
                    {
                        name:'Totoro'
                        
                    },
                    {
                        name: 'Pazu' 
                    },
                    {
                        name: 'Abso' 
                    },
               ]);  
                 });})
               