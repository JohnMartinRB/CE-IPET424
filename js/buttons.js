/* ==========================================
    BOTONES DE INTERFAZ Y UTILIDADES
   ========================================== */

import { playSound } from "./sound.js";

export function initButtons() {
    // Botón de copiar enlace con feedback toast
    document.addEventListener("click", (e) => {
        if (e.target.closest("#button-copy-link")) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const toastCopied = document.getElementById("toast-copied-link");
                if (toastCopied) {
                    toastCopied.classList.add("visible");
                    // Reprodúcí el sonido del Toast justo al mostrar el cartel
                    playSound("toast.mp3", 0.3); // <-- LÍNEA NUEVA
                    setTimeout(() => toastCopied.classList.remove("visible"), 2500);
                }
            });
        }
    });
    // Control del aside desplegable
    document.addEventListener("click", function (e) {
        const buttonToggle = e.target.closest("#aside-config-button-toggle");
        const aside = document.getElementById("aside-config");
        if (buttonToggle && aside) {
            aside.classList.toggle("open");
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
