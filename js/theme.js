/* ==========================================
    SISTEMA GLOBAL DE TEMAS Y MODOS VISUALES
   ========================================== */

// Configuración de temas disponibles y su información de UI
const THEMES = {
    light: {
        class: '',
        favicon: 'assets/img/favicons/light.png',
        buttonText: 'Modo Oscuro'
    },
    dark: {
        class: 'dark-mode',
        favicon: 'assets/img/favicons/dark.png',
        buttonText: 'Modo Claro'
    },
    'high-contrast': {
        class: 'high-contrast-mode',
        favicon: 'assets/img/favicons/contrast.png',
        buttonText: 'Modo Normal'
    },
    grayscale: {
        class: 'grayscale-mode',
        favicon: 'assets/img/favicons/gray.png',
        buttonText: 'Modo Normal'
    }
};

export function initTheme() {
    // Actualiza la ruta del favicon según el tema
    function updateFavicon(themeKey) {
        const favicon = document.getElementById('favicon');
        if (favicon && THEMES[themeKey]) {
            favicon.href = THEMES[themeKey].favicon;
        }
    }
    // Actualiza el meta color de la barra del navegador
    function updateMetaThemeColor() {
        const metaTheme = document.getElementById('theme-color');
        if (metaTheme) {
        const bgColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--bg-header').trim();
        if (bgColor) {
            metaTheme.setAttribute('content', bgColor);
        }
        }
    }
    // Detecta cuál es el tema actualmente aplicado en el DOM
    function getActiveThemeFromDOM() {
        const body = document.body;
        if (body.classList.contains('dark-mode')) return 'dark';
        if (body.classList.contains('high-contrast-mode')) return 'high-contrast';
        if (body.classList.contains('grayscale-mode')) return 'grayscale';
        return 'light';
    }
    // Aplica el tema seleccionado al <body> borrando otros temas previos
    function applyTheme(themeKey) {
        const body = document.body;
        const html = document.documentElement; //
        // Remover todas las clases de temas en ambos elementos
        body.classList.remove('dark-mode', 'high-contrast-mode', 'grayscale-mode');
        html.classList.remove('grayscale-mode');
        // Si hay una clase para el tema elegido, la agregamos
        if (THEMES[themeKey] && THEMES[themeKey].class) {
            body.classList.add(THEMES[themeKey].class);
            if (themeKey === 'grayscale') {
                html.classList.add('grayscale-mode');
            }
        }
        // Persistir preferencia
        localStorage.setItem('activeTheme', themeKey);
        // Actualizar interfaz
        updateFavicon(themeKey);
        setTimeout(updateMetaThemeColor, 50);
        syncUIButtons();
    }
    // Activa o desactiva el Modo Descanso (Sepia/Filtro cálido)
    function setRestMode(enabled) {
        const html = document.documentElement;
        html.classList.toggle('rest-mode', enabled);
        localStorage.setItem('restMode', enabled ? 'activado' : 'desactivado');
        const buttonRestMode = document.getElementById('button-rest');
        if (buttonRestMode) {
            buttonRestMode.textContent = enabled ? 'Modo Normal' : 'Modo Descanso';
        }
    }
    // Sincroniza el texto/estado de los botones en el DOM (o al inyectarse por Fetch)
    function syncUIButtons() {
        const currentTheme = getActiveThemeFromDOM();
        const buttonTheme = document.getElementById('button-theme');
        if (buttonTheme) {
            // Si está en claro pide pasar a oscuro, si está en cualquier otro modo pide volver a claro
            buttonTheme.textContent = currentTheme === 'light' ? 'Modo Oscuro' : 'Modo Claro';
        }
        const buttonRest = document.getElementById('button-rest');
        if (buttonRest) {
            const isRestActive = document.documentElement.classList.contains('rest-mode');
            buttonRest.textContent = isRestActive ? 'Modo Normal' : 'Modo Descanso';
        }
    }
    // Detecta el tema preferido (localStorage > Preferencia del Sistema > Light)
    function getCurrentTheme() {
        const savedTheme = localStorage.getItem('activeTheme');
        if (savedTheme && THEMES[savedTheme]) {
            return savedTheme;
        }
        // Preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    // -------------------------------------------------------------
    // 1. CARGA INICIAL
    // -------------------------------------------------------------
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme);
    // Restaurar Modo Descanso
    if (localStorage.getItem('restMode') === 'activado') {
        setRestMode(true);
    }
    // -------------------------------------------------------------
    // 2. DELEGACIÓN DE EVENTOS DE CLIC (BOTONES)
    // -------------------------------------------------------------
    document.addEventListener('click', (e) => {
        // Botón principal de alternar modo (Claro / Oscuro)
        if (e.target.closest('#button-theme')) {
            const currentTheme = getActiveThemeFromDOM();
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        }
        // Botón de descanso
        else if (e.target.closest('#button-rest')) {
            const isRestActive = document.documentElement.classList.contains('rest-mode');
            setRestMode(!isRestActive);
        }
        // Botones dedicados con atributo data-set-theme (Se ignora si ya era #button-theme)
        else if (e.target.closest('[data-set-theme]')) {
            const themeBtn = e.target.closest('[data-set-theme]');
            const targetTheme = themeBtn.dataset.setTheme;
            const currentTheme = getActiveThemeFromDOM();
            // Si vuelves a presionar el botón del modo activo, se desactiva regresando a 'light'
            if (currentTheme === targetTheme) {
                applyTheme('light');
            } else if (THEMES[targetTheme]) {
                applyTheme(targetTheme);
            }
        }
    });
    // -------------------------------------------------------------
    // 3. MUTATION OBSERVER (Para botones cargados por fetch en el Aside)
    // -------------------------------------------------------------
    const observer = new MutationObserver(() => {
        const buttonTheme = document.getElementById('button-theme');
        if (buttonTheme) {
            syncUIButtons();
            observer.disconnect(); // Detiene el observador inmediatamente
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // -------------------------------------------------------------
    // 4. ESCUCHAR CAMBIOS EN EL SISTEMA OPERATIVO
    // -------------------------------------------------------------
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('activeTheme') === null) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

/* export function initTheme() {
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
} */