//Importamos el css desde la carpeta donde se encuentra
import './css/style.css';

//Importamos las funciones que se necesitan para que funcione la aplicación
import { crearVectorImagenes } from './js/imagenes-page';
import { diaNocheModo } from './js/daynight-control';

//Elementos del DOM
const lupa = document.getElementById( 'lupa' );


//--------------------- EVENTOS ---------------------
//Evento que controla cuando la página se acaba de cargar, este evento llamar a la función que controla el color de la página
window.addEventListener( 'load', diaNocheModo );

//Evento que al pulsar enter en el input inicia la petición a la API
input.addEventListener( 'keyup' , ( evento ) => {
    if( evento.key === 'Enter') {
        crearVectorImagenes();        
    } 
})
//Evento que al pulsar la lupa en el input inicia la petición a la API
lupa.addEventListener( 'click', () => {
    crearVectorImagenes();
})
