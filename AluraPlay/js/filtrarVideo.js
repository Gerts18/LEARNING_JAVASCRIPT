import { conexionApi } from "./conexionAPI.js";

async function filtrarVideo(evento){

    evento.preventDefault();

    const datosBusqueda = document.querySelector('[data-busqueda]').value;
    const busqueda = conexionApi.buscarVideo(datosBusqueda);

    console.log(busqueda);
}

const boton = document.querySelector("[data-boton-busqueda] ");

boton.addEventListener('click', (evento)=> {
    filtrarVideo(evento)
})