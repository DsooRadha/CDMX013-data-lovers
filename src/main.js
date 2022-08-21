import { filterDirector, directors, dataGhibliJs, arrayTotoro} from "./data.js";
//import { titleData, filterFilmsPeople, arrayCastleSky} from "./data.js";
//const gridAll=document.querySelector(".gridAll");
const column2 = document.querySelector('.ColumnTwo');
const columnCharacter = document.querySelector(".allCharacter");
const columnTotoro = document.querySelector(".columnTotoro");

dataAccess();
function dataAccess() {

  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(data => {
        //console.log(dataaaa)
        const dataAll = data.films
        dataAll.forEach(p => {
          const card = document.createElement('div');
          card.className = "card";
          const img = document.createElement('img');
          img.src = p.poster;
          const title = document.createElement('h4')
          title.textContent = p.title;

          card.append(img, title)
          column2.appendChild(card);
        });
      })
  });
  return (dataghibli)
}

/*
const renderFilms= (titleName, columMoviesSelector)=>{
  const movies= filterFilmsPeople (titleName)
  movies.forEach(people => {
let columnMovies= document.querySelector(columMoviesSelector)
  let div= document.createElement('div');
  div.setAttribute ('id', 'title');
  div.innerHTML= `<img class="poster"src="${people.img}"><h2>${people.name}</h2><h2> ${people.gender}</h2>`;
  columnMovies.appendChild(div);
})
}
titleData.forEach(titlefilms=>renderFilms (titlefilms.name, titlefilms.selector));
*/

const renderDirector = (directorName, columnDirectorSelector) => {
  // gridAll.innerHTML=''
  const director = filterDirector(directorName)
  director.forEach(d => {
    const columnDirectors = document.querySelector(columnDirectorSelector);

    const card = document.createElement('div');
          card.className = "card";
          const title = document.createElement('h2')
          title.textContent = d.title;
          const date = document.createElement('h6')
          date.textContent = d.release_date;
          
          card.append(title,date)
          columnDirectors.appendChild(card);
  })
}
directors.forEach(director => renderDirector(director.name, director.selector))

function printCharacters(dataGhibliJs) {
  dataGhibliJs.forEach(data => {
    const character = data.people
    character.forEach(p => {
          const card = document.createElement('div');
          card.className = "card";
          const img = document.createElement('img');
          img.src = p.img;
          const name = document.createElement('h2')
          name.textContent = p.name;
          const gender = document.createElement('h2')
          gender.textContent = p.gender;
          
          card.append(img, name, gender)
          columnCharacter.appendChild(card);
    })
  })
}
printCharacters(dataGhibliJs)

/*const columnTotoro=document.querySelector(".columnTotoro")
columnTotoro.innerHTML=''*/

const totoro= arrayTotoro.forEach(item => {
  const card = document.createElement('div');
  card.className = "card";
  const img = document.createElement('img');
  img.src = item.img
  const name = document.createElement('h2')
  name.textContent = item.name
  const gender = document.createElement('h2')
  gender.textContent = item.gender
  
  card.append(img, name, gender)
  columnTotoro.appendChild(card);
})
totoro
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

const btnMovies = document.getElementById("movies");
btnMovies.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "grid";
  document.querySelector(".all").style.display = "none"
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});

const btnHayao = document.getElementById("Hayao");
btnHayao.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "none";
  document.querySelector(".columnHayao").style.display = "grid";
  document.querySelector(".columnYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display = "none";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";

});

const btnIsao = document.getElementById("Isao");
btnIsao.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "grid";
  document.querySelector(".columnHayao").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display = "none";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});


const btnYoshifumi = document.getElementById("Yoshifumi");
btnYoshifumi.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "none";
  document.querySelector(".columnHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display = "grid";
  document.querySelector(".columnHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display = "none";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});


const btnHiroyuki = document.getElementById("Hiroyuki");
btnHiroyuki.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "none";
  document.querySelector(".columnHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display = "grid";
  document.querySelector(".columnGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display = "none";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});


const btnGoro = document.getElementById("Goro");
btnGoro.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "none";
  document.querySelector(".columnHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display = "grid";
  document.querySelector(".columnHiromasa").style.display = "none";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});

const btnHiromasa = document.getElementById("Hiromasa");
btnHiromasa.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector(".columnIsao").style.display = "none";
  document.querySelector(".columnHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display = "grid";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".moviesAll").style.display = "none";
});

const btnFilms0 = document.getElementById("prueba");
btnFilms0.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "none";
  document.querySelector(".moviesAll").style.display = "grid";
  document.querySelector(".startingScreen").style.display = "none";
});

const renderDirectorImage = (directorName) => {
  const director = directors.filter(director => director.name === directorName)[0]
  return `<img id="imgHayao" src="${director.imgSrc}" alt="${director.name}" style="display: block;">`;
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


