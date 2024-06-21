// Generar número aleatorio entre 1 y 1000
function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

// Generar número aleatorio entre 1 y 4
function generateRandomNumber2() {
    return Math.floor(Math.random() * 4) + 1;
}

// Generar el número aleatorio inicial
let randomNumber = generateRandomNumber();
// Variable para verificar si se ha adivinado el número
let adivino = false;

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario y los mensajes de resultado
    const form = document.getElementById('guess-form');
    const resultMessage = document.getElementById('result-message');
    const attemptsMessage = document.getElementById('attempts-message');
    const attempts = document.getElementById('attempts');
    const restartButton = document.getElementById('restart-button');

    // Inicializar el contador de intentos
    let counter = 1; 

    // Evento 'submit' del formulario
    form.addEventListener('submit', function (event) {
        // Prevenir el envío del formulario
        event.preventDefault(); 
        // Obtener el número ingresado por el usuario
        const guessedNumber = parseInt(document.getElementById('number-input').value);

        // Verificar si el número ingresado es válido
        if (guessedNumber <= 0) {
            resultMessage.textContent = '/!\\ El número debe ser mayor a 0';
            resultMessage.style.color = 'yellow';
        }
        else if (guessedNumber > 1000) {
            resultMessage.textContent = '/!\\ El número debe ser menor a 1000';
            resultMessage.style.color = 'yellow';
        } else {
            // Verificar si el número ingresado coincide con el número aleatorio
            if (guessedNumber === randomNumber) {
                if (!adivino) {
                    adivino = true;
                    resultMessage.textContent = '¡Has adivinado el número!';
                    attemptsMessage.textContent = 'Lo adivinaste en ' + counter + ' intentos';
                    attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>';
                }
            } else if (guessedNumber > randomNumber) {
                const msg_random = generateRandomNumber2();
                // Mensajes para el caso en que el número ingresado es mayor
                switch (msg_random) {
                    case 1:
                        resultMessage.textContent = 'Te excediste vuelve a intentarlo';
                        break;
                    case 2:
                        resultMessage.textContent = 'Ingresaste un número demasiado grande vuelve a intentarlo.';
                        break;
                    case 3:
                        resultMessage.textContent = 'Creo que estas demasiado lejos de lo que quieres...';
                        break;
                    default:
                        resultMessage.textContent = 'Vaya donde estamos? nos alejamos bastante...';
                        break;
                }
                resultMessage.style.color = 'red';
                attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>';
                counter++; // Incrementar el contador de intentos
            } else {
                const msg_random = generateRandomNumber2();
                // Mensajes para el caso en que el número ingresado es menor
                switch (msg_random) {
                    case 1:
                        resultMessage.textContent = 'Demasiado abajo prueba un número mayor';
                        break;
                    case 2:
                        resultMessage.textContent = 'El número que ingresaste es muy pequeño prueba con otro...';
                        break;
                    case 3:
                        resultMessage.textContent = 'Creo que estas demasiado abajo de lo que quieres...';
                        break;
                    default:
                        resultMessage.textContent = 'Vaya donde estamos? bajamos bastante...';
                        break;
                }
                resultMessage.style.color = 'blue';
                attempts.innerHTML += '<p>' + counter + '° Ingresaste' + '. ' + guessedNumber + '</p>';
                counter++; // Incrementar el contador de intentos
            }
        }
    });

    // Evento 'click' del botón de reinicio
    restartButton.addEventListener('click', function () {
        // Limpiar el mensaje de resultado y de intentos
        resultMessage.textContent = '';
        attemptsMessage.textContent = '';
        attempts.innerHTML = '';

        // Si no se adivinó, mostrar alerta con el número correcto
        if (!adivino) {
            alert('El Número era ' + randomNumber);
        }

        // Reiniciar variables y generar un nuevo número aleatorio
        adivino = false;
        counter = 1;
        randomNumber = generateRandomNumber();
        // Reiniciar el formulario
        form.reset(); 
    });
});
