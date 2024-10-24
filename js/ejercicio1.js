//Seleccionar la imagen 
const image = document.getElementById('image');

//Agregar evento para el clic de la imagen 
image.addEventListener('click', function() {
    //Verificar si la imagen tiene unb fondo rojo
    if (image.classList.contains('border-red')) {
        //Si tiene borde se lo quitamos
        image.classList.remove('border-red');
    } else {
        //Si no tiene el borde, se lo agregamos
        image.classList.add('border-red');
    }
});