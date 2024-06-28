import { conexionApi } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){

    evento.preventDefault();

    const datosBusqueda = document.querySelector('[data-busqueda]').value;
    const busqueda = await conexionApi.buscarVideo(datosBusqueda);

    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild){
        lista.removeChild(lista.firstChild); //Removing child elements until theres none
    }

    busqueda.forEach(video => {
        lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen));
    });

    if(busqueda.length == 0){
        lista.innerHTML = `<h2 class="mensaje__titulo"> No fueron encontrados elementos para ${datosBusqueda} </h2>`
    }

    //console.log(busqueda);
}

const boton = document.querySelector("[data-boton-busqueda] ");

boton.addEventListener('click', (evento)=> {
    filtrarVideo(evento)
})