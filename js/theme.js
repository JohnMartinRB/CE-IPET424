/* ==========================================
    MODO OSCURO - FUNCIÓN DE INICIAR TEMA
   ========================================== */

export function initTheme() {
    // Función para cambiar la ruta del favicon
    function actualizarFavicon(esOscuro) {
        const favicon = document.getElementById('favicon');
        if (favicon) {
            favicon.href = esOscuro 
            ? 'assets/img/logos/centro-dark.png' 
            : 'assets/img/logos/centro.png';
        }
    }

    // 1. AL CARGAR LA PÁGINA: Comprobar localStorage O preferencia del dispositivo
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    const prefiereOscuroSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si ya guardó 'true' O (no guardó nada Y su celular/PC está en modo oscuro)
    if (modoOscuroGuardado === 'true' || (modoOscuroGuardado === null && prefiereOscuroSistema)) {
        document.body.classList.add('modo-oscuro');
        actualizarFavicon(true);
    } else {
        actualizarFavicon(false);
    }

    // 2. EVENTO CLIC: Cambiar modo, actualizar localStorage y Favicon
    document.addEventListener('click', function (e) {
        const botonmodo = e.target.closest('#boton-modo');
        if (botonmodo) {
            const cuerpo = document.body;
            // Con toggle activamos/desactivamos la clase
            cuerpo.classList.toggle('modo-oscuro');
            // Verificamos si quedó activo
            const esModoOscuro = cuerpo.classList.contains('modo-oscuro');
            // Guardamos la preferencia en el navegador
            localStorage.setItem('modoOscuro', esModoOscuro);

            // Actualizamos el Favicon
            actualizarFavicon(esModoOscuro);

            // Actualizamos el texto del botón
            if (esModoOscuro) {
                botonmodo.textContent = "Modo Claro ☀️";
            } else {
            botonmodo.textContent = "Modo Oscuro 🌙";
            }
        }
    });

    // 3. ACTUALIZAR TEXTO DEL BOTÓN SI SE CARGA POR FETCH
    // Como el botón se inyecta por fetch, cuando aparezca en pantalla sincronizamos su texto
    const observador = new MutationObserver(() => {
        const botonmodo = document.getElementById('boton-modo');
        if (botonmodo) {
            if (document.body.classList.contains('modo-oscuro')) {
                botonmodo.textContent = "Modo Claro ☀️";
            }
            observador.disconnect(); // Una vez actualizado, dejamos de observar
        }
    });
    observador.observe(document.body, { childList: true, subtree: true });

    // 4. CAMBIOS EN TIEMPO REAL DEL SISTEMA (Opcional pero recomendado)
    // Si el usuario cambia el tema de su celular y NUNCA tocó el botón del sitio
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('modoOscuro') === null) {
            const esOscuro = e.matches;
            document.body.classList.toggle('modo-oscuro', esOscuro);
            actualizarFavicon(esOscuro);
            
            const botonmodo = document.getElementById('boton-modo');
            if (botonmodo) {
                botonmodo.textContent = esOscuro ? "Modo Claro ☀️" : "Modo Oscuro 🌙";
            }
        }
    });
}