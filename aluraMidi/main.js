// File responsible of giving dynamism to the main page

// document.querySelector('#sonido_tecla_pom') //Bringing a html element by its id

function playSonidoPom(){ //Using a function to execute my functionality 
    document.querySelector('#sonido_tecla_pom').play(); //using a functionality
}

//Bringing a html element by its class name
document.querySelector('.tecla_pom').onclick = playSonidoPom; //Using a function in an atributte
//Putting () makes the functions execute inmediatly, and that is a bad practice, cause the user needs to interact with the page before we can execute something, that's why we delete ()

/* function playSonidoClap(){
    document.querySelector('#sonido_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = playSonidoClap; */

/* ----------------------------------- */

const listaTeclas = document.querySelectorAll('.tecla') //Brings a list with all HTML elements with that selector
//Here we are using a variable to reference or asign data and use it later 

listaTeclas[0].onclick = playSonidoPom; //Accesing to an element in my list and assigning a function to that element 


function playSonido(idElementoAudio){ 
    document.querySelector(idElementoAudio).play(); //Creating a function to encapsulate a repetitive functionallity
}

let contador = 0;

while( contador < listaTeclas.length ){

    const tecla = listaTeclas[contador];

    const instrumento = tecla.classList[1]; //Getting classes associated to each element

    tecla.onclick = function () {
        playSonido(`#sonido_${instrumento}`); //Using an anonymous function to avoid executing the function when we are assigning the functionallity to the element
    };

    contador ++;
};