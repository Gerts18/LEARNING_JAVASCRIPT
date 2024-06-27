
async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/videos');

    const datos = conexion.json();

    //console.log(datos);

    return datos;
}

export const conexionApi = {
    listarVideos
}

//listarVideos();