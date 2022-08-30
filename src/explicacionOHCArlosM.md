
/// cargar la pagina -- Mo se que significa esto

MAIN
importo las funciones que emplearé (filtrado, data, sort, y search)desde data.js

HU1
con fetch
una 'nueva' forma de consumir apis con pluss misteriorosos que no se usar como almacenar cache, leer respuestas de transmición.. etc.
Fetch funciona con promesas 'then'

en main-fetch:
declaro la función
declaro una variable con el elemento HTML donde pintare la data... aun no le digo que lo haga solo lo llamo... porque lo voy a emplear... al parecer es mala  practica dejar variables flotando por el mundo requieren estar donde  se emplean
solicitud de extración de la info en la API
especifico el lenguaje en el que se encuentra la API



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


