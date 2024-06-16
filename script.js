// Variables de juego
let puntuacion = 0;
const juego = document.getElementById('juego');
const circulo = document.getElementById('circulo');
const puntuacionDisplay = document.getElementById('puntuacion');

// Función para mover el círculo a una posición aleatoria
function moverCirculo() {
    const x = Math.floor(Math.random() * (juego.clientWidth - circulo.clientWidth));
    const y = Math.floor(Math.random() * (juego.clientHeight - circulo.clientHeight));
    circulo.style.left = `${x}px`;
    circulo.style.top = `${y}px`;
}

// Función para actualizar la puntuación
function actualizarPuntuacion() {
    puntuacion++;
    puntuacionDisplay.textContent = `Puntuación: ${puntuacion}`;
}

// Evento de clic en el círculo
circulo.addEventListener('click', () => {
    actualizarPuntuacion();
    moverCirculo();
});

// Mover el círculo al iniciar el juego
moverCirculo();
