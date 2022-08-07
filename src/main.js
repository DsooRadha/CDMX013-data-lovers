//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

const right = document.querySelector(".ColumnTwo")

dataghibli(); //llamando a la funcion
function dataghibli() { //declarando funcion
  fetch("data/ghibli/ghibli.json")// a fetch le undicas la url o la ubicacion del archivo
    .then(response => response.json()) //promesa 1 le indicas en que lenguaje esta el archivo
    .then(data => {
      // empiezas a manipular.... aca puedes hacer un console.log para que veas lo que te arroja de data y te sea mas claro porque vienen los siguientes pasos
    /*  let name0 = (data.films['0'].title);
      let name1 = (data.films['1'].title);
      let director = (data.films[7]);
      document.getElementById('movie0').innerHTML = name0
      document.getElementById('movie1').innerHTML = name1
      console.log(name1);
      console.log(name0);
      console.log(director)*/

      const dataHU1=''

      for (let i = 0; i < data.films.length; i++) { //ciclo for itera desde el elemento 0; hasta el largo del arreglo (-length),; y va de uno en uno (i++)
        const titleMovie = (data.films[i].title)    //creas una variable para poder manipular despues lo que te arroja dandole la ruta de acceso a la data
        //  console.log(titleMovie);
       // dataHU1.push(titleMovie)

        const card = document.createElement("div") //codigo para crear una tarjeta
          card.className = "card"
        const title = document.createElement("h3")
        title.textContent = titleMovie
        card.append(title)
        right.append(card)
      }
        for (let i = 0; i < data.films.length; i++) {
          const posterMovie = (data.films[i].poster)
          // console.log(posterMovie);
         
       // dataHU1.push(posterMovie);

          const card = document.createElement("div")
          card.className = "card"
          const img = document.createElement("img")
          img.src = posterMovie
         
          card.append(img)
          right.append(card)
        }
      console.log (dataHU1)
    });

  /*  for (let i = 0; i < data.films.length; i++) {
      const img = document.createElement('img');
      img.src = data.films[i].poster["original"]//.url
      img.className="mb-3"
      document.getElementById("images").appendChild(img)
    }
*/

}
 
dataAccess();
function  dataAccess(){
  const dataghibli =  fetch ("data/ghibli/ghibli.json");
  const data=  dataghibli.json
  data.forEach(p => {
    console.log(p +'forEach');
  });
}