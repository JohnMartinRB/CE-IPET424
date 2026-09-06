import { renderLoader } from './components.js';
import { initComponents } from './components.js';
import { initButtons } from './buttons.js';
import { initBanners } from './banners.js';
import { initTheme } from './theme.js';
import { initShortcuts } from './shortcuts.js';
import { konamiCode } from './config.js';
import { consoleMsg } from './config.js';

document.addEventListener("DOMContentLoaded", () => {
    renderLoader();
    initComponents();
    initShortcuts();
    initButtons();
    initBanners();
    initTheme();
    konamiCode();
    consoleMsg();
});


// Delegación global para interceptar el clic derecho en imágenes fijas y dinámicas
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
    }
});
// Previene que se arrastren fuera de la ventana
document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
    }
});


// Ocultar pantalla de bienvenida 0.3 segundos después de que todo cargue
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader-screen');
        if (loader) {
            loader.classList.add('fade-out');
        }
    }, 1000); // 300 ms = 0.3 segundos de espera
});


// Ajustar posición del aside para no solapar el footer al hacer scroll
window.addEventListener('scroll', () => {
    const aside = document.querySelector('.aside-drawer');
    const footer = document.querySelector('#footer-container') || document.querySelector('footer');
    if (!aside || !footer) return;
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Distancia visible del footer en la ventana
    const footerTop = footerRect.top;
    // Si el footer entra en la pantalla
    if (footerTop < windowHeight) {
        // Calculamos cuánto espacio invade el footer y subimos el aside esa misma distancia
        const overlap = windowHeight - footerTop;
        aside.style.transform = `translateY(calc(-50% - ${overlap}px))`;
    } else {
        // Posición normal centrada
        aside.style.transform = 'translateY(-50%)';
    }
});