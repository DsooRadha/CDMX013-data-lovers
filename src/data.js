import ghibli from './data/ghibli/ghibli.js';

const dataGhibliJs = (ghibli.films);
console.log(dataGhibliJs)
// console.log(data); 
dataGhibliJs.forEach(data => {
  const directores = data.director 
  console.log(directores)

})

export const filterDirectorHayao = function () { //function (data,directorName)
  const filterHayao = ({ director }) => ({ director }).director === 'Hayao Miyazaki' // 
  const directors = (dataGhibliJs).filter(filterHayao)
  return directors
}

export const filterDirectorIsao = function () { //function (data,directorName)
  const filterHayao = ({ director }) => ({ director }).director === 'Isao Takahata' // 
  const directors = (dataGhibliJs).filter(filterHayao)
  return directors
}
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
function print minMax(dataGhibliJs){
  let min dataGhibliJs[0] == 3
  let max dataGhibliJs[0] == 6
}

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