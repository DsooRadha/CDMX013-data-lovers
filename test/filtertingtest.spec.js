import { filtering} from './src/data.js';

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
    expect(filtering('gender', 'Male')).toStrictEqual([
    {
        gender:'Male'
    },
]);  
  });

  
   