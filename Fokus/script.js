//Starting a new proyect to learn how to maipulate the DOM 

const html = document.querySelector('html'); //Bringing HTML elements from the DOM
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image'); 

const cambiarContexto = (contexto) => { //Using a function to optimize code
    html.setAttribute('data-contexto', contexto); //Changing an attribute of my HTML element
    banner.setAttribute('src', `imagenes/${contexto}.png`);
}

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
})

botonCorto.addEventListener('click', () => { //Listening an event
    cambiarContexto('descanso-largo');
})

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
})