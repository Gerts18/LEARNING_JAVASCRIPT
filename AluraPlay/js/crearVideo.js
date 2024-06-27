
const formulario  = document.querySelector('[data-formulario]');

function crearVideo(e){
    e.preventDefault(); //Avoiding default execution of the form 

    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    const descripcion = Math.floor(Math.random * 10).toString();
}

formulario.addEventListener('submit', (evento) => {
    crearVideo(evento);
} )