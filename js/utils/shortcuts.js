/* ==========================================
    ATAJOS DE TECLADO
========================================== */
export function initShortcuts() {
    // Acceso rápido por teclado al modo oscuro
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "d") {
            e.preventDefault();
            const buttonTheme = document.getElementById("button-theme");
            if (buttonTheme) {
                buttonTheme.click();
            }
        }
    });
    // Acceso rápido por teclado al modo de alto contraste
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "h") {
            e.preventDefault();
            const buttonHighContrast = document.getElementById("button-high-contrast");
            if (buttonHighContrast) {
                buttonHighContrast.click();
            }
        }
    });
    // Acceso rápido por teclado al modo código
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "c") {
            e.preventDefault();
            const buttonCode = document.getElementById("button-code");
            if (buttonCode) {
                buttonCode.click();
            }
        }
    });
    // Acceso rápido por teclado al modo descanso
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "r") {
            e.preventDefault();
            const buttonRest = document.getElementById("button-rest");
            if (buttonRest) {
                buttonRest.click();
            }
        }
    });
    // Acceso rápido por teclado para copiar link
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "l") {
            e.preventDefault();
            const buttonCopyLink = document.getElementById("button-copy-link");
            if (buttonCopyLink) {
                buttonCopyLink.click();
            }
        }
    });
    // Acceso rápido por teclado para desactivar sonido
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "s") {
            e.preventDefault();
            const buttonSound = document.getElementById("button-sound");
            if (buttonSound) {
                buttonSound.click();
            }
        }
    });
    // Acceso rápido por teclado para desactivar animaciones
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "a") {
            e.preventDefault();
            const buttonAnimations = document.getElementById("button-animations");
            if (buttonAnimations) {
                buttonAnimations.click();
            }
        }
    });
    // Acceso rápido por teclado al modo escala de grises
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key.toLowerCase() === "g") {
            e.preventDefault();
            const buttonGrayscale = document.getElementById("button-grayscale");
            if (buttonGrayscale) {
                buttonGrayscale.click();
            }
        }
    });
}
