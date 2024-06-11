//Starting a new proyect to learn how to maipulate the DOM 

const html = document.querySelector('html'); //Bringing HTML elements from the DOM
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonLargo = document.querySelector('.app__card-button--largo');

const banner = document.querySelector('.app__image'); 
const titulo = document.querySelector('.app__title');

const botones = document.querySelectorAll('.app__card-button');

const inputMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3'); //Creating an audio object

musica.loop = true;

let tiempoTranscurrido = 5;  //Time in seconds

const cambiarContexto = (contexto) => { //Using a function to optimize code
    html.setAttribute('data-contexto', contexto); //Changing an attribute of my HTML element
    banner.setAttribute('src', `imagenes/${contexto}.png`);

    botones.forEach((contexto) => {
        contexto.classList.remove('active')
    }) //Removing focus for each button before adding it individually

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

const cuentaRegresiva = () => {
    tiempoTranscurrido -= 1;  //Decreasing value of the variable 
}

botonEnfoque.addEventListener('click', () => { //Listening an event
    cambiarContexto('enfoque'); //Making changes based on the button clicked
    botonEnfoque.classList.add('active'); //Adding focus
})

botonCorto.addEventListener('click', () => { 
    cambiarContexto('descanso-largo');
    botonCorto.classList.add('active');
})

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
    botonLargo.classList.add('active');
})

inputMusica.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }else {
        musica.pause();
    }
})

