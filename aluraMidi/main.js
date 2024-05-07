// File responsible of giving dynamism to the main page

// document.querySelector('#sonido_tecla_pom') //Bringing a html element by its id

function playSonidoPom(){ //Using a function to execute my functionality 
    document.querySelector('#sonido_tecla_pom').play(); //using a functionality
}

function playSonidoClap(){
    document.querySelector('#sonido_tecla_clap').play();
}

//Bringing a html element by its class name
document.querySelector('.tecla_pom').onclick = playSonidoPom; //Using a function in an atributte