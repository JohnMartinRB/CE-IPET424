/* ==========================================
    MODO LECTURA DE PDFS INTEGRADO (DEFINITIVO)
========================================== */
export function initPdfReader() {
    const overlay = document.getElementById("pdf-modal-overlay");
    const iframe = document.getElementById("pdf-iframe");
    const titleSpan = document.getElementById("pdf-modal-title");
    const closeButton = document.getElementById("pdf-modal-close");
    const copyButton = document.getElementById("pdf-button-copy");
    const expandButton = document.getElementById("pdf-button-expand");
    const modalContainer = document.querySelector(".pdf-modal-container");
    if (!overlay || !iframe) {
        return;
    }
    // Escuchamos clics globales en la página para ambos atributos posibles
    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-pdf-url], [data-pdf-reader]");
        if (!trigger) return;
        // FRENAMOS por completo la navegación por defecto del navegador
        e.preventDefault();
        // Obtenemos la URL ya sea desde href (si es un <a>) o desde data-pdf-url (si es un <button>)
        const pdfUrl = trigger.href || trigger.dataset.pdfUrl;
        const pdfTitle = trigger.dataset.pdfTitle || "Documento PDF";
        if (!pdfUrl) return;
        console.log("📄 Abriendo PDF en modo lectura:", pdfUrl);
        // Inyectamos la URL en el iframe y mostramos el modal flotante
        iframe.src = pdfUrl;
        titleSpan.textContent = pdfTitle;
        overlay.classList.remove("hidden");
    });
    // Función para cerrar el visor modal
    function closePdfModal() {
        overlay.classList.add("hidden");
        iframe.src = ""; // Limpiamos el iframe para liberar memoria
    }
    if (closeButton) {
        closeButton.addEventListener("click", closePdfModal);
    }
    // Cerrar haciendo clic en el fondo oscuro
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closePdfModal();
        }
    });
    // Cerrar presionando la tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
            closePdfModal();
        }
    });
    if (copyButton) {
        copyButton.addEventListener("click", () => {
            const pdfUrl = iframe.src;
            if (!pdfUrl) return;
            // Copia la URL absoluta al portapapeles
            navigator.clipboard
                .writeText(pdfUrl)
                .then(() => {
                    copyButton.textContent = "¡Copiado!";
                    setTimeout(() => {
                        copyButton.textContent = "Copiar enlace";
                    }, 2000);
                })
                .catch((err) => {
                    console.error("Error al copiar el enlace: ", err);
                });
        });
    }
    if (expandButton && modalContainer) {
        expandButton.addEventListener("click", () => {
            modalContainer.classList.toggle("expanded");
            const isExpanded = modalContainer.classList.contains("expanded");
            expandButton.textContent = isExpanded ? "🗗 Restaurar" : "⤢ Expandir";
        });
    }
}
