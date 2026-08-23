/* ==========================================
    CARGAR COMPONENTES HTML - FUNCIÓN INICIAR COMPONENTES
   ========================================== */

export function initComponents() {
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
    // Cargar el header y el footer
    cargarComponente("header-container", "components/header.html");
    cargarComponente("footer-container", "components/footer.html");
}