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
function dataghibli() { 
  fetch("data/ghibli/ghibli.json")
    .then(respuesta => respuesta.json())
    .then(data => {
      let name0 = (data.films['0'].title);
      let name1 = (data.films['1'].title);
     
    // for (let i=0; i<data.films.poster.length; i++)

    // const image= document.createElement("img");
    //image.src= "data[i].films[i].poster"



      document.getElementById('movie0').innerHTML = name0
      document.getElementById('movie1').innerHTML = name1
     
     console.log (name1);
     console.log(name0);
     //document.getElementById("movie1").innerHTML = '<img src="${data.films['1'].poster">';
   

     name.forEach(p => {
      console.log (p)
    });
    })
   
}




/*
dataAccess();

async function  dataAccess(){
  const dataghibli = await fetch ("data/ghibli/ghibli.json");
  const data= await dataghibli.json
  data.forEach(p => {
    console.log(p");
  });
}*/
//}    for (var i = 0; i < data.length; i++)
/*
*/
