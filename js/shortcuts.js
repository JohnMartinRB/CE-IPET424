/* ==========================================
    ATAJOS DE TECLADO
   ========================================== */

export function initShortcuts() {
    // Acceso rápido por teclado al modo oscuro
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'd') {
            e.preventDefault();
            const botonmodo = document.getElementById('button-theme');
            if (botonmodo) {
                botonmodo.click();
            }
        }
    });
    // Acceso rápido por teclado para copiar link
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            const botonmodo = document.getElementById('button-copy-link');
            if (botonmodo) {
                botonmodo.click();
            }
        }
    });
    // Acceso rápido por teclado al modo monocromático
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'm') {
            e.preventDefault();
            const botonmodo = document.getElementById('button-monochrome');
            if (botonmodo) {
                botonmodo.click();
            }
        }
    });
}