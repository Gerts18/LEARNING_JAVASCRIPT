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

const tiposError = [ 
    "valueMissing", 
    "typeMissmatch",
    "patterMissmatch",  
    "tooShort",
    "customError"
]

const mensajes = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
    },
    identificacion: {
      valueMissing: "El campo identificación no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un número de identificación válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    cuil: {
      valueMissing: "El campo cuil/cuit no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
      customError: "El cuil/cuit ingresado no existe.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    fecha_nacimiento: {
      valueMissing: "El campo fecha nacimiento no puede estar vacío.",
      customError: "Debes ser mayor de 18 años para registrarte.",
    },
    terminos: {
      valueMissing: "Debes aceptar los términos antes de continuar.",
    },
  };

function verificarCampo (campo){ //Function asociated to the event
    if(campo.name == "cuil" && campo.value.length >= 11){
        esUnCuil(campo)
    }
    if(campo.name == "fecha_nacimiento" && campo.value != ""){
        esMayorDeEdad(campo)
    }

    console.log(campo.validity) //To know properties of validation in my forms inputs
}