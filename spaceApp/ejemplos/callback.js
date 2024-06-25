function uno () { //Synchronous function
    console.log("uno");
    setTimeout(dos, 3000);
}

function dos () { //Synchronous function
    console.log("dos");
}

setTimeout(() => uno(), 5000); //Asynchronous function

const nombre = function () { //Anonymous function
    console.log('nombre');
};

const apellido = () => console.log('apellido'); //Arrow function

