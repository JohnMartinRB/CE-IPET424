

// MODO OSCURO

// 1. Buscamos el botón y el cuerpo de la web
const botonmodo = document.getElementById('boton-modo');
const cuerpo = document.body;

// 2. Definimos qué hacer cuando se haga clic
botonmodo.addEventListener('click', function() {

    // toggle agrega la clase si no está, y la quita si ya está
    cuerpo.classList.toggle('modo-oscuro');

    // Comprobamos: ¿El body tiene ahora la clase 'dark-mode'?
    if (cuerpo.classList.contains('modo-oscuro')) {
    // Si la tiene, cambiamos el texto a "Modo Claro" con un sol
    botonmodo.textContent = "Modo Claro ☀️";
    } else {
        // Si NO la tiene, volvemos al texto original
        botonmodo.textContent = "Modo Oscuro 🌙";
    }
});