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
export const search2= (data, valor)=>{
  const searchFilter=data.filter(function(movie){
  if (movie.title.indexOf(valor.toLowerCase()) !== -1) {
    return  true
  }
    return false
  })
  return searchFilter
  }
  // const totoro= search(dataGhibliJs, 'a')
  // console.log(totoro)
  
 const spaceSearch = document.querySelector('#formSearch');
 export const search = () => {
   const texto = spaceSearch.value.toLowerCase()
   result.innerHTML = ""
    for (let dataGhibli of dataGhibliJs) {
     let title = dataGhibli.title.toLowerCase()
     if (title.indexOf(texto) !== -1) {
      result.innerHTML +=
       `<div class = "card">
         <img src="${dataGhibli.poster}"><h4> ${dataGhibli.title}</h4>
         </div>`
     }
    }
   for (let character of allcharacters) {
     let title = character.name.toLowerCase()
     if (title.indexOf(texto) !== -1) {
       result.innerHTML +=
       `<div class = "card">
         <img src="${character.img}"><h4> ${character.name}</h4>
         </div>`
     }
   }
   if(result.innerHTML==='' ||result.innerHTML===[0-9]){
     result.innerHTML +=`<h4>No se ha encontrado su busqueda...</h4>`
 }
 }
 const result = document.querySelector('#result');