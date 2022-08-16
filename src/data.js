import ghibli from './data/ghibli/ghibli.js';

const dataGhibliJs = (ghibli.films);
console.log(dataGhibliJs)
dataGhibliJs.forEach(data => {
  const directores = data.director 
  return directores
})

export const directors = [
  {name: "Isao Takahata", selector: '.columnIsao'},
  {name: "Hayao Miyazaki", selector: '.columnHayao'},
  {name: "Yoshifumi Kondō", selector: '.columnYoshifumi'},
  {name: "Hiroyuki Morita", selector: '.columnHiroyuki'},
  {name: "Gorō Miyazaki", selector: '.columnGoro'},
  {name: "Hiromasa Yonebayashi", selector: '.columnHiromasa'},
]



export const title = [
  {name: "Castle in the Sky", selector: '.columnIsao'},
  {name: "My Neighbor Totoro", selector: '.columnHayao'},
  {name: "Kiki's Delivery Service", selector: '.columnYoshifumi'},
  {name: "Grave of the Fireflies", selector: '.columnHiroyuki'},
  {name: "Only Yesterday", selector: '.columnGoro'},
  {name: "Porco Rosso", selector: '.columnHiromasa'},
  {name: "Pom Poko", selector: '.columnHiroyuki'},
  {name: "Whisper of the Heart", selector: '.columnGoro'},
  {name: "Princess Mononoke", selector: '.columnHiromasa'},
  {name: "My Neighbors the Yamadas", selector: '.columnHiromasa'},
  {name: "Spirited Away", selector: '.columnHiroyuki'},
  {name: "The Cat Returns", selector: '.columnGoro'},
  {name: "Howl's Moving Castle", selector: '.columnHiromasa'},
  {name: "Tales from Earthsea", selector: '.columnHiroyuki'},
  {name: "Ponyo on the Cliff by the Sea", selector: '.columnGoro'},
  {name: "The Secret World of Arrietty", selector: '.columnHiromasa'},
  {name: "From Up on Poppy Hill", selector: '.columnHiromasa'},
  {name: "The Wind Rises", selector: '.columnHiroyuki'},
  {name: "The Tale of the Princess Kaguya", selector: '.columnGoro'},
  {name: "When Marnie Was There", selector: '.columnHiromasa'},
]


//PASOS A SEGUIR CUANDO QUIERO ELIMINAR DATA REPETIDA
const allDataGhibli= dataGhibliJs.map(({ director}) => { return ({ director }).director })//1.hago un Array con los elementos a analizar de dataJS
const director = [];            // 2. creo un array vacio donde llegaran los datos ya sin repetir 
allDataGhibli.forEach( (elemento) => {   // 3. sustituyo el elemento a iterar "allDirector" 
  if (!director.includes(elemento)) {
    director.push(elemento);
  }
});
console.log(director); //4. festejas bailando en circulos

export const filterDirector = function (name) { //function (data,directorName)
  const filterHayao = ({ director }) => ({ director }).director === name // 
  const directors = (dataGhibliJs).filter(filterHayao)
  return directors
}


export const filterPersonajes= function (name) { //function (data,directorName)
  const filterHayao = ({ title}) => ({ title }).title === name // 
  const directors = (dataGhibliJs).filter(filterHayao)
  return directors
}

/*ESTRUCTURA MAP
.map (funcion (_, posicion, arrayoriginalsobreelqueseinvocalafuncion) 
Guión BAajo si no nosinteresan los primeros parametros, los posteriores solo se omiten
 .map (funcion (numero, posicion, arrayoriginalsobreelqueseinvocalafuncion){})
  const titleDirector = directors.map(({ title }) => { return ({ title }).title })
return(titleDirector)
 */

//OPERACIONES CON RT DE FILMS- PROMEDIO DE RT ,MAX Y MIN 

const allRt = dataGhibliJs.map(x => Number(x.rt_score));

const minRt = Math.min(...allRt);
console.log(minRt)
var maxRt = Math.max(...allRt);
console.log(maxRt)

const acumular = (acumulador, numero) => acumulador + numero
let totalAverageRt = (allRt.reduce(acumular)) / allRt.length
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
