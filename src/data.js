import ghibli from './data/ghibli/ghibli.js';

export const dataGhibliJs = (ghibli.films);
console.log(dataGhibliJs)
        dataGhibliJs.forEach(data => {
          console.log(data); 
 })

 const directores= (dataGhibliJs).filter(d=> {
  return d.director==='Hayao Miyazaki'})
  console.log(directores)

  //directores.sort()


 

 //g=>g.director =='Hayao Miyazaki');

 



export const experimento = function () {
  return "soy un mensaje de experimento"
}
