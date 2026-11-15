/* ==========================================
    ATAJOS DE TECLADO
========================================== */
export function initShortcuts() {
    // Mapa que asocia cada letra (en minúscula) con el ID del elemento a hacer clic
    const shortcutMap = {
        n: "aside-news-button-toggle",
        w: "aside-widgets-button-toggle",

        b: "header-button-search",
        c: "header-button-settings",
        e: "header-button-share",
        t: "header-button-themes",
        a: "header-button-accessibility",

        o: "button-dark",
        d: "button-rest",
        l: "button-copy-link",
    };
    document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        // 1. Manejo de atajos con la combinación Alt + Tecla
        if (e.altKey && shortcutMap[key]) {
            e.preventDefault();
            const element = document.getElementById(shortcutMap[key]);
            if (element) {
                element.click();
            }
            return;
        }
        // 2. Manejo de la tecla Escape para cerrar modales (caso especial)
        if (e.key === "Escape") {
            e.preventDefault();
            const closeButtons = document.querySelectorAll(".button-close-modal");
            closeButtons.forEach((button) => {
                button.click();
            });
        }
    });
}
