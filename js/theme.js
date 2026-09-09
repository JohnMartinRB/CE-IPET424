/* ==========================================
    MODO OSCURO - FUNCIÓN DE INICIAR TEMA
   ========================================== */

export function initTheme() {
    // Función para cambiar la ruta del favicon
    function actualizarFavicon(esOscuro) {
        const favicon = document.getElementById('favicon');
        if (favicon) {
            favicon.href = esOscuro 
            ? 'assets/img/favicons/dark.png' 
            : 'assets/img/favicons/light.png';
        }
    }
    // Función para actualizar el color de la barra del navegador
    function actualizarMetaThemeColor() {
        const metaTheme = document.getElementById('theme-color');
        if (metaTheme) {
            // Extrae el color real asignado a la variable --bg-header del CSS activo
            const colorFondo = getComputedStyle(document.documentElement)
                .getPropertyValue('--bg-header').trim();
            if (colorFondo) {
                metaTheme.setAttribute('content', colorFondo);
            }
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
    setTimeout(actualizarMetaThemeColor, 50);
    // 2. EVENTO CLIC: Cambiar modo, actualizar localStorage y Favicon
    document.addEventListener('click', function (e) {
        const botonmodo = e.target.closest('#button-theme');
        if (botonmodo) {
            const cuerpo = document.body;
            // Con toggle activamos/desactivamos la clase
            cuerpo.classList.toggle('dark-mode');
            // Verificamos si quedó activo
            const esModoOscuro = cuerpo.classList.contains('dark-mode');
            // Guardamos la preferencia en el navegador
            localStorage.setItem('modoOscuro', esModoOscuro);
            // Actualizamos el Favicon
            actualizarFavicon(esModoOscuro);
            // Actualizamos el Meta Theme Color para la barra del navegador
            actualizarMetaThemeColor();
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
        const botonmodo = document.getElementById('button-theme');
        if (botonmodo) {
            if (document.body.classList.contains('dark-mode')) {
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
            document.body.classList.toggle('dark-mode', esOscuro);
            actualizarFavicon(esOscuro);
            actualizarMetaThemeColor();
            const botonmodo = document.getElementById('button-theme');
            if (botonmodo) {
                botonmodo.textContent = esOscuro ? "Modo Claro ☀️" : "Modo Oscuro 🌙";
            }
        }
    });
}