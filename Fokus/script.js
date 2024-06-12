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

let time = 1500;
let tiempoTranscurrido = time;  //Time in seconds
let idIntervalo = null;

const botonIniciarPausar = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span');
const imagenIniciarPausar = document.querySelector('.app__card-primary-butto-icon');

const sonidoPlay = new Audio('./sonidos/play.wav');
const sonidoPause = new Audio('./sonidos/pause.mp3');
const sonidoFinalizando = new Audio('./sonidos/beep.mp3');

const timepoEnPantalla = document.querySelector('#timer');

const cambiarContexto = (contexto) => { //Using a function to optimize code
    html.setAttribute('data-contexto', contexto); //Changing an attribute of my HTML element
    banner.setAttribute('src', `imagenes/${contexto}.png`);

    mostrarTiempo();

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

botonEnfoque.addEventListener('click', () => { //Listening an event
    tiempoTranscurrido = 1500;
    cambiarContexto('enfoque'); //Making changes based on the button clicked
    botonEnfoque.classList.add('active'); //Adding focus
})

botonCorto.addEventListener('click', () => { 
    tiempoTranscurrido = 300;
    cambiarContexto('descanso-largo');
    botonCorto.classList.add('active');
})

botonLargo.addEventListener('click', () => {
    tiempoTranscurrido = 900;
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

botonIniciarPausar.addEventListener('click', iniciarPausar)

const cuentaRegresiva = () => {
    textoIniciarPausar.textContent = 'Pausar'
    imagenIniciarPausar.setAttribute('src', "./imagenes/pause.png");
    if( tiempoTranscurrido <= 0){
        reiniciar();
        /* tiempoTranscurrido = time; */
        sonidoFinalizando.currentTime = 3;
        sonidoFinalizando.play();
        return //Use to interrupt flow of the web
    }else {
        tiempoTranscurrido -= 1;  //Decreasing value of the variable 
    }
    mostrarTiempo();
}

function iniciarPausar(){
    if(idIntervalo){ //If idIntervalo it's different of null
        sonidoPause.play();
        reiniciar() 
        return 
    }else {
        sonidoPlay.play();
        idIntervalo = setInterval(cuentaRegresiva, 1000) //Method to establish an interval in wich a determinated thing is going to occur
    }   
}

function reiniciar() { 
    textoIniciarPausar.textContent = 'Comenzar';
    imagenIniciarPausar.setAttribute('src', "./imagenes/play_arrow.png");
    clearInterval(idIntervalo); //Interrupts flow of setInterval
    idIntervalo = null; //Restarting value of the interval
}

function mostrarTiempo(){
    const tiempo = new Date (tiempoTranscurrido * 1000); //Use to manage dates and hours
    const tiempoFormateado = tiempo.toLocaleTimeString('es-MX', {minute:'2-digit', second:'2-digit'})
    timepoEnPantalla.innerHTML = `${tiempoFormateado}`
}

mostrarTiempo();