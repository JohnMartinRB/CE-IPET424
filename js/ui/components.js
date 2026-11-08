/* ==========================================
    CARGAR COMPONENTES HTML
========================================== */
import { getVillaDoloresWeather } from "./buttons.js";

export async function initComponents() {
    function loadComponent(containerId, htmlFile) {
        return fetch(htmlFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar ${htmlFile}: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data;
                }
                // SI SE CARGÓ EL FOOTER: Actualizamos el año automáticamente
                if (containerId === "footer-container") {
                    const yearSpan = document.getElementById("footer-copyright-year");
                    if (yearSpan) {
                        const startYear = 2026;
                        const currentYear = new Date().getFullYear();
                        yearSpan.textContent =
                            startYear === currentYear ? `${startYear}` : `${startYear}-${currentYear}`;
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = '<p class="component-error">No se pudo cargar esta parte de la página.</p>';
                }
            });
    }
    // Esperamos a que todos los componentes se terminen de inyectar
    await Promise.all([
        loadComponent("header-container", "components/_header.html"),
        loadComponent("aside-news-container", "components/_aside-news.html"),
        loadComponent("aside-widgets-container", "components/_aside-widgets.html"),
        loadComponent("footer-container", "components/_footer.html"),
        loadComponent("modal-terms-container", "components/_modal-terms.html"),
        loadComponent("modal-in-dev-container", "components/_modal-in-dev.html"),
        loadComponent("modal-whats-new-container", "components/_modal-whats-new.html"),
    ]);
    // Una vez inyectado el HTML del aside en el DOM:
    await getVillaDoloresWeather();
}
