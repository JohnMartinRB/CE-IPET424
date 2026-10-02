/* ==========================================
    MÓDULO DE EFECTOS DE SONIDO (UI SOUNDS)
========================================== */
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
        buttonSound.textContent = soundEnabled ? "Sonido: sí" : "Sonido: no";
        buttonSound.setAttribute("aria-pressed", soundEnabled);
    }
}

document.addEventListener("click", (e) => {
    const buttonSound = e.target.closest("#button-sound");
    if (buttonSound) {
        setSoundState(!soundEnabled);
    }
});

/* ==========================================
    LISTENERS GLOBALES PARA EFECTOS DE SONIDO
========================================== */
document.addEventListener("click", (e) => {
    const isButton = e.target.closest('.button, button, [role="button"]');
    const isLink = e.target.closest("summary, .nav-menu-item");
    if (isButton) {
        playSound("pop-medium.mp3", 0.5);
    }
    if (isLink) {
        playSound("pop-high.mp3", 0.5);
    }
});
