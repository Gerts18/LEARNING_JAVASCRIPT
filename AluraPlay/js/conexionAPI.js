
async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/videos');

    console.log(conexion);
}

listarVideos();