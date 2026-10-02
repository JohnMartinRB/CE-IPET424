/* ==========================================
    MÓDULO DE ACCESIBILIDAD: TAMAÑO DE FUENTE
========================================== */
import { playSound } from "../utils/sound.js";

const LEVELS = [85, 90, 95, 100, 105, 110, 115, 120, 125, 130];

let currentLevelIndex =
    localStorage.getItem("fontSizeIndex") !== null ? parseInt(localStorage.getItem("fontSizeIndex"), 10) : 1;

function applyFontSize() {
    const level = LEVELS[currentLevelIndex];
    document.documentElement.style.fontSize = `${level}%`;
    localStorage.setItem("fontSizeIndex", currentLevelIndex);
    updateUI();
}

export function decreaseFontSize() {
    if (currentLevelIndex > 0) {
        currentLevelIndex--;
        applyFontSize();
        playSound("pop-medium.mp3", 0.2);
    }
}

export function increaseFontSize() {
    if (currentLevelIndex < LEVELS.length - 1) {
        currentLevelIndex++;
        applyFontSize();
        playSound("pop-high.mp3", 0.2);
    }
}

export function resetFontSize() {
    if (currentLevelIndex !== 1) {
        currentLevelIndex = 1;
        applyFontSize();
        playSound("pop-medium.mp3", 0.2);
    }
}

export function initFontSize() {
    applyFontSize();
}

function updateUI() {
    const btnDecrease = document.getElementById("button-font-decrease");
    const btnIncrease = document.getElementById("button-font-increase");
    const indicator = document.getElementById("font-size-indicator");
    if (indicator) {
        indicator.textContent = `${LEVELS[currentLevelIndex]}%`;
    }
    if (btnDecrease) {
        btnDecrease.disabled = currentLevelIndex === 0;
    }
    if (btnIncrease) {
        btnIncrease.disabled = currentLevelIndex === LEVELS.length - 1;
    }
}

document.addEventListener("click", (e) => {
    if (e.target.closest("#button-font-decrease")) decreaseFontSize();
    if (e.target.closest("#button-font-increase")) increaseFontSize();
    if (e.target.closest("#button-font-reset")) resetFontSize();
});
