const camposFormulario = document.querySelectorAll("[required]"); //Selecting and saving all elements HTML that have a required attribute 

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    })
});

function verificarCampo (campo){
    console.log("Cambio", campo.name);
}