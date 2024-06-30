export default function esUnCuil(campo){
    const cuil = campo.value.replaced(/[-\/]/g, ""); //Replacing some characters 

    console.log(cuil);
}
