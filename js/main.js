import { initComponents } from './components.js';
import { initTheme } from './theme.js';
import { konamiCode } from './secret.js';
import { consoleMsg } from './secret.js';

document.addEventListener("DOMContentLoaded", () => {
    initComponents();
    initTheme();
    konamiCode();
    consoleMsg();
});

// Acceso rápido por teclado al modo oscuro
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        const botonmodo = document.getElementById('boton-modo');
        if (botonmodo) {
            botonmodo.click();
        }
    }
});

// Deshabilitar el menú contextual en imágenes
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
});

// Botón de copiar enlace con feedback toast
document.addEventListener('click', (e) => {
    if (e.target.closest('#btn-copiar-link')) {
        navigator.clipboard.writeText(window.location.href).then(() => {
        const toast = document.getElementById('toast-copiado');
        if (toast) {
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 2500);
        }
        });
    }
});

// Banner de sin conexión a internet (offline toast)
function asegurarBannerOffline() {
    let banner = document.getElementById('offline-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'offline-banner';
        banner.className = 'offline-banner';
        banner.textContent = '⚠️ Sin conexión a internet. Mostrando versión guardada.';
        document.body.prepend(banner);
    }
    return banner;
}

window.addEventListener('offline', () => {
    const banner = asegurarBannerOffline();
    banner.classList.add('visible');
});

window.addEventListener('online', () => {
    const banner = document.getElementById('offline-banner');
    if (banner) banner.classList.remove('visible');
});