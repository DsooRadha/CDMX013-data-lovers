import ghibli from './data/ghibli/ghibli.js';

const allcharacters = [];

export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const character = data.people
  character.forEach(p => {
    allcharacters.push(p)
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

export const filterDirector = function (name) { //function (data,directorName)
  const filterAllDirectors = ({ director }) => ({ director }).director === name // 
  const directors = (dataGhibliJs).filter(filterAllDirectors)
  return directors
}

export const peopleUnspecified=allcharacters.filter(p=>p.gender !== 'Female' && p.gender !== 'Male' )

export const filtering=(propiedad,valor)=>{
const data= allcharacters.filter(p=>p[propiedad] == valor)
return data
}

export const male= filtering('gender', 'Male')
export const female= filtering('gender', 'Female')
export const directorsFiltering= filtering('hair_color', 'White') 

male.sort ((o1,o2 )=>o1.name>o2.name ? 1:-1);
console.log(male)

female.sort((o1,o2 )=>o1.name<o2.name ?1:-1);
console.log(female)
/*
female.sort((o1,o2 )=>{
  if (o1.name > o2.name){
    return -1
  } else if (o1.name < o2.name){
    return 1
  } else {
    return 0;
  }
})
*/
//console.log(male.sort(a,b)=> a.name<b.name)
//let printData=()


/*
const allcharacterImgGenderName = [];
console.log(allcharacterImgGenderName);

export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const character = data.people
  character.forEach(p => {
    allcharacterImgGenderName.push([p.gender, p.name, p.img])
  });
});*/


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

    