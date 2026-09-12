/* ==========================================
    MODO OSCURO - FUNCIÓN DE INICIAR TEMA
   ========================================== */

export function initTheme() {
    // Función para cambiar la ruta del favicon
    function updateFavicon(esOscuro) {
        const favicon = document.getElementById('favicon');
        if (favicon) {
            favicon.href = esOscuro 
            ? 'assets/img/favicons/dark.png' 
            : 'assets/img/favicons/light.png';
        }
    }
    // Función para actualizar el color de la barra del navegador
    function updateMetaThemeColor() {
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
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Si ya guardó 'true' O (no guardó nada Y su celular/PC está en modo oscuro)
    if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDarkSystem)) {
        document.body.classList.add('dark-mode');
        updateFavicon(true);
    } else {
        updateFavicon(false);
    }
    setTimeout(updateMetaThemeColor, 50);
    // 2. EVENTO CLIC: Cambiar modo, actualizar localStorage y Favicon
    document.addEventListener('click', function (e) {
        const buttonmode = e.target.closest('#button-theme');
        if (buttonmode) {
            const body = document.body;
            // Con toggle activamos/desactivamos la clase
            body.classList.toggle('dark-mode');
            // Verificamos si quedó activo
            const isDarkMode = body.classList.contains('dark-mode');
            // Guardamos la preferencia en el navegador
            localStorage.setItem('darkMode', isDarkMode);
            // Actualizamos el Favicon
            updateFavicon(isDarkMode);
            // Actualizamos el Meta Theme Color para la barra del navegador
            updateMetaThemeColor();
            // Actualizamos el texto del botón
            if (isDarkMode) {
                buttonmode.textContent = "Modo Claro";
            } else {
            buttonmode.textContent = "Modo Oscuro";
            }
        }
    });
    // 3. ACTUALIZAR TEXTO DEL BOTÓN SI SE CARGA POR FETCH
    // Como el botón se inyecta por fetch, cuando aparezca en pantalla sincronizamos su texto
    const observer = new MutationObserver(() => {
        const buttonmode = document.getElementById('button-theme');
        if (buttonmode) {
            if (document.body.classList.contains('dark-mode')) {
                buttonmode.textContent = "Modo Claro";
            }
            observer.disconnect(); // Una vez actualizado, dejamos de observar
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // 4. CAMBIOS EN TIEMPO REAL DEL SISTEMA (Opcional pero recomendado)
    // Si el usuario cambia el tema de su celular y NUNCA tocó el botón del sitio
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            const isDark = e.matches;
            document.body.classList.toggle('dark-mode', isDark);
            updateFavicon(isDark);
            updateMetaThemeColor();
            const buttonmode = document.getElementById('button-theme');
            if (buttonmode) {
                buttonmode.textContent = isDark ? "Modo Claro" : "Modo Oscuro";
            }
        }
    });
}