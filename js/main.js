import { initComponents } from './components.js';
import { initTheme } from './theme.js';
import { konamiCode } from './config.js';
import { consoleMsg } from './config.js';

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
        const botonmodo = document.getElementById('button-theme');
        if (botonmodo) {
            botonmodo.click();
        }
    }
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


// Botón de copiar enlace con feedback toast
document.addEventListener('click', (e) => {
    if (e.target.closest('#button-copy-link')) {
        navigator.clipboard.writeText(window.location.href).then(() => {
        const toast = document.getElementById('toast-copied');
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


// Widget de Clima Local (Villa Dolores) Consulta la API pública y gratuita de Open-Meteo
async function obtenerClimaVillaDolores() {
    const lat = -31.9458;
    const lon = -65.1883;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    try {
        const res = await fetch(url);
        const data = await res.parse ? await res.json() : await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const tempEl = document.getElementById('weather-temp');
        const iconEl = document.getElementById('weather-icon');
        if (tempEl) tempEl.textContent = `${temp}°C`;
        if (iconEl) iconEl.textContent = obtenerIconoClima(code);
    } catch (error) {
        console.warn("No se pudo cargar el clima", error);
    }
}
function obtenerIconoClima(code) {
    if (code === 0) return '☀️';
    if (code >= 1 && code <= 3) return '⛅';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 95) return '⛈️';
    return '☁️';
}
document.addEventListener('DOMContentLoaded', obtenerClimaVillaDolores);


// Header Fijo e Indicador de Progreso de Lectura - Mide la altura del scroll y calcula el porcentaje
window.addEventListener('scroll', () => {
    const bar = document.getElementById('reading-progress-bar');
    if (!bar) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
});
// JS: Añade la clase .scrolled al pasar los 20px de scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-main');
    if (header) {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});