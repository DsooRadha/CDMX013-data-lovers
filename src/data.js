import ghibli from './data/ghibli/ghibli.js';

const dataGhibliJs = (ghibli.films);
console.log(dataGhibliJs)
// console.log(data); 
dataGhibliJs.forEach(data => {
  const directores = data.director 
  console.log(directores)

})

//PASOS A SEGUIR CUANDO QUIERO ELIMINAR DATA REPETIDA

const allDirectors = dataGhibliJs.map(({ director}) => { return ({ director }).director })//1.hago un Array con los elementos a analizar de dataJS
const director = [];            // 2. creo un array vacio donde llegaran los datos ya sin repetir 
allDirectors.forEach( (elemento) => {   // 3. sustituyo el elemento a iterar "allDirector" 
  if (!director.includes(elemento)) {
    director.push(elemento);
  }
});

console.log(director); //4. festejas bailando en circulos
console.log (director [1])


export const filterDirectorHayao = function () { //function (data,directorName)
  const filterHayao = ({ director }) => ({ director }).director === 'Hayao Miyazaki' // 
  const directors = (dataGhibliJs).filter(filterHayao)
  return directors
}

export const filterDirectorIsao = function () { //function (data,directorName)
  const filterIsao = ({ director }) => ({ director }).director === 'Isao Takahata' // 
  const directors = (dataGhibliJs).filter(filterIsao)
  return directors
}

export const filterDirectorYoshifumi = function () { //function (data,directorName)
  const filterYoshifumi = ({ director }) => ({ director }).director === 'Yoshifumi Kondō' // 
  const directors = (dataGhibliJs).filter(filterYoshifumi)
  return directors
}

export const filterDirectorHiroyuki = function () { //function (data,directorName)
  const filterHiroyuki = ({ director }) => ({ director }).director === 'Hiroyuki Morita' // 
  const directors = (dataGhibliJs).filter(filterHiroyuki)
  console.log (directors) 
}
/*
export const filterDirectorYoshifumi = function () { //function (data,directorName)
  const filterYoshifumi = ({ director }) => ({ director }).director === 'Yoshifumi Kondō' // 
  const directors = (dataGhibliJs).filter(filterYoshifumi)
  return directors
}*/

/*
export 
const allDirectors = function () { //function (data,directorName)
 directores.map
  return allDirectors
}
*/

// const titleDirector = directors.map(({ title }) => { return ({ title }).title })
//return(titleDirector)}

/*ESTRUCTURA MAP
.map (funcion (_, posicion, arrayoriginalsobreelqueseinvocalafuncion) 
Guión BAajo si no nosinteresan los primeros parametros, los posteriores solo se omiten
 .map (funcion (numero, posicion, arrayoriginalsobreelqueseinvocalafuncion){})*/

//OPERACIONES CON RT DE FILMS- PROMEDIO DE RT ,MAX Y MIN 

const allRt = dataGhibliJs.map(x => x.rt_score);
console.log(allRt);

const numerosRt = allRt.map(str => { return Number(str) });
console.log(numerosRt);

var minRt = Math.min(...numerosRt);
console.log(minRt)

var maxRt = Math.max(...numerosRt);
console.log(maxRt)

const acumular = (acumulador, numero) => acumulador + numero
let totalAverageRt = (numerosRt.reduce(acumular)) / numerosRt.length
console.log(totalAverageRt);

/*
function print MinMax(peliculas){
  let min peliculas[0] == 3
  let max peliculas[0] == 6
  forach(()=>[
    if(pelicula.rate menor min) // 5 3 6
      gurado en min  la perlicula
    if(pelicula.rate mayopr a max ) // 5 3 6
    guardo pelicula en maxRt
  ])
  retorno min max
}
*/
