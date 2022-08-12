import ghibli from './data/ghibli/ghibli.js';

export const dataGhibliJs = (ghibli.films);
console.log(dataGhibliJs)
        dataGhibliJs.forEach(data => {
          return data
         // console.log(data); 
 })

 const directores= (dataGhibliJs)
 .filter(({director})=> {return ({director}).director==='Hayao Miyazaki'})
 console.log(directores)
/*ESTRUCTURA MAP
.map (funcion (_, posicion, arrayoriginalsobreelqueseinvocalafuncion) 
Guión BAajo si no nosinteresan los primeros parametros, los posteriores solo se omiten
 .map (funcion (numero, posicion, arrayoriginalsobreelqueseinvocalafuncion){
 })
 */
const titleDirector= directores.map (({title})=> {return ({title}).title;})
   console.log(titleDirector)


  //directores.sort()


 

 //g=>g.director =='Hayao Miyazaki');

 



export const experimento = function () {
  return "soy un mensaje de experimento"
}
