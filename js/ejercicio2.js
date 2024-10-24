//Seleccionar inputs y el botón 
const sticker1Input = document.getElementById('sticker1');
const sticker2Input = document.getElementById('sticker2');
const sticker3Input = document.getElementById('sticker3');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const resultParagraph = document.getElementById('result');

//Evento para hacer clic en el botón de calcular
calculateButton.addEventListener('click', function() {
    //Convertir los valores de los inputs a números
    const sticker1Count = parseInt(sticker1Input.value);
    const sticker2Count = parseInt(sticker2Input.value);
    const sticker3Count = parseInt(sticker3Input.value);

    //Sumar las cantidades
    const totalStickers = sticker1Count + sticker2Count + sticker3Count;

    //Verificar si la cantidad total es menor o igual a 10
    if (totalStickers <= 10) {
        //Mostrar cantidad de stickers seleccionados
        resultParagraph.textContent = `Tienes ${totalStickers} stickers.`;
    } else {
        //Si no se muestra que llevas demasiados stickers
        resultParagraph.textContent = `Tienes demasiados stickers. Total ${totalStickers}`;
    }
});

//Evento para resetear el contador de stickers
resetButton.addEventListener('click', function() {
    // Resetear los valores de los inputs a 0
    sticker1Input.value = 0;
    sticker2Input.value = 0;
    sticker3Input.value = 0;

    // Limpiar el resultado
    resultParagraph.textContent = '';
});
