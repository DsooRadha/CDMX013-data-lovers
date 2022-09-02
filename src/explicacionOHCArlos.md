
/// cargar la pagina -- Mo se que significa esto
una 'nueva' forma de consumir APIS con plus misteriorosos que no se usar; como almacenar cache, leer respuestas de transmición.. etc.
Fetch funciona con promesas 'then'
al parecer es mala  practica dejar variables flotando por el mundo requieren estar donde  se emplean
**El Element.append()método inserta un conjunto de Nodeobjetos u objetos de cadena después del último hijo del Element. TextLos objetos de cadena se insertan como nodos equivalentes .

Diferencias de Node.appendChild():

Element.append()le permite agregar también objetos de cadena, mientras que Node.appendChild()solo acepta Node objetos.

Sintaxis
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)

----------------------MAIN---------------------------------
importo las funciones que emplearé (filtrado, data, sort, y search)desde data.js

HU1 con fetch
--------------FETCH-----------------------------
declaro la función
declaro una variable con el elemento HTML donde pintare la data... aun no le digo que lo haga solo lo llamo... 
solicitud de extración de la info en la API
especifico el lenguaje en el que se encuentra la API json
ordeno esa información con sort 
    -sort es una funcion que esta en datajs que ordena alfabeticamente, segun la key que especifiques... en este caso title
itero sobre cada uno de sus elementos para que posteriormente
de la instruccion de pintar estos datos en el DOM en la seccion de columnTwo

-Como se da este pintar:
    le pido con create Element que genere un DIV de clase card
    y se div le digo que va a tener un elemento H4 y una IMG por cada uno de los elementos que se van iterando
    los coloca como un append, en el orden de van pintandose
    con appendChild le dices  donde colocar este grupo de divs que corresponde a la clase 'x'

-----------------------------SEGUNDA FUNCION--------------------------
Declaro una variable que contiene una funcion anonima flecha que recibe  dos parametros:
-directorName
-columnDirectorSelector
la cual  genera una variable -movies- que filtra por tres parametros; data, key, directorName 
esta variable que contiene el resultado del filtrado le aplico un forEach para ir iterando en sus elemntos y 
me pinte la data el columndiretorSelector.
a través de un query selector llamo este elemento para arrojar ahi los divs...

PUNTO importante
esto que me trae querySelector no es solo un espacio en el html sino un conjunto de espacios a los que yo enumero a través de un objeto que hice en data donde especifica que espacio es para cada directorname

Pinto la data creando divs img texto que va a un append y luego a un childappend

///////////////---duda porque hasta abajo esta linea---
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
**El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

posteriormente los itero cada que se les hace click lafuncion que recibe un parametro se explora su target

TARGET = algo como caracteristicas del elemento

Event.target
La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento. La propiedad event.target puede ser usada para implementar una delegación del evento.

dataSEt
Un Dataset no es más que un conjunto de datos tabulados en cualquier sistema de almacenamiento de datos estructurados.

'  const directorName = navsito.dataset.directorName'

entiendo que acá  lo que estoy haciendo es que estoy ligando el el click al boton correspondiente con un valor --nombre del director a mi base de datos de datajs.. para que lo relaccione con directorName

despues borro lo que hay en ese div -spaceRigth para que se funcion de pintar la img del director recibiendo el parametro director Name   enlazar sería la palabra para entender esta sección.

document.querySelectorAll('.directorNavItem').forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    const navsito = e.target
    const directorName = navsito.dataset.directorName
    directorSpaceRightElement.innerHTML = ""
    directorSpaceRightElement.innerHTML = renderDirectorImage(directorName)
  })

//-----------------showSearch----------------

Defino los elementos del dom que ocuparé para esta función;input, btn, espacio donde imprimir
genere una variable con el valor  de lo que el usuario introduce 
luego genero una variable que introduce la funcion search definida en data js - donde se especifican dos parametros... la data con la en la que se realiza la busqueda y la variable que almacena el valor que el usuario ingreso al input...
Agrego un inner HTML vacio para que cada que se haga una busqueda se limpie.... y no sean acumulativas

despues mando a pintar la dava con div, y accediendo desde su key, genero un append y luego ese conjunto lo mando a una append child en una sección de mi html
Agrego un if para contemplar los casos que no aparescan en mi data 



--------------------------------------------DATA-----------------------------------------
importo la data con la que voy a trabajar

Accedo a ella con un forEach y extraigo los elementos que voy a ocupar(DAtos curiosos), sobre todo characters que es un objeto anidado. algunas de estas variables/objetos que extraigo con el metodo push las exporto para usarlas en main.
--------data extra que se creo en el proyecto O__o------------------
luego tengo un objeto que se creo para la sección de directores.
que consta de name del director, la parte del html donde se colocan esos datos (selector) y el archivo o url para acceder a la imagen que se asocia con determinado director.

FILTER---------------------------------
luego tengo un filtro para todos aquellos casos que no caen en mujer u hombre dentro de de los personajes

despues una funcion de filtrado que recibe tres parametros; data, propiedad y valor
genero una nueva variable dondealbergar esta funcion y describo como seria su funcionamiento --- aqui es la parte de construir una funcion pura que pueda realizar su accion independientemente del contexto solo cumpliendo con sus tres requisitos establecidos en los parametros.

 funciones SORT----------------------------
Luego hago unas funciones para sort AZ, ZA y numbers respectivamente.... igual sin usar valores, solo parametros indefinidos
 lo que hace sort es que compara el elemento 1 y el elemento dos, tu le especcificas si este es mayor o menor o que tipo de relacion existe entre ellos y en base a eso se acomodan... Con numeros saco el residuo de elemento 1- elemento 2 porque con los >< > me arrojaba algo raro apartir de 99

 especifico que sobre que key hago esta comparativa luego uso operadores ternarios ? si :sino para darles el valor de -1 y 1 como los requerimientos de sort especifican

 Funcion de busqueda------------------------
un filter en la data, y de ahi aplico con un if una funcion de busqueda de indexOf que lo que hace es:
a ese elemento que esto generando en filter, accedo a su key y lo vuelvo minusculas. de ahi con indexOf lo comparo, con el valor intruducido al input por el usuario que tambien pasa a minusculas 

!== -1
es parte de la estructura de indexOf  y retorno true or false...

Retorno esta variable donde se realiza la busqueda porque justo ese valor es el que empleare para pintar 
**Algo de duda en ese punto


--------HTML------------------
-title
-header:
con logo y btn de home
-barra de botones, ocualquier otra cosa; cinco btn
-pantalla inicial; en este caso genere seis pantallas para habitar este espacio dependiendo de la seccion
-footer, fijarlo

CSS
estilo a la pagina
definir background 
paleta de colores
revisar tendencias 
caracteristicas del usuario para que se adapten
responsive


TEner presente los OAS


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









investigacion de SPA, Windows History(state y ruta)
que es y como se usa

 boilerplate... porque no usar el esquema que se nos ha venido enseñando?

definir tematica... en base a su relevancia social o mayor cantidad de likes XD

prototipo de baja fidelidad para entender el flujo -partiend de la vision del mobile first

algo de pruebas de usabilidad
supongo que con figma? 

Definir primera HU1

USO de Rutas
USO de nodos con Create Element

¿Agregar eventos?


reación de cuenta de usuario e inicio de sesión

Login con Firebase:
Para el login y las publicaciones en el muro puedes utilizar Firebase
Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.
Validaciones:
Solamente se permite el acceso a usuarios con cuentas válidas.
No pueden haber usuarios repetidos.
La cuenta de usuario debe ser un correo electrónico válido.
Lo que se escriba en el campo (input) de contraseña debe ser secreto.
Comportamiento:
Al enviarse el formulario de registro o inicio de sesión, debe validarse.
Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.

Muro/timeline

Validaciones:
Al publicar, se debe validar que exista contenido en el input.
Comportamiento:
Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
Poder publicar un post.
Poder dar y quitar like a una publicación. Máximo uno por usuario.
Llevar un conteo de los likes.
Poder eliminar un post específico.
Pedir confirmación antes de eliminar un post.
Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
Al recargar la página debo de poder ver los textos editados.



