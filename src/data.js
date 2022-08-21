import ghibli from './data/ghibli/ghibli.js';

const allTitlesMovies = [];
console.log(allTitlesMovies);

export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const character = data.people
  const titleMovies = data.title
  allTitlesMovies.push(titleMovies)
  character.forEach(p => {
    console.log([data.title, p.name, p.img])
  });
});


export const directors = [
  { name: "Isao Takahata", selector: '.columnIsao', imgSrc: "./images/isao.png" },
  { name: "Hayao Miyazaki", selector: '.columnHayao', imgSrc: "./images/hayo.png" },
  { name: "Yoshifumi Kondō", selector: '.columnYoshifumi', imgSrc: "./images/yoshifumi.png" },
  { name: "Hiroyuki Morita", selector: '.columnHiroyuki', imgSrc: "./images/hiroyuki.png" },
  { name: "Gorō Miyazaki", selector: '.columnGoro', imgSrc: "./images/Goro.png" },
  { name: "Hiromasa Yonebayashi", selector: '.columnHiromasa', imgSrc: "./images/Hiromasa.png" },
]

export const titleData = [
  { name: 'Castle in the Sky', selector: '.columnCastle' },
  { name: 'My Neighbor Totoro', selector: '.columnTotoro' },
  { name: "Kiki's Delivery Service", selector: '.columnKikis' },
  { name: 'Grave of the Fireflies', selector: '.columnGrave' },
  { name: 'Only Yesterday', selector: '.columnOnly' },
  { name: 'Porco Rosso', selector: '.columnPorco' },
  { name: 'Pom Poko', selector: '.columnPom' },
  { name: 'Whisper of the Heart', selector: '.columnWhispe' },
  { name: 'Princess Mononoke', selector: '.columnPrincess' },
  { name: 'My Neighbors the Yamadas', selector: '.columnYamadas' },
  { name: 'Spirited Away', selector: '.columnSpirited' },
  { name: 'The Cat Returns', selector: '.columnTheCat' },
  { name: "Howl's Moving Castle", selector: '.columnHowl' },
  { name: 'Tales from Earthsea', selector: '.columnTales' },
  { name: 'Ponyo on the Cliff by the Sea', selector: '.columnPonyo' },
  { name: 'The Secret World of Arrietty', selector: '.columnArrietty' },
  { name: 'From Up on Poppy Hill', selector: '.columnPoppyhill' },
  { name: 'The Wind Rises', selector: '.columnThewind' },
  { name: 'The Tale of the Princess Kaguya', selector: '.columnTale' },
  { name: 'When Marnie Was There', selector: '.columnMarnie' },
]

export const filterDirector = function (name) { //function (data,directorName)
  const filterAllDirectors = ({ director }) => ({ director }).director === name // 
  const directors = (dataGhibliJs).filter(filterAllDirectors)
  return directors
}

export const arrayTotoro = []
const character = dataGhibliJs.filter(p => p.title == "My Neighbor Totoro")
character.forEach(p => {
  const people = p.people
  people.forEach(character => {
    arrayTotoro.push(character)
  })
})

export const arrayCastleSky = []
const castle = dataGhibliJs.filter(c => c.title === 'Castle in the Sky')
castle.forEach(c => {
  const people = c.people
  people.forEach(character => {
    arrayCastleSky.push(character)
  })
})


;



export const filterFilmsPeople = function (allTitlesMovies) {
  const character = dataGhibliJs.filter(p => p.title === allTitlesMovies)
  character.forEach(p => {
    const people = p.people
    people.forEach(character => {
      return character
  
    })
  })
};



//PASOS A SEGUIR CUANDO QUIERO ELIMINAR DATA REPETIDA
const allDataGhibli = dataGhibliJs.map(({ director }) => { return ({ director }).director })//1.hago un Array con los elementos a analizar de dataJS
const director = [];            // 2. creo un array vacio donde llegaran los datos ya sin repetir 
allDataGhibli.forEach((elemento) => {   // 3. sustituyo el elemento a iterar "allDirector" 
  if (!director.includes(elemento)) {
    director.push(elemento);
  }
});
//console.log(director); //4. festejas bailando en circulos
  //  console.log(arrayAllPeople)

/*ESTRUCTURA MAP
.map (funcion (_, posicion, arrayoriginalsobreelqueseinvocalafuncion)
Guión BAajo si no nosinteresan los primeros parametros, los posteriores solo se omiten
 .map (funcion (numero, posicion, arrayoriginalsobreelqueseinvocalafuncion){})
  const titleDirector = directors.map(({ title }) => { return ({ title }).title })
return(titleDirector)
 */

//OPERACIONES CON RT DE FILMS- PROMEDIO DE RT ,MAX Y MIN 
/*
const allRt = dataGhibliJs.map(x => Number(x.rt_score));

const minRt = Math.min(...allRt);
console.log(minRt)
var maxRt = Math.max(...allRt);
console.log(maxRt)

const acumular = (acumulador, numero) => acumulador + numero
let totalAverageRt = (allRt.reduce(acumular)) / allRt.length
console.log(totalAverageRt);
*/
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

const characterFemme = data.filter(function(el){
  return el.age<25 &&
  el.height>=170 ;
});
console.log(extract);
*/

