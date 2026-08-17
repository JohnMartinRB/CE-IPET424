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

// Easter egg en la consola
console.log(
    "%c ¡Hola dev! 🚀 %c\n¿Te interesa la programación o querés colaborar en la web del Centro de Estudiantes? ¡Sumate al equipo!",
    "font-size: 18px; font-weight: bold; color: #007bff;",
    "font-size: 14px; color: #555;"
);