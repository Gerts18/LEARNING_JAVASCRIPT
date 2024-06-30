export default function esMayorDeEdad(campo){
    const fechaNacimiento = new Date(campo.value); // Creting a new object Date
    console.log(validarEdad(fechaNacimiento));
}

function validarEdad(fecha){
    const fechaActual = new Date();
    const FechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual >= FechaMas18;
}   