//Importamos el proveedor de imágenes
import { cargarImagenesAPI } from './http-provider';

//Tengo que llamar a la función que dibuja el HTML
export const crearVectorImagenes = async() => {
    const resultados = await cargarImagenesAPI();
    //Recibimos la información en un vector y de allí queremos extraer la dirección de las imágenes, está dirección será la que que utilizaremos
    //para establecer el valor en el CSS
    const imagenesNodo = [];
    resultados.forEach( ( resultado, key ) => {
        imagenesNodo[ key ] = document.createElement( 'div' );
        imagenesNodo[ key ].classList.add( 'img' );
        imagenesNodo[ key ].style.backgroundImage = `url( ${ resultado.urls.small } )`;
        imagenesNodo[ key ].addEventListener( 'dblclick', () => {
            //Buscamos que al hacer doble clic sobre cada una de las imágenes, se abra la imagen en su tamaño original para poder descargarla
            //El objeto json que recibimos tienes una propiedad links y dentro otra download que realiza esa acción
            window.open( resultado.links.download, '_blank' )
        })
        imagenes.appendChild( imagenesNodo[ key ] );
    });
}