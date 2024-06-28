
async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/videos'); //GET petition

    const datos = conexion.json();

    //console.log(datos);

    return datos;   
}

async function enviarVideo(titulo, descripcion, url, imagen){ //POST petition
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"}, //Information associated to the file to be transmitted
        body: JSON.stringify({ //Convert from JSON to String
            titulo: titulo,
            descripcion: `${descripcion} vizualizaciones `,
            url: url,
            imagen: imagen
        })
    }) 

    const datos = conexion.json();

    return datos;
}

async function buscarVideo(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);

    const consulta = conexion.json();

    return consulta;
}

export const conexionApi = {
    listarVideos,
    enviarVideo,
    buscarVideo
}

//listarVideos();