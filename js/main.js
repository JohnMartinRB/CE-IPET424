import { initComponents } from './components.js';
import { initTheme } from './theme.js';

document.addEventListener("DOMContentLoaded", () => {
    initComponents();
    initTheme();
});

// Deshabilitar el menú contextual en imágenes
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
});

// Konami Code (Easter Egg)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
        alert('🚀 ¡Descubriste el modo desarrollador del CE IPET 424!');
        konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Easter egg en la consola
console.log(
    "%c ¡Hola dev! 🚀 %c\n¿Te interesa la programación o querés colaborar en la web del Centro de Estudiantes? ¡Sumate al equipo!",
    "font-size: 18px; font-weight: bold; color: #007bff;",
    "font-size: 14px; color: #555;"
);
