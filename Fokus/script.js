//Starting a new proyect to learn how to maipulate the DOM 

const html = document.querySelector('html'); //Bringing HTML elements from the DOM
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image'); 
const titulo = document.querySelector('.app__title');

const cambiarContexto = (contexto) => { //Using a function to optimize code
    html.setAttribute('data-contexto', contexto); //Changing an attribute of my HTML element
    banner.setAttribute('src', `imagenes/${contexto}.png`);

    switch(contexto){
        case 'enfoque': 
            titulo.innerHTML = 
            `
            Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
            break;
        case 'descanso-largo': 
            titulo.innerHTML = 
            `
            ¿Qué tal tomar un respiro?,<br>
            <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `
            break;
        case 'descanso-corto': 
            titulo.innerHTML = 
            `
            Hora de Volver a la Superficie<br>
            <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
            break
        
    }
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