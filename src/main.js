import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/*
loadDoc();

function loadDoc() {
  const xhttp = new XMLHttpRequest();  //Crear el objeto XMLHttpRequest:
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "data/ghibli/ghibli.json");  //xhr.open(method, URL, [async, user, password])
  xhttp.send();
}
*/
dataghibli(); //llamando a la funcion
function dataghibli() { //declarando funcion
  fetch("data/ghibli/ghibli.json")// a fetch le undicas la url o la ubicacion del archivo
    .then(respuesta => respuesta.json()) //promesa 1 le indicas en que lenguaje esta el archivo
    .then(data => {  
// empiezas a manipular.... aca puedes hacer un console.log para que veas lo que te arroja de data y te sea mas claro porque vienen los siguientes pasos
      let name0 = (data.films['0'].title);
      let name1 = (data.films['1'].title);
      let director = (data.films[7]);

      document.getElementById('movie0').innerHTML = name0
      document.getElementById('movie1').innerHTML = name1
      console.log(name1);
      console.log(name0);
      console.log(director)


      for (let i = 0; i < data.films.length; i++) { //ciclo for itera desde el elemento 0; hasta el largo del arreglo (-length),; y va de uno en uno (i++)
        let titleMovie = (data.films[i].title)    //creas una variable para poder manipular despues lo que te arroja dandole la ruta de acceso a la data
        console.log(titleMovie);
      }

      for (let i = 0; i < data.films.length; i++) {
        let posterMovie = (data.films[i].poster)
        console.log(posterMovie);
      }

      for (let i = 0; i < data.films.length; i++) {
        const img = document.createElement('img');
        img.src = data.films[i].poster["original"]//.url
        img.className="mb-3"
        document.getElementById("images").appendChild(img)
      }

    });

  // const image= document.createElement("img");
  //image.src= "data[i].films[i].poster"


  //document.getElementById("movie1").innerHTML = '<img src="${data.films['1'].poster">';


  //name.forEach(p => {
  // console.log (p)
  // });



}




/*
dataAccess();

async function  dataAccess(){
  const dataghibli = await fetch ("data/ghibli/ghibli.json");
  const data= await dataghibli.json
  data.forEach(p => {
    console.log(p");
  });

      for (let i=0; i<data.films.length; i++)
     let dataAccess= (data.films[i])
    console.log(dataAccess);


     let element = document.getElementById('element')
     element.innerHTML=`<p>${data.films}</p><p>${data.films.people.director}</p>`
     ;
     console.log (dataghibli)
}*/
//}    for (var i = 0; i < data.length; i++)
/*
*/
