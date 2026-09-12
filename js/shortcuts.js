/* ==========================================
    ATAJOS DE TECLADO
   ========================================== */

export function initShortcuts() {
    // Acceso rápido por teclado al modo oscuro
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'd') {
            e.preventDefault();
            const buttonmode = document.getElementById('button-theme');
            if (buttonmode) {
                buttonmode.click();
            }
        }
    });
    // Acceso rápido por teclado para copiar link
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            const buttonlink = document.getElementById('button-copy-link');
            if (buttonlink) {
                buttonlink.click();
            }
        }
    });
    // Acceso rápido por teclado al modo monocromático
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'm') {
            e.preventDefault();
            const buttonmonochrome = document.getElementById('button-monochrome');
            if (buttonmonochrome) {
                buttonmonochrome.click();
            }
        }
    });
    // Acceso rápido por teclado al modo escala de grises
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'g') {
            e.preventDefault();
            const buttongrayscale = document.getElementById('button-grayscale');
            if (buttongrayscale) {
                buttongrayscale.click();
            }
        }
    });
    // Acceso rápido por teclado al modo descanso
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'r') {
            e.preventDefault();
            const buttonrest = document.getElementById('button-rest');
            if (buttonrest) {
                buttonrest.click();
            }
        }
    });
    // Acceso rápido por teclado al modo de alto contraste
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'c') {
            e.preventDefault();
            const buttonhighcontrast = document.getElementById('button-high-contrast');
            if (buttonhighcontrast) {
                buttonhighcontrast.click();
            }
        }
    });
}