import esUnCuil from "./ValidarCuil.js"; //Importing my function

const camposFormulario = document.querySelectorAll("[required]"); //Selecting and saving all elements HTML that have a required attribute 

camposFormulario.forEach((campo) => { //Itereating each element and adding them an event
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    })
});

function verificarCampo (campo){ //Function asociated to the event
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
}