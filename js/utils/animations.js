/* ==========================================
    MÓDULO DE ACCESIBILIDAD: CONTROL DE ANIMACIONES
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
