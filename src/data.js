import ghibli from './data/ghibli/ghibli.js';

export const allcharacters = [];
export const alltitle = [];
export const allrt=[];
export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const films = data.title
  alltitle.push(films)
  const rt=(data.rt_score +' ' + data.title)
  allrt.push(rt)
 //console.log(data.vehicles, data.title)
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
export const peopleUnspecified = allcharacters.filter(p => p.gender !== 'Female' && p.gender !== 'Male')

export const filtering = (allCharacters, propiedad, valor) => {
  return allCharacters.filter(p => p[propiedad] == valor)
}

export const orderAZ = (x) => x.sort((o1, o2) => o1.name > o2.name ? 1 : -1);
export const orderZA = (x) => x.sort((o1, o2) => o1.name < o2.name ? 1 : -1);
export const orderNumbers = (x) => x.sort((o1, o2) => o1.release_date - o2.release_date);

// const human= filtering (allcharacters, 'specie', 'Human')
// const eye_Color= filtering (allcharacters, 'eye_color', 'Grey')
// const hair_color= filtering (allcharacters, 'hair_color', 'Brown')
// console.log(hair_color)
// export const didyouKnow1 = allcharacters.length
// export const didyouKnow2 = alltitle.length
//const location= filtering (dataGhibliJs, 'specie', 'Human')
// console.log(dataGhibliJs)
// console.log(peopleUnspecified.length)
//console.log(orderNumbers(dataGhibliJs))
const formulario = document.querySelector('#formulario');
export const search = () => {
  const texto = formulario.value.toLowerCase()
  for (let dataGhibli of dataGhibliJs) {
    let title = dataGhibli.title.toLowerCase()
    if (title.indexOf(texto) !== -1) {
      resultado.innerHTML +=
        `<li>${dataGhibli.title}-${dataGhibli.poster} </li>`
    }
  }
  if(resultado.innerHTML=== ''){
    resultado.innerHTML +=`<li>No se ha encontrado su busqueda...</li>`
  }
}
const resultado = document.querySelector('#resultado');