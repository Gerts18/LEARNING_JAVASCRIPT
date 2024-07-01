import esUnCuil from "./ValidarCuil.js"; //Importing my function
import esMayorDeEdad from "./validarEdad.js";
import { tiposError, mensajes } from "./customErrors.js"; //Importing my objects

const camposFormulario = document.querySelectorAll("[required]"); //Selecting and saving all elements HTML that have a required attribute 

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const listaRespuestas = {
        nombre: evento.target.elements["nombre"].value,
        email: evento.target.elements["email"].value,
        identificacion: evento.target.elements["identificacion"].value,
        cuil: evento.target.elements["cuil"].value,
        fecha_nacimiento: evento.target.elements["fecha_nacimiento"].value,
        terminos: evento.target.elements["terminos"].value
    }

    localStorage.setItem('registro', JSON.stringify(listaRespuestas)); //Saving data form user locally

    window.location.href = "./abrir-cuenta-form-2.html"
})

camposFormulario.forEach((campo) => { //Itereating each element and adding them an event
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    });
    campo.addEventListener('invalid', (evento) => { //Listening when theres an invalid propertie
        evento.preventDefault(); //Preventig my form from running regularly
    })
});

function verificarCampo (campo){ //Function asociated to the event

    let mensaje = "";

    campo.setCustomValidity("") //Quiting message if theres no problem with any validation

    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo)
    }
    //console.log(campo.validity) //To know properties of validation in my forms inputs

    tiposError.forEach((error) => {
        if(campo.validity[error]){
            mensaje = mensajes[campo.name][error]; //Accesing to my customise error message based on validity properties

            console.log(mensaje);
        }
    })

    const mensajeError = campo.parentNode.querySelector(".mensaje-error"); 
    const validarInputCheck = campo.checkValidity(); //To know if my input is valid or not 

    if(!validarInputCheck){
        mensajeError.textContent = mensaje;
    }else {
        mensajeError.textContent = ""
    }
}