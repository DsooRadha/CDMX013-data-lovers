import ghibli from './data/ghibli/ghibli.js';

export const allcharacters = [];
export const alltitle = [];
export const diyouKnow1 = allcharacters.length
export const diyouKnow2 = alltitle.length



//ACESO A LA DATA JS Y EXTRAIGO CHARACTERS AND TITLE
export const dataGhibliJs = (ghibli.films);
dataGhibliJs.forEach(data => {
  const films = data.title
  alltitle.push(films)
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

export const filtering=(allCharacters,propiedad,valor)=>{
  return allCharacters.filter(p=>p[propiedad] == valor)
  }

export const orderAZ = (x) => x.sort((o1, o2) => o1.name > o2.name ? 1 : -1);
export const orderZA = (x) => x.sort((o1, o2) => o1.name < o2.name ? 1 : -1);
 



