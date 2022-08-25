import ghibli from './data/ghibli/ghibli.js';

export const allcharacters = [];
export const alltitle=[];
//ACESO A LA DATA JS Y EXTRAIGO CHARACTERS AND TITLE
export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const films= data.title
  alltitle.push(films)
  const character = data.people
  character.forEach(p => {
    allcharacters.push(p)
  });
});

/*
export const dataFetch=[]
dataFetch.forEach(p=>{
  console.log(p.title)
})
dataAccess()
function dataAccess() {
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(data => {
        const dataAll = data.films
        dataFetch.push(dataAll)
      })
    })
  return dataghibli
}
*/
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

/*
const female= filtering('gender', 'Female')
const male= filtering('gender', 'Male')
  male.sort ((o1,o2 )=>o1.name>o2.name ? 1:-1);
  female.sort((o1,o2 )=>o1.name<o2.name ?1:-1);
export const filtering=(allCharacters,propiedad,valor)=>{
return allCharacters.filter(p=>p[propiedad] == valor)
}
*/
/*
const rtMovies= dataGhibliJs.map(rt=> ({
  titleAndRt: ${dataGhibliJs.title} ${dataGhibliJs.rt_score}
}))

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

//PASOS A SEGUIR CUANDO QUIERO ELIMINAR DATA REPETIDA
const allDataGhibli = dataGhibliJs.map(({ director }) => { return ({ director }).director })//1.hago un Array con los elementos a analizar de dataJS
const director = [];            // 2. creo un array vacio donde llegaran los datos ya sin repetir 
allDataGhibli.forEach((elemento) => {   // 3. sustituyo el elemento a iterar "allDirector" 
  if (!director.includes(elemento)) {
    director.push(elemento);
  }
});

//did you know
const datosCuriosos1= allcharacters.length 
const datosCuriosos2= alltitle.length
//const diyouKnow3=
console.log(datosCuriosos2)
console.log(datosCuriosos1)



//console.log(director); //4. festejas bailando en circulos

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

    