//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

const right = document.querySelector(".ColumnTwo")
dataAccess();
function dataAccess() {
  const dataghibli = fetch("data/ghibli/ghibli.json").then (res=> {
  res.json()
      .then (dataaaa => {
      //console.log(dataaaa)
      const data = dataaaa.films
  data.forEach(p => {
    console.log(p);
    const titleMovie = (p.title) 
    console.log(titleMovie)
    const posterMovie = (p.poster)
    console.log(posterMovie)
   /* OCREATEELEMENT*/
    const card = document.createElement("div") //codigo para crear una tarjeta
    card.className = "card"
    const img = document.createElement("img")
    img.src = posterMovie
    const title = document.createElement("h3")
    title.textContent = titleMovie

    card.append(img,title)
    right.appendChild(card) //IGUAL PUEDE SER append
    
/*CREATEELEMENT Y SETATRIBUTE INNERHTML
    let column2 = document.querySelector(".ColumnTwo");    //buscamos el elemento con clase .ColumnTwo y lo guardamos en una variable
    let div = document.createElement("div");    //creamos un elemento div por cada elemento del array
    div.setAttribute("id", "card");    //le asignamos el id ‘card’ a cada div
    div.innerHTML = `<h4> ${p.title}</h4>`;   //le agregamos el título de cada película con interpolación
    div.innerHTML = `<h4> ${p.title}</h4> <img class=“poster”src=“${p.poster}“>`;
    column2.appendChild(div);    //agregamos ese div creado dentro del div con clase ColumnTwo
*/
  });
    })
  });
  console.log (dataghibli);
  
}
