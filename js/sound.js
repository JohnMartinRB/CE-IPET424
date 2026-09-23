/* ==========================================
    MÓDULO DE EFECTOS DE SONIDO (UI SOUNDS)
   ========================================== */

// 1. Estado inicial desde localStorage (por defecto 'activado' o 'true')
let soundEnabled = localStorage.getItem("soundEffects") !== "false";

/**
 * Función principal para reproducir sonidos de la carpeta assets/audio
 * @param {string} fileName - Nombre del archivo de audio (ej: 'pop.mp3')
 * @param {number} volume - Volumen de 0.0 a 1.0 (sugerido: 0.2 o 0.3)
 */
export function playSound(fileName, volume = 0.25) {
    // Si el usuario desactivó los sonidos, no reproduce nada
    if (!soundEnabled) return;
    const audio = new Audio(`assets/audio/${fileName}`);
    audio.volume = volume;
    // 1. Forzamos a que el audio empiece desde el milisegundo 0 exacto
    audio.currentTime = 0;
    // 2. Ejecutamos la reproducción de forma limpia
    audio.play().catch(() => {
        // Ignora bloqueos automáticos de autoplay del navegador
    });
}

/**
 * Activa o desactiva los efectos de sonido y guarda en localStorage
 * @param {boolean} state - true para activar, false para desactivar
 */
export function setSoundState(state) {
    soundEnabled = state;
    localStorage.setItem("soundEffects", state);
    updateSoundButton();
}

/**
 * Sincroniza la preferencia almacenada con el botón de la interfaz
 */
export function initSound() {
    updateSoundButton();
}

function updateSoundButton() {
    const buttonSound = document.getElementById("button-sound");
    if (buttonSound) {
        buttonSound.textContent = soundEnabled ? "Efectos de Sonido: Sí" : "Efectos de Sonido: No";
        buttonSound.setAttribute("aria-pressed", soundEnabled);
    }
}

// Escuchamos clics globales en el botón de accesibilidad mediante delegación
document.addEventListener("click", (e) => {
    const buttonSound = e.target.closest("#button-sound");
    if (buttonSound) {
        setSoundState(!soundEnabled);
    }
});

/* ==========================================
    LISTENERS GLOBALES PARA EFECTOS DE SONIDO
   ========================================== */

// Captura cualquier clic en la página para reproducir sonido de botones de forma general
document.addEventListener("click", (e) => {
    // Detecta si el clic fue en un botón, enlace, resumen de FAQ (<summary>), o elementos interactivos
    const isButton = e.target.closest('.button, button, [role="button"]');
    const isLink = e.target.closest("summary, .nav-menu-item");
    if (isButton) {
        playSound("pop-medium.mp3", 0.5);
    }
    if (isLink) {
        playSound("pop-high.mp3", 0.5);
    }
});
