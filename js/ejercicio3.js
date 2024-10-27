//Función para verificar el password
function verificarPassword() {
    //Obtenemos los valores seleccionados a traves del select
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    //Combinamos los 3 valores en un solo string 
    const password = select1 + select2 + select3;

    //Obtenemos el párrafo donde se muestra el resultado
    const resultParagraph = document.getElementById('password-result');
    
    //Verificar las posibles password 
    if (password === '911') {
        resultParagraph.textContent = 'Password 1 Correcto';
    } else if (password === '714') {
        resultParagraph.textContent = 'Password 2 Correcto';
    } else {
        resultParagraph.textContent = 'Password incorrecto';
    }
}

//Asiganmos el evento al botón
document.getElementById('ingresar').addEventListener('click', verificarPassword);