/* ==========================================
    VENTANAS MODALES DEL HEADER
========================================== */
export function initHeader() {
    const modal = document.getElementById("header-modal");
    if (!modal) return;
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closebutton = document.getElementById("modal-close-button");
    const overlay = document.getElementById("modal-overlay");
    // Mapeo de cada botón del header con su título y el ID del contenido HTML
    const modalMap = {
        "header-button-themes": { title: "Temas y Colores", contentId: "content-themes" },
        "header-button-accessibility": { title: "Accesibilidad", contentId: "content-accessibility" },
        "header-button-settings": { title: "Opciones de Interfaz", contentId: "content-settings" },
        "header-button-share": { title: "Compartir Sitio", contentId: "content-share" },
    };
    let activeContentNode = null;
    let activeSourceContainer = null;
    const openModal = (key) => {
        const config = modalMap[key];
        if (!config) return;
        modalTitle.textContent = config.title;
        modalBody.innerHTML = "";
        activeSourceContainer = document.getElementById(config.contentId);
        if (activeSourceContainer) {
            activeContentNode = activeSourceContainer.firstElementChild;
            // Movemos los elementos hijos al body del modal
            while (activeSourceContainer.firstChild) {
                modalBody.appendChild(activeSourceContainer.firstChild);
            }
        }
        modal.classList.add("is-active");
        modal.setAttribute("aria-hidden", "false");
    };
    const closeModal = () => {
        // Devolvemos los elementos a su contenedor oculto original al cerrar
        if (activeSourceContainer && modalBody.hasChildNodes()) {
            while (modalBody.firstChild) {
                activeSourceContainer.appendChild(modalBody.firstChild);
            }
        }
        modal.classList.remove("is-active");
        modal.setAttribute("aria-hidden", "true");
    };
    // Conectar eventos a los 4 botones del header
    Object.keys(modalMap).forEach((id) => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", () => openModal(id));
        }
    });
    if (closebutton) closebutton.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-active")) {
            closeModal();
        }
    });
}
