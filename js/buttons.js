/* ==========================================
    BOTONES
   ========================================== */

export function initButtons() {
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
    // CONTROL DEL ASIDE DESPLEGABLE
    document.addEventListener('click', function (e) {
        const buttonToggle = e.target.closest('#button-toggle-aside');
        const aside = document.getElementById('aside-config');
        if (buttonToggle && aside) {
            aside.classList.toggle('open');
        }
    });
} 

export async function obtenerClimaVillaDolores() {
    // Widget de Clima Local (Villa Dolores) Consulta la API pública y gratuita de Open-Meteo
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
    function obtenerIconoClima(code) {
        if (code === 0) return '☀️';
        if (code >= 1 && code <= 3) return '⛅';
        if (code >= 51 && code <= 67) return '🌧️';
        if (code >= 95) return '⛈️';
        return '☁️';
    }
}