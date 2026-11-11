/* ==========================================
    VENTANAS MODALES DEL HEADER
========================================== */
// Variable global en el archivo para guardar el índice una vez descargado
let searchIndexCache = null;

export function initHeader() {
    const modal = document.getElementById("header-modal");
    if (!modal) return;
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closebutton = document.getElementById("modal-close-button");
    const overlay = document.getElementById("modal-overlay");
    const modalMap = {
        "header-button-search": { title: "Buscador del Sitio", contentId: "content-search" },
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
            while (activeSourceContainer.firstChild) {
                modalBody.appendChild(activeSourceContainer.firstChild);
            }
        }
        modal.classList.add("is-active");
        modal.setAttribute("aria-hidden", "false");
        // Si abrió el buscador, enfocamos el input automáticamente
        if (key === "header-button-search") {
            setTimeout(() => {
                const searchInput = document.getElementById("modal-search-input");
                if (searchInput) searchInput.focus();
                initLiveSearch();
            }, 100);
        }
    };
    const closeModal = () => {
        if (activeSourceContainer && modalBody.hasChildNodes()) {
            while (modalBody.firstChild) {
                activeSourceContainer.appendChild(modalBody.firstChild);
            }
        }
        modal.classList.remove("is-active");
        modal.setAttribute("aria-hidden", "true");
    };
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

// Lógica de filtrado en tiempo real para el buscador
async function initLiveSearch() {
    const input = document.getElementById("modal-search-input");
    const resultsContainer = document.getElementById("modal-search-results");
    if (!input || !resultsContainer) return;
    // 1. Cargamos el archivo JSON mediante fetch la primera vez
    if (!searchIndexCache) {
        try {
            const response = await fetch("data/search-index.json");
            if (!response.ok) throw new Error("No se pudo cargar el índice de búsqueda");
            searchIndexCache = await response.json();
        } catch (error) {
            console.error(error);
            resultsContainer.innerHTML = `<p class="search-no-results">Error al cargar el buscador.</p>`;
            return;
        }
    }
    // Limpiamos eventos anteriores para que no se dupliquen si abrís y cerrás el modal
    input.oninput = null;
    input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = "";
        if (query.length === 0) {
            resultsContainer.innerHTML = `<p class="search-hint">Escribe algo para comenzar la búsqueda en el sitio...</p>`;
            return;
        }
        // 2. Filtramos evaluando título, descripción, tipo Y el array de keywords
        const filtered = searchIndexCache.filter((item) => {
            const matchTitle = item.title.toLowerCase().includes(query);
            const matchDesc = item.description.toLowerCase().includes(query);
            const matchType = item.type.toLowerCase().includes(query);
            // Revisamos si alguna de las palabras clave del array coincide con lo que se busca
            const matchKeywords =
                item.keywords && item.keywords.some((keyword) => keyword.toLowerCase().includes(query));
            return matchTitle || matchDesc || matchType || matchKeywords;
        });
        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<p class="search-no-results">No se encontraron resultados para "${query}".</p>`;
            return;
        }
        filtered.forEach((item) => {
            const resultLink = document.createElement("a");
            resultLink.className = "search-result-item";
            if (item.isPdf) {
                // Si es PDF, le inyectamos los atributos para que abra con tu visor modal de lectura existente
                resultLink.setAttribute("href", item.url);
                resultLink.setAttribute("data-pdf-url", item.url);
                resultLink.setAttribute("data-pdf-title", item.title);
                resultLink.addEventListener("click", () => {
                    const modal = document.getElementById("header-modal");
                    if (modal) modal.classList.remove("is-active"); // Cierra el modal de búsqueda al abrir el PDF
                });
            } else {
                resultLink.href = item.url;
            }
            resultLink.innerHTML = `
                <span class="search-result-type">${item.type}</span>
                <span class="search-result-title">${item.title}</span>
                <p class="search-result-desc">${item.description}</p>
            `;
            resultsContainer.appendChild(resultLink);
        });
    });
}
