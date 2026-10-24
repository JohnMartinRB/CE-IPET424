/* ==========================================
    SISTEMA GLOBAL DE TEMAS Y MODOS VISUALES
========================================== */
const THEMES = {
    light: {
        class: "",
        favicon: "assets/img/favicons/light.png",
        buttonText: "Modo Oscuro",
    },
    dark: {
        class: "dark-mode",
        favicon: "assets/img/favicons/dark.png",
        buttonText: "Modo Claro",
    },
    "high-contrast": {
        class: "high-contrast-mode",
        favicon: "assets/img/favicons/contrast.png",
        buttonText: "Modo Normal",
    },
    code: {
        class: "code-mode",
        favicon: "assets/img/favicons/dark.png",
        buttonText: "Modo Código",
    },
    colorblind: {
        class: "colorblind-mode",
        favicon: "assets/img/favicons/dark.png",
        buttonText: "Modo Daltónico",
    },
    mistery: {
        class: "mistery-mode",
        favicon: "assets/img/favicons/mistery.png",
        buttonText: "Modo mistery",
    },
    holidays: {
        class: "holidays-mode",
        favicon: "assets/img/favicons/holidays.png",
        buttonText: "Modo Navidad",
    },
    summer: {
        class: "summer-mode",
        favicon: "assets/img/favicons/summer.png",
        buttonText: "Modo Verano",
    },
    pink: {
        class: "pink-mode",
        favicon: "assets/img/favicons/pink.png",
        buttonText: "Modo Rosa",
    },
};

export function initTheme() {
    // Actualiza la ruta del favicon según el tema
    function updateFavicon(themeKey) {
        const favicon = document.getElementById("favicon");
        if (favicon && THEMES[themeKey]) {
            favicon.href = THEMES[themeKey].favicon;
        }
    }
    // Actualiza el meta color de la barra del navegador
    function updateMetaThemeColor() {
        const metaTheme = document.getElementById("theme-color");
        if (metaTheme) {
            const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg-header").trim();
            if (bgColor) {
                metaTheme.setAttribute("content", bgColor);
            }
        }
    }
    function updateLogo(themeKey) {
        const logoHeader = document.getElementById("header-logo-centro");
        if (logoHeader) {
            if (themeKey === "dark" || themeKey === "high-contrast" || themeKey === "code") {
                logoHeader.src = "assets/img/logos/ce/dark.png";
            } else if (themeKey === "mistery") {
                logoHeader.src = "assets/img/logos/ce/mistery.png";
            } else if (themeKey === "holidays") {
                logoHeader.src = "assets/img/logos/ce/holidays.png";
            } else if (themeKey === "summer") {
                logoHeader.src = "assets/img/logos/ce/summer.png";
            } else if (themeKey === "pink") {
                logoHeader.src = "assets/img/logos/ce/pink.png";
            } else {
                logoHeader.src = "assets/img/logos/ce/centro.png";
            }
        }
    }
    // Detecta cuál es el tema actualmente aplicado en el DOM
    function getActiveThemeFromDOM() {
        const body = document.body;
        if (body.classList.contains("dark-mode")) return "dark";
        if (body.classList.contains("high-contrast-mode")) return "high-contrast";
        if (body.classList.contains("code-mode")) return "code";
        if (body.classList.contains("colorblind-mode")) return "colorblind";
        if (body.classList.contains("mistery-mode")) return "mistery";
        if (body.classList.contains("holidays-mode")) return "holidays";
        if (body.classList.contains("summer-mode")) return "summer";
        if (body.classList.contains("pink-mode")) return "pink";
        return "light";
    }
    // Aplica el tema seleccionado al <body> borrando otros temas previos
    function applyTheme(themeKey) {
        const body = document.body;
        const html = document.documentElement; //
        // Remover todas las clases de temas en ambos elementos
        body.classList.remove(
            "dark-mode",
            "high-contrast-mode",
            "code-mode",
            "colorblind-mode",
            "mistery-mode",
            "holidays-mode",
            "summer-mode",
            "pink-mode",
        );
        html.classList.remove("grayscale-mode");
        // Si hay una clase para el tema elegido, la agregamos
        if (THEMES[themeKey] && THEMES[themeKey].class) {
            body.classList.add(THEMES[themeKey].class);
            if (themeKey === "grayscale") {
                html.classList.add("grayscale-mode");
            }
        }
        // Persistir preferencia
        localStorage.setItem("activeTheme", themeKey);
        // Actualizar interfaz
        updateFavicon(themeKey);
        updateLogo(themeKey);
        setTimeout(updateMetaThemeColor, 50);
        syncUIButtons();
    }
    // Activa o desactiva el Modo Descanso (Sepia/Filtro cálido)
    function setRestMode(enabled) {
        const html = document.documentElement;
        html.classList.toggle("rest-mode", enabled);
        localStorage.setItem("restMode", enabled ? "activado" : "desactivado");
        const buttonRestMode = document.getElementById("button-rest");
        if (buttonRestMode) {
            buttonRestMode.textContent = enabled ? "Modo Normal" : "Modo Descanso";
        }
    }
    // Activa o desactiva el Modo Escala de Grises de forma independiente
    function setGrayscaleMode(enabled) {
        const html = document.documentElement;
        html.classList.toggle("grayscale-mode", enabled);
        localStorage.setItem("grayscaleMode", enabled ? "activado" : "desactivado");
        const buttonGrayscale = document.getElementById("button-grayscale");
        if (buttonGrayscale) {
            buttonGrayscale.textContent = enabled ? "Modo Normal" : "Escala de grises";
        }
    }
    // Sincroniza el texto/estado de los botones en el DOM (o al inyectarse por Fetch)
    function syncUIButtons() {
        const currentTheme = getActiveThemeFromDOM();
        const buttonTheme = document.getElementById("button-theme");
        if (buttonTheme) {
            // Si está en claro pide pasar a oscuro, si está en cualquier otro modo pide volver a claro
            buttonTheme.textContent = currentTheme === "light" ? "Modo Oscuro" : "Modo Claro";
        }
        const buttonRest = document.getElementById("button-rest");
        if (buttonRest) {
            const isRestActive = document.documentElement.classList.contains("rest-mode");
            buttonRest.textContent = isRestActive ? "Modo Normal" : "Modo Descanso";
        }
    }
    // Detecta el tema priorizando el inicio de nuevas estaciones, pero permitiendo cambios manuales
    function getCurrentTheme() {
        const seasonalTheme = getSeasonalTheme();
        const lastSeason = localStorage.getItem("lastActiveSeason");
        // Si estamos en un período estacional
        if (seasonalTheme && THEMES[seasonalTheme]) {
            // Si es una NUEVA estación que acaba de empezar (cambió la fecha/temporada respecto a la última registrada)
            if (seasonalTheme !== lastSeason) {
                localStorage.setItem("lastActiveSeason", seasonalTheme);
                localStorage.removeItem("activeTheme"); // Borramos el modo anterior para forzar el estacional por defecto
                return seasonalTheme;
            }
            // Si ya estamos dentro de la misma estación, permitimos que la elección manual del usuario tenga prioridad
            const savedTheme = localStorage.getItem("activeTheme");
            if (savedTheme && THEMES[savedTheme]) {
                return savedTheme;
            }
            return seasonalTheme;
        }
        // Si ya pasó la fecha estacional, limpiamos el registro de estación
        localStorage.removeItem("lastActiveSeason");
        // Elección manual normal fuera de fechas estacionales
        const savedTheme = localStorage.getItem("activeTheme");
        if (savedTheme && THEMES[savedTheme]) {
            return savedTheme;
        }
        // Preferencia del sistema operativo
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    }
    // Detecta si hay una fecha estacional activa (prioridad alta por período corto)
    function getSeasonalTheme() {
        const now = new Date();
        const month = now.getMonth() + 1; // 1 = Enero, 12 = Diciembre
        const day = now.getDate();
        // 1. Verano (Enero y Febrero) -> Hemisferio Sur
        if ((month === 1 && day >= 7) || (month === 2 && day <= 20)) {
            return "summer";
        }
        // 2. Mes Rosa / Prevención (Del 1 al 26 de octubre)
        if (month === 10 && day >= 1 && day <= 26) {
            return "pink";
        }
        // 3. mistery (Del 27 de octubre al 2 de noviembre)
        if ((month === 10 && day >= 27) || (month === 11 && day <= 2)) {
            return "mistery";
        }
        // 4. Navidad y Año Nuevo (Del 15 de diciembre al 6 de enero)
        if ((month === 12 && day >= 8) || (month === 1 && day <= 6)) {
            return "holidays";
        }
        return null;
    }
    // -------------------------------------------------------------
    // 1. CARGA INICIAL
    // -------------------------------------------------------------
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme);
    // Restaurar Modo Descanso
    if (localStorage.getItem("restMode") === "activado") {
        setRestMode(true);
    }
    // Restaurar Escala de Grises
    if (localStorage.getItem("grayscaleMode") === "activado") {
        setGrayscaleMode(true);
    }
    // -------------------------------------------------------------
    // 2. DELEGACIÓN DE EVENTOS DE CLIC (BOTONES)
    // -------------------------------------------------------------
    document.addEventListener("click", (e) => {
        // Botón principal de alternar modo (Claro / Oscuro)
        if (e.target.closest("#button-theme")) {
            const currentTheme = getActiveThemeFromDOM();
            const nextTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(nextTheme);
        }
        // Botón de descanso
        else if (e.target.closest("#button-rest")) {
            const isRestActive = document.documentElement.classList.contains("rest-mode");
            setRestMode(!isRestActive);
        }
        // Botón de escala de grises
        else if (e.target.closest("#button-grayscale")) {
            const isGrayscaleActive = document.documentElement.classList.contains("grayscale-mode");
            setGrayscaleMode(!isGrayscaleActive);
        }
        // Botones dedicados con atributo data-set-theme (Se ignora si ya era #button-theme)
        else if (e.target.closest("[data-set-theme]")) {
            const themeBtn = e.target.closest("[data-set-theme]");
            const targetTheme = themeBtn.dataset.setTheme;
            const currentTheme = getActiveThemeFromDOM();
            // Si vuelves a presionar el botón del modo activo, se desactiva regresando a 'light'
            if (currentTheme === targetTheme) {
                applyTheme("light");
            } else if (THEMES[targetTheme]) {
                applyTheme(targetTheme);
            }
        }
    });
    // -------------------------------------------------------------
    // 3. MUTATION OBSERVER (Para botones cargados por fetch en el Aside)
    // -------------------------------------------------------------
    const observer = new MutationObserver(() => {
        const buttonTheme = document.getElementById("button-theme");
        if (buttonTheme) {
            syncUIButtons();
            observer.disconnect(); // Detiene el observador inmediatamente
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // -------------------------------------------------------------
    // 4. ESCUCHAR CAMBIOS EN EL SISTEMA OPERATIVO
    // -------------------------------------------------------------
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (localStorage.getItem("activeTheme") === null) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });
}
