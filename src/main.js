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
dataghibli();
function dataghibli(){
fetch("data/ghibli/ghibli.json")
.then (respuesta=> respuesta.json())
.then(data=> {
    let name= (data.films['0'].title)
    let imagen=(data.films['0'].poster)
    //console.log(name);
    document.getElementById('titulo').innerHTML = name
    document.getElementById('exp0').innerHTML = imagen
    
    })

    
}
//}    for (var i = 0; i < data.length; i++)
/*
*/
