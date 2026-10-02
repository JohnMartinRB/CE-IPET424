/* ==========================================
    MÓDULO DE ACCESIBILIDAD: FUENTE DYSLEXIC
========================================== */
import { playSound } from "./sound.js";

let dyslexicEnabled = localStorage.getItem("dyslexicFont") === "true";

function applyDyslexicState() {
    if (dyslexicEnabled) {
        document.documentElement.classList.add("dyslexic-mode");
    } else {
        document.documentElement.classList.remove("dyslexic-mode");
    }
    updateButton();
}

export function setDyslexicState(state) {
    dyslexicEnabled = state;
    localStorage.setItem("dyslexicFont", state);
    applyDyslexicState();
}

export function initDyslexia() {
    applyDyslexicState();
}

function updateButton() {
    const btn = document.getElementById("button-dyslexic");
    if (btn) {
        btn.textContent = dyslexicEnabled ? "Modo dislexia: sí" : "Modo dislexia: no";
        btn.setAttribute("aria-pressed", dyslexicEnabled);
    }
}

document.addEventListener("click", (e) => {
    const btn = e.target.closest("#button-dyslexic");
    if (btn) {
        setDyslexicState(!dyslexicEnabled);
        playSound("pop-medium.mp3", 0.2);
    }
});
