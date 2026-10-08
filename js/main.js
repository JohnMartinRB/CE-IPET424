/* ==========================================================================
    MAIN.JS - ARCHIVO PRINCIPAL DE JAVASCRIPT
========================================================================== */
import { renderLoader, initComponents, initPageTitle } from "./ui/components.js";
import { initButtons } from "./ui/buttons.js";
import { initFactsWidget } from "./ui/widgets.js";
import { initBanners } from "./ui/banners.js";
import { initTheme } from "./ui/theme.js";
import { initModals } from "./ui/modals.js";
import { initFontSize } from "./utils/font-size.js";
import { initAnimations } from "./utils/animations.js";
import { initDyslexia } from "./utils/dyslexia.js";
import { initSound, playSound } from "./utils/sound.js";
import { initShortcuts } from "./utils/shortcuts.js";
import { config, party, matrix, flip, terminal } from "./config.js";

document.addEventListener("DOMContentLoaded", async () => {
    renderLoader();
    await initComponents();
    initPageTitle();
    initButtons();
    initFactsWidget();
    initBanners();
    initTheme();
    initModals();
    initFontSize();
    initAnimations();
    initDyslexia();
    initSound();
    initShortcuts();
    config();
    party();
    matrix();
    flip();
    terminal();
});

console.log("C.E. IPET 424 - Sitio inicializado correctamente");

// Delegación global para interceptar el clic derecho en imágenes fijas y dinámicas
document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG" || e.target.closest("img")) {
        e.preventDefault();
    }
});
// Previene que se arrastren fuera de la ventana
document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG" || e.target.closest("img")) {
        e.preventDefault();
    }
});

// Ocultar pantalla de bienvenida 1 segundo después de que todo cargue
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader-screen");
        if (loader) {
            loader.classList.add("fade-out");
        }
    }, 1000); // 1000 ms = 1 segundo de espera
    playSound("toast.mp3", 0.5);
});

// Ajustar posición del aside para no solapar el footer al hacer scroll
window.addEventListener("scroll", () => {
    const asides = document.querySelectorAll(".aside-drawer");
    const footer = document.querySelector("#footer-container") || document.querySelector("footer");
    if (!asides.length || !footer) return;
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const footerTop = footerRect.top;
    asides.forEach((aside) => {
        if (footerTop < windowHeight) {
            // Calculamos cuánto invade el footer y subimos el aside
            const overlap = windowHeight - footerTop;
            aside.style.transform = `translateY(calc(-50% - ${overlap}px))`;
        } else {
            // Volver a la posición normal centrada
            aside.style.transform = "translateY(-50%)";
        }
    });
});

// Manejador global para captura de imágenes rotas (404 / Fallback)
// Captura errores en fase de propagación (true) antes de que se descarten en el DOM.
document.addEventListener(
    "error",
    (e) => {
        const img = e.target;
        // Verificamos que el elemento que falló sea una etiqueta <img>
        if (img.tagName.toLowerCase() !== "img") return;
        // IMPORTANTE: Evitamos bucles infinitos en caso de que la imagen de repuesto tampoco exista
        img.onerror = null;
        // Evaluamos el contexto: si está en Header, Footer o zonas de navegación, se trata de un Logo/Isotipo
        const esLogo = img.closest("header, footer, nav, .header-container, .footer-card, .aside-container");
        if (esLogo) {
            // CASO A: Es un Logo o Isotipo -> Reemplazamos la ruta por un favicon o imagen de reserva segura
            img.src = "assets/img/favicons/light.png";
            img.alt = "Logotipo institucional";
        } else {
            // CASO B: Es una imagen de Contenido / Hero / Galería -> Aplicamos la clase para el estilo de tarjeta rota
            img.classList.add("img-broken");
        }
    },
    true,
); // El 'true' es vital: permite interceptar el evento 'error' durante la fase de captura
