import esUnCuil from "./ValidarCuil.js"; //Importing my function
import esMayorDeEdad from "./validarEdad.js";

const camposFormulario = document.querySelectorAll("[required]"); //Selecting and saving all elements HTML that have a required attribute 

camposFormulario.forEach((campo) => { //Itereating each element and adding them an event
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    });
    campo.addEventListener('invalid', (evento) => { //Listening when theres an invalid propertie
        evento.preventDefault(); //Preventig my form from running regularly
    })
});

function verificarCampo (campo){ //Function asociated to the event
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo)
    }

    console.log(campo.validity) //To know properties of validation in my forms inputs
}