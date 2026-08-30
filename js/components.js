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