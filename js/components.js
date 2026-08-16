/* ==========================================
    CARGAR COMPONENTES HTML - FUNCIÓN INICIAR COMPONENTES
   ========================================== */

export function initComponents() {
    // Función para cargar HTML dinámicamente
    function cargarComponente(idContenedor, archivoHTML) {
        fetch(archivoHTML)
            .then(response => response.text())
            .then(data => {
            const contenedor = document.getElementById(idContenedor);
            if (contenedor) {
                contenedor.innerHTML = data;
            }
        });
    }
    // Cargar el header y el footer
    cargarComponente("header-container", "components/header.html");
    cargarComponente("footer-container", "components/footer.html");
}