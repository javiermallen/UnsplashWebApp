//Dirección y APIKEY de unsplash
const accessKeyUnsplash = 'Pon tu clave';
const APIUnsplash = ( valorQuery, APIkey ) => `https://api.unsplash.com/search/photos?query=${ valorQuery }&per_page=30&client_id=${ APIkey }`;

//Elementos que tengo que coger del DOM
const input             = document.getElementById( 'input' );
const imagenes          = document.getElementById( 'imagenes' );
const mensajeResultados = document.getElementById( 'no-resultados' );

//Función encargada de realizar la conexión a la API
export const cargarImagenesAPI = async() => {
    //Borramos los elementos que tenemos de la busqueda Anterior
    imagenes.innerHTML = '';
    try {
        const palabraBuscar = input.value;
        const resp = await fetch( APIUnsplash( palabraBuscar, accessKeyUnsplash ) );  
        if( !resp.ok ){
            throw 'No se ha podido realizar la conexión con el servidor'
        }
        const { results: resultados } = await resp.json();
        //Si no hay resultados muestro un promp
        if( resultados.length === 0 ) {
             mensajeResultados.classList.remove( 'hidden' )
        } else {
            mensajeResultados.classList.add( 'hidden' );
        }
        //Borro lo que hay en el input
        input.value = '';
        return resultados;
    } catch ( error ) {
        console.log( error );
    }
}