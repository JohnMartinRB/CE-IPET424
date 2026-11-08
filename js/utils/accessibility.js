/* ==========================================
    FUNCIONES DE ACCESIBILIDAD WEB
========================================== */
import { playSound } from "../utils/sound.js";

/* ==========================================
    FUENTE DYSLEXIC
========================================== */
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
    const button = document.getElementById("button-dyslexic");
    if (button) {
        button.textContent = dyslexicEnabled ? "Modo dislexia: sí" : "Modo dislexia: no";
        button.setAttribute("aria-pressed", dyslexicEnabled);
    }
}
document.addEventListener("click", (e) => {
    const button = e.target.closest("#button-dyslexic");
    if (button) {
        setDyslexicState(!dyslexicEnabled);
        playSound("pop-medium.mp3", 0.2);
    }
});

/* ==========================================
    CONTROL DE ANIMACIONES
========================================== */
const savedAnimations = localStorage.getItem("animationsEnabled");
const prefersReduceSystem = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let animationsEnabled = savedAnimations !== null ? savedAnimations === "true" : !prefersReduceSystem;

function applyAnimationsState() {
    if (!animationsEnabled) {
        document.documentElement.classList.add("reduce-motion");
    } else {
        document.documentElement.classList.remove("reduce-motion");
    }
    updateAnimationsButton();
}
export function setAnimationsState(state) {
    animationsEnabled = state;
    localStorage.setItem("animationsEnabled", state);
    applyAnimationsState();
}
export function initAnimations() {
    applyAnimationsState();
}
function updateAnimationsButton() {
    const buttonAnimations = document.getElementById("button-animations");
    if (buttonAnimations) {
        buttonAnimations.textContent = animationsEnabled ? "Animaciones: Sí" : "Animaciones: No";
        buttonAnimations.setAttribute("aria-pressed", !animationsEnabled);
    }
}
document.addEventListener("click", (e) => {
    const buttonAnimations = e.target.closest("#button-animations");
    if (buttonAnimations) {
        setAnimationsState(!animationsEnabled);
    }
});
