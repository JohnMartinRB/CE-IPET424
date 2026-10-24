/* ==========================================
    BOTONES DE INTERFAZ Y UTILIDADES
========================================== */
import { playSound } from "../utils/sound.js";

export function initButtons() {
    // Botón de copiar enlace con feedback toast
    document.addEventListener("click", (e) => {
        if (e.target.closest("#button-copy-link")) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const toastCopied = document.getElementById("toast-copied-link");
                if (toastCopied) {
                    toastCopied.classList.add("visible");
                    // Reprodúcí el sonido del Toast justo al mostrar el cartel
                    playSound("toast.mp3", 0.3);
                    setTimeout(() => toastCopied.classList.remove("visible"), 3500);
                }
            });
        }
    });
    // Control de asides desplegables (independientes)
    const allAsides = document.querySelectorAll(".aside-drawer");
    allAsides.forEach((aside) => {
        // Obtenemos una clave única basada en el ID (o una clase si no tiene ID)
        const asideKey = `asideState_${aside.id || aside.classList[1]}`;
        const savedState = localStorage.getItem(asideKey);
        // Si estaba guardado como 'open', restauramos la clase .open en el aside y su botón
        if (savedState === "open") {
            aside.classList.add("open");
            const buttonToggle = aside.querySelector(".aside-button-toggle");
            if (buttonToggle) {
                buttonToggle.classList.add("open");
            }
        }
    });
    document.addEventListener("click", (e) => {
        const buttonToggle = e.target.closest(".aside-button-toggle");
        if (buttonToggle) {
            const currentAside = buttonToggle.closest(".aside-drawer");
            if (currentAside) {
                // Alternamos la clase .open
                currentAside.classList.toggle("open");
                buttonToggle.classList.toggle("open");
                // Clave única para localStorage
                const asideKey = `asideState_${currentAside.id || currentAside.classList[1]}`;
                const isOpen = currentAside.classList.contains("open");
                // Guardamos el estado 'open' o 'closed'
                localStorage.setItem(asideKey, isOpen ? "open" : "closed");
            }
        }
    });
    // Botón de volver arriba
    const buttonScrollTop = document.getElementById("button-scroll-top");
    if (buttonScrollTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                buttonScrollTop.classList.add("visible");
            } else {
                buttonScrollTop.classList.remove("visible");
            }
        });
        buttonScrollTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
    // Botón de compartir sitio
    const buttonShare = document.getElementById("button-share");
    if (!buttonShare) return;
    buttonShare.addEventListener("click", async () => {
        const shareData = {
            title: "Centro de Estudiantes IPET N° 424",
            text: "¡Entrá a la web oficial del Centro de Estudiantes del IPET 424 para ver las novedades, proyectos y trámites!",
            url: window.location.href, // O podés poner tu URL fija: 'https://johnmartinrb.github.io/CE-IPET-424/'
        };
        // Si el navegador soporta el menú nativo de compartir
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // El usuario simplemente cerró la ventana de compartir
            }
        } else {
            // FALLBACK PARA COMPUS VIEJAS: Copia el enlace y muestra el Toast
            navigator.clipboard.writeText(shareData.url);
            const toast = document.getElementById("toast-copied");
            if (toast) {
                toast.classList.add("visible");
                setTimeout(() => toast.classList.remove("visible"), 2500);
            }
        }
    });
}

export async function getVillaDoloresWeather() {
    // Widget de Clima Local (Villa Dolores)
    const lat = -31.9458;
    const lon = -65.1883;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const tempEl = document.getElementById("weather-temp");
        const iconEl = document.getElementById("weather-icon");
        if (tempEl) tempEl.textContent = `${temp}°C`;
        if (iconEl) iconEl.textContent = getWeatherIcon(code);
    } catch (error) {
        console.warn("No se pudo cargar el clima", error);
    }
    function getWeatherIcon(code) {
        if (code === 0) return "☀️";
        if (code >= 1 && code <= 3) return "⛅";
        if (code >= 51 && code <= 67) return "🌧️";
        if (code >= 95) return "⛈️";
        return "☁️";
    }
}
