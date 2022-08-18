import { filterDirector, directors} from "./data.js";
//import { title,  filterPersonajes} from "./data.js";


dataAccess();
function dataAccess() {
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(dataaaa => {
        //console.log(dataaaa)
        const data = dataaaa.films
        data.forEach(p => {
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
}
 
const renderDirector = (directorName, columnDirectorSelector) => {
  const director = filterDirector(directorName)
  director.forEach(d => {
    let columnDirectors = document.querySelector(columnDirectorSelector);
    let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
    div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
    div.innerHTML = `<h2> ${d.title}</h2><h6>${d.release_date}</h6>`;
    columnDirectors.appendChild(div);
  })
}
directors.forEach(director => renderDirector(director.name, director.selector))

/*
const renderPersonajes = (filmsName, columntitleSelector) => {
  const title = filterPersonajes(filmsName)
  title.forEach(d => {
    let columnCharacter = document.querySelector(columntitleSelector);
    let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
    div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
    div.innerHTML = `<h2> ${d.name}</h2><h6>${d.gender}</h6>`;
    columnCharacter.appendChild(div);
  })
}
title.forEach(films => renderPersonajes(films.name, films.selector))
*/

const btnHayao = document.getElementById("Hayao");
btnHayao.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "grid";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector(".columnHiromasa").style.display= "none";
});

const btnIsao = document.getElementById("Isao");
btnIsao.addEventListener("click", function (e) {e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "grid";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector(".columnHiromasa").style.display= "none";
});

const btnYoshifumi = document.getElementById("Yoshifumi");
btnYoshifumi.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector(".columnYoshifumi").style.display= "grid";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector(".columnHiromasa").style.display= "none";
});


const btnHiroyuki = document.getElementById("Hiroyuki");
btnHiroyuki.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector(".columnHiroyuki").style.display= "grid";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector(".columnHiromasa").style.display= "none";
});


const btnGoro = document.getElementById("Goro");
btnGoro.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector(".columnGoro").style.display= "grid";
  document.querySelector(".columnHiromasa").style.display= "none";
});

const btnHiromasa = document.getElementById("Hiromasa");
btnHiromasa.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector(".columnHiromasa").style.display= "grid";
});


const btnFilms0 = document.getElementById("castle");
btnFilms0.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
});


const renderDirectorImage = (directorName) => {
  const director = directors.filter(director => director.name === directorName)[0]
  return `
    <img id="imgHayao" src="${director.imgSrc}" alt="${director.name}" style="display: block;">
  `;
}

const directorSpaceRightElement = document.querySelector('.spaceRigth')

document.querySelectorAll('.directorNavItem').forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    const navsito = e.target
    const directorName = navsito.dataset.directorName
    directorSpaceRightElement.innerHTML = ""
    directorSpaceRightElement.innerHTML = renderDirectorImage(directorName)
  })
})