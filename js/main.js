import { renderLoader, initComponents } from "./components.js";
import { initButtons } from "./buttons.js";
import { initBanners } from "./banners.js";
import { initTheme } from "./theme.js";
import { initSound, playSound } from "./sound.js";
import { initWhatsNew } from "./whats-new.js";
import { initShortcuts } from "./shortcuts.js";
import { konamiCode, consoleMsg } from "./config.js";

document.addEventListener("DOMContentLoaded", async () => {
    renderLoader();
    await initComponents();
    initButtons();
    initBanners();
    initTheme();
    initSound();
    playSound();
    initWhatsNew();
    initShortcuts();
    konamiCode();
    consoleMsg();
});

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
});

// Ajustar posición del aside para no solapar el footer al hacer scroll
window.addEventListener("scroll", () => {
    const aside = document.querySelector(".aside-drawer");
    const footer = document.querySelector("#footer-container") || document.querySelector("footer");
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
        aside.style.transform = "translateY(-50%)";
    }
});
