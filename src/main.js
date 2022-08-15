//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

import { filterDirectorHayao, filterDirectorIsao, filterDirectorYoshifumi, filterDirectorHiroyuki} from "./data.js";

console.log(filterDirectorHiroyuki)
//import {filterDirectorHiroyuki} from "./data.js";
//console.log(titleDirector)

dataAccess();
function dataAccess() {
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(dataaaa => {
        //console.log(dataaaa)
        const data = dataaaa.films
        data.forEach(p => {
          console.log(p.title);    //imprime en la consola el título de cada pelicula del array
          let column2 = document.querySelector('.ColumnTwo');    //buscamos el elemento con clase .ColumnTwo y lo guardamos en una variable
          let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
          div.setAttribute('id', 'card');    //le asignamos el id 'card' a cada div
          //le agregamos el título de cada película con interpolación
          div.innerHTML = `<img class="poster"src="${p.poster}"><h4> ${p.title}</h4>`;
          column2.appendChild(div);    //agregamos ese div creado dentro del div con clase ColumnTwo
        });
      })
  });
  return (dataghibli)
  //console.log(dataghibli);
}

const directorHayao = filterDirectorHayao()
directorHayao.forEach(d => {
  let columnDirectors = document.querySelector('.columnHayao');
  let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
  div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
  div.innerHTML = `<h2> ${d.title}</h2><h6>${d.release_date}</h6>`;
  columnDirectors.appendChild(div);
})

/*const card= document.createElement('div') //PREGUNTAR PORQUE REEMPLAZABA LA INFO EN VEZ DE MOSTAR AMBOS
card.className= 'columnaDirectores'
const title= document.createElement('h3', 'p')
title.textContent= d.title,  d.release_date
//const date= document.createElement('p')
//title.textContent= d.release_date
 
// recibe un director
// regrsa un Div con la informacin
// const data = filtrado()
// inerHtml = data.map(getCard)
 
card.append(title)  
columnDirectores.append(card)*/

const directorIsao = filterDirectorIsao()
directorIsao.forEach(d => {
  let columnDirectors = document.querySelector('.columnIsao');
  let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
  div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
  div.innerHTML = `<h2> ${d.title}</h2><h6>${d.release_date}</h6>`;
  columnDirectors.appendChild(div);
})

const directorYoshifumi = filterDirectorYoshifumi()
directorYoshifumi.forEach(d => {
  let columnDirectors = document.querySelector('.columnYoshifumi');
  let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
  div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
  div.innerHTML = `<h2> ${d.title}</h2><h6>${d.release_date}</h6>`;
  columnDirectors.appendChild(div);
})



const btnDirectors = document.getElementById("directors");
btnDirectors.addEventListener("click", function (e) {
  e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
});
/*
document.querySelector(".dropdown").addEventListener ("click", function() {
  document.querySelector(".a").classList.toggle("show");
})*/