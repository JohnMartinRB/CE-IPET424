/* ==========================================
    EASTER EGG: GIRO DE PANTALLA
========================================== */
export function initFlip() {
    let flipBuffer = "";
    document.addEventListener("keydown", (e) => {
        // Se ignora el evento si el usuario está tipeando en un input o textarea
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        flipBuffer += e.key.toLowerCase();
        if (flipBuffer.length > 5) {
            flipBuffer = flipBuffer.slice(-5);
        }
        if (flipBuffer.endsWith("flip") || flipBuffer.endsWith("girar") || flipBuffer.endsWith("giro")) {
            flipBuffer = "";
            triggerBarrelRoll();
        }
    });
    function triggerBarrelRoll() {
        const rootElement = document.documentElement; // Elemento <html>
        if (rootElement.classList.contains("barrel-roll")) return;
        rootElement.classList.add("barrel-roll");
        setTimeout(() => {
            rootElement.classList.remove("barrel-roll");
        }, 2500);
    }
}
