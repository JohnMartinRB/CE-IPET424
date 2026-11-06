/* ==========================================
    CARGAR COMPONENTES HTML
========================================== */
import { getVillaDoloresWeather } from "./buttons.js";

export function renderLoader() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    const pageTitles = {
        "index.html": "¡Bienvenido al sitio!",
        "nosotros.html": "Sobre Nosotros",
        "noticias.html": "Noticias y Novedades",
        "proyectos.html": "Nuestros Proyectos",
        "herramientas.html": "Herramientas Estudiantiles",
        "horarios.html": "Horarios",
        "calendario.html": "Calendario",
        "tramites.html": "Trámites y Reglamento",
        "recursos.html": "Recursos Útiles",
        "escuela.html": "Nuestra Escuela",
        "contacto.html": "Contacto",
        "creditos.html": "Créditos y Colaboradores",
        "terminos.html": "Términos y Condiciones",
    };
    const isHomePage = page === "index.html" || page === "";
    const loaderText = pageTitles[page] || "Cargando...";
    const loaderSubtext = isHomePage ? "<p>Centro de Estudiantes IPET Nº 424</p>" : "<p>Cargando...</p>";
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

export function initPageTitle() {
    const SITE_SUFFIX = "| Centro de Estudiantes IPET N° 424";
    const path = window.location.pathname;
    let page = path.split("/").pop().toLowerCase();
    if (!page || page === "") {
        page = "index.html";
    }
    // Diccionario con el título específico para cada subpágina
    const pageTitles = {
        "index.html": "Inicio",
        "nosotros.html": "Sobre Nosotros",
        "noticias.html": "Noticias y Novedades",
        "proyectos.html": "Proyectos",
        "herramientas.html": "Herramientas Estudiantiles",
        "horarios.html": "Horarios - Herramientas Estudiantiles",
        "calendario.html": "Calendario - Herramientas Estudiantiles",
        "tramites.html": "Trámites",
        "recursos.html": "Recursos Útiles",
        "escuela.html": "Nuestra Escuela",
        "contacto.html": "Contacto",
        "creditos.html": "Créditos",
        "terminos.html": "Términos y Condiciones",
        "404.html": "Página no encontrada",
    };
    const sectionName = pageTitles[page] || "Inicio";
    document.title = `${sectionName} ${SITE_SUFFIX}`;
}
