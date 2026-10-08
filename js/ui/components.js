/* ==========================================
    CARGAR COMPONENTES HTML
========================================== */
import { getVillaDoloresWeather } from "./buttons.js";

export function renderLoader() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    const pageTitles = {
        "index.html": "¡Bienvenido al sitio!",
        "about.html": "Sobre nosotros",
        "contact.html": "Contacto y sugerencias",
        "projects.html": "Nuestros proyectos",
        "school.html": "Trámites y reglamento",
        "credits.html": "Créditos y colaboradores",
    };
    // 3. Evaluamos la página actual
    const isHomePage = page === "index.html" || page === "";
    // Título principal
    const loaderText = pageTitles[page] || "Cargando...";
    // Subtítulo: si es el inicio muestra la institución, en subpáginas dice "Cargando..."
    const loaderSubtext = isHomePage ? "<p>Centro de Estudiantes IPET Nº 424</p>" : "<p>Cargando...</p>";
    // 4. Inyectamos la estructura HTML en el DOM
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
    document.body.insertAdjacentHTML("afterbegin", loaderHTML);
}

export async function initComponents() {
    // Función para cargar HTML dinámicamente
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
        loadComponent("aside-config-container", "components/_aside-config.html"),
        loadComponent("aside-news-container", "components/_aside-news.html"),
        loadComponent("footer-container", "components/_footer.html"),
        loadComponent("modal-in-dev-container", "components/_modal-in-dev.html"),
        loadComponent("modal-whats-new-container", "components/_modal-whats-new.html"),
    ]);
    // Una vez inyectado el HTML del aside en el DOM:
    await getVillaDoloresWeather();
}

export function initPageTitle() {
    // 1. Identificador institucional único (sufijo)
    const SITE_SUFFIX = "| Centro de Estudiantes IPET N° 424";
    // 2. Obtenemos el nombre de la página actual desde la URL
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    // 3. Diccionario con el título específico para cada subpágina
    const pageTitles = {
        "index.html": "Inicio",
        "nosotros.html": "Nosotros",
        "contacto.html": "Contacto",
        "proyectos.html": "Proyectos",
        "tramites.html": "Trámites",
        "creditos.html": "Créditos",
        "404.html": "Página no encontrada",
    };
    // 4. Seleccionamos el nombre o usamos uno genérico si no coincide
    const sectionName = pageTitles[page] || "Portal";
    // 5. Asignamos el título final a la pestaña con la estructura: [Sección] | [Marca]
    document.title = `${sectionName} ${SITE_SUFFIX}`;
}
