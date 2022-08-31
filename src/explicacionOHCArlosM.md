
/// cargar la pagina -- Mo se que significa esto

----------------------MAIN---------------------------------
importo las funciones que emplearé (filtrado, data, sort, y search)desde data.js

HU1
con fetch
una 'nueva' forma de consumir apis con pluss misteriorosos que no se usar como almacenar cache, leer respuestas de transmición.. etc.
Fetch funciona con promesas 'then'
--------------FETCH-----------------------------
en main-fetch:
declaro la función
declaro una variable con el elemento HTML donde pintare la data... aun no le digo que lo haga solo lo llamo... porque lo voy a emplear... al parecer es mala  practica dejar variables flotando por el mundo requieren estar donde  se emplean
solicitud de extración de la info en la API
especifico el lenguaje en el que se encuentra la API
ordeno esa información con sort jaja XD
    -sort es una funcion que esta en data que ordena alfabeticamente, segun la key que especifiques... en este caso title
despues itero sobre cada uno de sus elementos para que posteriormente
de la instruccion de pintar estos datos en el DOM en la seccion de columnTwo
Como se da este pintar:
le pido con create Element que genere un DIV de clase card
y se div le digo que va a tener un elemento H4 y una IMG por cada uno de los elementos que se van iterando

y los coloca como un append, en el orden de van pintandose
appendChild
Despues con appendChild le dices  donde colocar este grupo de divs que corresponde a la clase 'x'

**El Element.append()método inserta un conjunto de Nodeobjetos u objetos de cadena después del último hijo del Element. TextLos objetos de cadena se insertan como nodos equivalentes .

Diferencias de Node.appendChild():

Element.append()le permite agregar también objetos de cadena, mientras que Node.appendChild()solo acepta Node objetos.

Sintaxis
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)

-----------------------------SEGUNDA FUNCION--------------------------
Declaro una variable que contiene una funcion anonima flecha que recibe  dos parametros:
-directorName
-columnDirectorSelector
la cual  genera un variable -movies- que filtra por tres parametros; data, key, directorName 
es ta variable que contiene el resultado del filtrado le aplico un forEach para ir iterand en sus elemntos y 
me pinte la data el columndiretorSelector.
atraves de un query selector llamo este elemento para arrojar ahi los divs...

PUNTO importante
esto que me trae querySelector no es solo un espacio en el html sino un conjunto de espacios a lso que yo enumero atraves de un objeto que hice en data donde especifica que espacio es para cada directorname

Pinto la data creando divs img texto que va a un append y luego a un childappend

---duda porque hasta abajo esta linea---
 se que si la pongo antes pues no tendria con que trabajr la función pero igual no tengo tan claro esta parte
directors= es el objeto que tengo en data de ahi me trae las keys de name y selector
directors.forEach(director => renderDirector(director.name, director.selector))

----------------gender shower----------------------
funcion para pintar la data

window....arriba de document o mejor dicho document dentro de window
load El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.

-Enlisto los elemetos y objetos filtrados que empleare en la función
-Despues a estos objetos les aplico.map  para recorrer cada uno delos elemntos y generar un nuevo arreglo donde se les aplico a funcion 'showGender'
-con forEach itero en cada uno de los elementos para mandarlos a la zona del html correspondiente -selector- como un append.


---------------------DOM----------------------
genero una funcion que recibe dos parametros divs que se ocultan y divs que se muestran
atraves de un for le digo que los elementos que se se encuentren en determinado parametro a o b se muestren o se oculten repectivamente

hice dos funciones similares pensando que en el futuro tambien ocupare el display flex


**El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;


------------------DOM directores------------
funcion para ocultar imagenes del director desde su target
primera parte
const renderDirectorImage = (directorName) => {
  const director = directors.filter(director => director.name === directorName)[0]
  return `<img id="imgHayao" src="${director.imgSrc}" alt="${director.name}" style="display: block;">`;
}

la funcion anonima de flecha tiene un parametro que es directorName la cual creando un nuevo array filtro el objeto de datajs en funcion de su key 'name' y le digo que itere en cada uno de esos elementos para que me regrese la imagen que corresponda  con determinado display.

----ACA  tengo duda de como es que le digo que itere, porque tiene un indice 0 pero no se de donde o porque O__o  ... bueno siendo menos dramaticos el 0 es porque esta en el primer elemento del arreglo haciendo la comparación y dando la estructura de tambien como se va  a cargar la imagen segun el director 


Despúes...
llamo el espacio donde aparecerá esa imagen
despues uso una cosa que se llama
querySelectorAll
trae todos los elementos de esa clase 
posteriormente los itero cada que se les hace click lafuncion que recibe un parametro se explora su target

TARGET = algo como caracteristicas del elemento

const directorSpaceRightElement = document.querySelector('.spaceRigth')

document.querySelectorAll('.directorNavItem').forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    const navsito = e.target
    const directorName = navsito.dataset.directorName
    directorSpaceRightElement.innerHTML = ""
    directorSpaceRightElement.innerHTML = renderDirectorImage(directorName)
  })
})



Crear elementos del HTML  que da estructura a la pagina:
- header, menú, espacio para presentar la información, footer.
- elmentos del header:  logo
- elementos del menu - 5 botones
- footer , fijar el footer



crear el header y mostrarlo
    crera una funcion que muestre el header 
crear el elemento de filtros y mostrarlo 
    - crear los eventos de filtro
    crear la funcion de filtrar que recibe poeliculas ytipo de filtro y valor del filtro y regresa un arreglo filtrado de peliculas 
        validar que las peliculas sean un arreglo 
        validar el tipo filtro 
        llamr metodo filter  de la data y compararlo contra el valor 

mostrar las cards 
    crear una funcion que recibe peliculas y retorna un arreglo de cartas 

- dar click a un filtro `
    eliminar cartas anterores
    mandar filtar 
    mostrar cartas

||||


