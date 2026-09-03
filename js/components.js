/* ==========================================
    CARGAR COMPONENTES HTML - FUNCIÓN INICIAR COMPONENTES
   ========================================== */
import { obtenerClimaVillaDolores } from './buttons.js';

export async function initComponents() {
    // Función para cargar HTML dinámicamente
    function cargarComponente(idContenedor, archivoHTML) {
        fetch(archivoHTML)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar ${archivoHTML}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const contenedor = document.getElementById(idContenedor);
                if (contenedor) {
                    contenedor.innerHTML = data;
                }
                // SI SE CARGÓ EL FOOTER: Actualizamos el año automáticamente
                if (idContenedor === "footer-container") {
                    // 1. Año automático
                    const yearSpan = document.getElementById("copyright-year");
                    if (yearSpan) {
                        yearSpan.textContent = new Date().getFullYear();
                    }
                    // 2. Versión/Commit automático desde GitHub API
                    const versionSpan = document.getElementById("version-tag");
                    if (versionSpan) {
                        fetch('https://api.github.com/repos/JohnMartinRB/CE-IPET424/commits/main')
                            .then(res => res.json())
                            .then(data => {
                                // Toma el Hash corto (primeros 7 caracteres) Ej: 2f7515c
                                const shortHash = data.sha.substring(0, 4); 
                                versionSpan.textContent = `(0.20 #${shortHash})`;
                            })
                            .catch(() => {
                                // Si falla por falta de internet o límite de API, mantiene el valor por defecto
                                versionSpan.textContent = `0.20`;
                            });
                    }
                }
            })
            .catch(error => {
                console.error(error);
                const contenedor = document.getElementById(idContenedor);
                if (contenedor) {
                    contenedor.innerHTML = '<p class="component-error">No se pudo cargar esta parte de la página.</p>';
                }
            });
    }
    // Esperamos a que todos los componentes se terminen de inyectar
    await Promise.all([
        cargarComponente("header-container", "components/header.html"),
        cargarComponente("aside-config-container", "components/aside-config.html"),
        cargarComponente("footer-container", "components/footer.html")
    ]);
    // Una vez inyectado el HTML del aside en el DOM:
    await obtenerClimaVillaDolores();
}