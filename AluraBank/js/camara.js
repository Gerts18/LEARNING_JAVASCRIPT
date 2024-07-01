const botonAbrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

botonAbrirCamara.addEventListener('click', async () => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false}); //Accesing to the camera
    botonAbrirCamara.style.display="none";
    campoCamara.style.display = "block";
    video.srcObject = iniciarVideo;
})