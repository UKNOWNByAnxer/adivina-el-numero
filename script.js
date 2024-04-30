// Generar número aleatorio entre 1 y 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

// Generar el número aleatorio inicial
let randomNumber = generateRandomNumber();
// Adivino el número?
let adivino = false;

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario y los mensajes de resultado
    const form = document.getElementById('guess-form');
    const resultMessage = document.getElementById('result-message');
    const attemptsMessage = document.getElementById('attempts-message');
    const attempts = document.getElementById('attempts');
    const restartButton = document.getElementById('restart-button');
    const message = '';

    let counter = 1; // Inicializar el contador de intentos

    // Evento 'submit' del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        // Obtener el número ingresado por el usuario
        const guessedNumber = parseInt(document.getElementById('number-input').value);
        // Verificar si el número ingresado es válido
        if (guessedNumber <= 0) {
            resultMessage.textContent = 'El número debe ser mayor que 0';
        } else {
            // Verificar si el número ingresado coincide con el número aleatorio
            if (guessedNumber === randomNumber) {
                if (adivino != true){
                    adivino = true;
                    resultMessage.textContent = '¡Has adivinado el número!';
                    attemptsMessage.textContent = 'Lo adivinaste en ' + counter + ' intentos';
                    attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>'
                }
            } else if (guessedNumber > randomNumber) {
                resultMessage.textContent = 'El número que ingresaste es mayor';
                resultMessage.style.color = 'red';
                attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>'
                counter++; // Incrementar el contador de intentos
            } else {
                resultMessage.textContent = 'El número que ingresaste es menor';
                resultMessage.style.color = 'blue';
                attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>'
                counter++; // Incrementar el contador de intentos
            }
        }
    });

    // Evento 'click' del botón de reinicio
    restartButton.addEventListener('click', function () {
        resultMessage.textContent = ''; // Limpiar el mensaje de resultado
        attemptsMessage.textContent = ''; // Limpiar el mensaje de intentos
        attempts.innerHTML = ''
        // Si no adivino mostrar alerta
        if (adivino == false) {
            alert('El Numero era '+ randomNumber)
        }
        adivino = false;
        counter = 1;
        // Generar un nuevo número aleatorio
        randomNumber = generateRandomNumber();
        form.reset(); // Reiniciar el formulario
    });
});
