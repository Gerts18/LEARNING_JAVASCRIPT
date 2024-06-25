function uno (otherFunction) { //Synchronous function
    console.log("uno");
    setTimeout(otherFunction, 3000);
}

function dos () { //Synchronous function
    console.log("dos");
}

setTimeout(() => uno(dos), 5000); //Asynchronous function
// In this case I pass it as a parameter a function that will be accomplished later

const nombre = function () { //Anonymous function
    console.log('nombre');
};

const apellido = () => console.log('apellido'); //Arrow function

