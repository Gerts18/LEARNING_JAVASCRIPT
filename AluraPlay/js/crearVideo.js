import { conexionApi } from "./conexionAPI.js";

const formulario  = document.querySelector('[data-formulario]');

async function crearVideo(e){
    e.preventDefault(); //Avoiding default execution of the form 

    const titulo = document.querySelector('[data-titulo]').value; //Getting submits value
    const url = document.querySelector('[data-url]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    const descripcion = Math.floor(Math.random * 10).toString();

    await conexionApi.enviarVideo(titulo, descripcion, url, imagen); //Sending data

    window.location.href="../pages/envio-concluido.html";
}

formulario.addEventListener('submit', (evento) => {
    crearVideo(evento);
} )