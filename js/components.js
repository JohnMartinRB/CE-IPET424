/* ==========================================
    CARGAR COMPONENTES HTML - FUNCIÓN INICIAR COMPONENTES
   ========================================== */
import { getVillaDoloresWeather } from './buttons.js';

export function renderLoader() {
    // Comprobamos si la página actual es la principal (index.html o la raíz "/")
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    const loaderText = isHomePage ? '¡Bienvenido al sitio!' : 'Cargando...';
    const loaderSubtext = isHomePage ? '<p>Centro de Estudiantes IPET Nº 424</p>' : '';
    const loaderHTML = `
        <div id="loader-screen" class="loader-screen">
        <div id="loader-content" class="loader-content">
            <div id="loader-spinner" class="loader-spinner"></div>
            <h2>${loaderText}</h2>
            ${loaderSubtext}
        </div>
        </div>
    `;

    // Se inserta como primer elemento dentro del <body>
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
}

export async function initComponents() {
    // Función para cargar HTML dinámicamente
    function loadComponent(containerId, htmlFile) {
        fetch(htmlFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar ${htmlFile}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
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

                        yearSpan.textContent = (startYear === currentYear) 
                            ? `${startYear}` 
                            : `${startYear}-${currentYear}`;
                    }
                }
            })
            .catch(error => {
                console.error(error);
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = '<p class="component-error">No se pudo cargar esta parte de la página.</p>';
                }
            });
    }
    // Esperamos a que todos los componentes se terminen de inyectar
    await Promise.all([
        loadComponent("header-container", "components/header.html"),
        loadComponent("aside-config-container", "components/aside-config.html"),
        loadComponent("footer-container", "components/footer.html")
    ]);
    // Una vez inyectado el HTML del aside en el DOM:
    await getVillaDoloresWeather();
}