
//import { Chart } from "chart.js";
import { dataGhibliJs, directors, peopleUnspecified, allcharacters, filtering, orderAZ, orderZA } from "./data.js";

//--------------------FETCH-----------------AllMoviesZA
dataAccess()
function dataAccess() {
  const column2 = document.querySelector('.ColumnTwo');
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(data => {
        const dataAll = orderZA(data.films)
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
//--------------------DIRECTOR-----------------title and Date
const renderDirector = (directorName, columnDirectorSelector) => {

  const movies = filtering(dataGhibliJs, 'director', directorName)
  movies.forEach(d => {
    const columnDirectors = document.querySelector(columnDirectorSelector);

    const card = document.createElement('div');
    card.className = "card";
    const title = document.createElement('h2')
    title.textContent = d.title;
    const date = document.createElement('h6')
    date.textContent = d.release_date;

    card.append(title, date)
    columnDirectors.appendChild(card);
  })
}
directors.forEach(director => renderDirector(director.name, director.selector))

//--------------------GENDER-----------------SHOW
function showGender(item) {

  const card = document.createElement('div');
  card.className = "card";
  const img = document.createElement('img');
  img.src = item.img
  const name = document.createElement('h2')
  name.textContent = item.name

  card.append(img, name)
  return (card);
}
//--------------------DIRECTOR-----------------title and Date
window.addEventListener('load', () => {
  const columnCharacters = document.querySelector(".allCharacters");
  const columnMale = document.querySelector(".male");
  const columnFemale = document.querySelector(".female");
  const columnUnspecified = document.querySelector(".unspecified")
  const female = orderAZ(filtering(allcharacters, 'gender', 'Female'))
  const male = orderZA(filtering(allcharacters, 'gender', 'Male'))
  const other = orderAZ(peopleUnspecified)
  male.map(showGender).forEach(element => columnMale.append(element))
  female.map(showGender).forEach(element => columnFemale.append(element))
  other.map(showGender).forEach(element => columnUnspecified.append(element))
  allcharacters.map(showGender).forEach(element => columnCharacters.append(element))
})

//--------------------DOM-----------------
const btnMovies = document.getElementById("movies");
btnMovies.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "grid";
  document.querySelector(".all").style.display = "none"
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
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
  document.querySelector(".allPeopleMovies").style.display = "none";
});

const btnAAllCharacters = document.getElementById("allCharacters");
btnAAllCharacters.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "none";
  document.querySelector(".allPeopleMovies").style.display = "grid";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".male").style.display = "none";
  document.querySelector('.allCharacters').style.display = "grid";
  document.querySelector(".female").style.display = "none";
  document.querySelector(".unspecified").style.display = "none";
});

const btnMaleCharacters = document.getElementById("male");
btnMaleCharacters.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "none";
  document.querySelector(".allPeopleMovies").style.display = "grid";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".male").style.display = "grid";
  document.querySelector('.allCharacters').style.display = "none";
  document.querySelector(".female").style.display = "none";
  document.querySelector(".unspecified").style.display = "none";
});

const btnFemaleCharacters = document.getElementById("female");
btnFemaleCharacters.addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "none";
  document.querySelector(".allPeopleMovies").style.display = "grid";
  document.querySelector(".startingScreen").style.display = "none";
  document.querySelector(".male").style.display = "none";
  document.querySelector('.allCharacters').style.display = "none";
  document.querySelector(".female").style.display = "grid";
  document.querySelector(".unspecified").style.display = "none";
});

const btnUnspecifiedCharacters = document.getElementById("s/a");
btnUnspecifiedCharacters.addEventListener("click", function (e) {
  e.preventDefault()
  manejoDom([".allPeopleMovies", ".unspecified"],[".gridAll",".all",".startingScreen",".male",'.allCharacters',".female"])
  // document.querySelector(".gridAll").style.display = "none";
  // document.querySelector(".all").style.display = "none";
  // document.querySelector(".allPeopleMovies").style.display = "grid";
  // document.querySelector(".startingScreen").style.display = "none";
  // document.querySelector(".male").style.display = "none";
  // document.querySelector('.allCharacters').style.display = "none";
  // document.querySelector(".female").style.display = "none";
  // document.querySelector(".unspecified").style.display = "grid";
});

function manejoDom(clasesMostrar, classOcultar){ 
  for ( let i=0; i<classOcultar.length; i++){
    document.querySelector(i).style.display='none';
  }

  for ( let i=0; i<clasesMostrar.length; i++){
    document.querySelector(i).style.display='grid';
  }
}

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

/*
const graphCharacters=document.getElementById('graphCharacters')
const chart= new Chart(graphCharacters, {type: 'doughnut',data})
  
  const data={
labels: ['MUJERES', 'HOMBRES', 'SIN ESPECIFICAR'],
    datasets: [{
      label: 'PERSONAJES',
      data: [30, 5, 31],
      backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)'],
    }]
  }

*/
