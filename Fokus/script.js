//Starting a new proyect to learn how to maipulate the DOM 

const html = document.querySelector('html'); //Bringing HTML elements from the DOM
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image'); 

botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque')
    banner.setAttribute('src', 'imagenes/enfoque.png')
})

botonCorto.addEventListener('click', () => { //Listening an event
    html.setAttribute('data-contexto', 'descanso-corto') //Changing an attribute of my HTML element
    banner.setAttribute('src', 'imagenes/descanso-corto.png')
})

botonLargo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-largo')
    banner.setAttribute('src', 'imagenes/descanso-largo.png')
})