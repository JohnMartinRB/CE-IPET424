/* ==========================================
    SISTEMA GLOBAL DE TEMAS Y MODOS VISUALES
========================================== */
const THEMES = {
    light: {
        class: "",
        favicon: "/assets/img/favicons/light.png",
        buttonText: "Modo Oscuro",
    },
    dark: {
        class: "dark-mode",
        favicon: "/assets/img/favicons/dark.png",
        buttonText: "Modo Claro",
    },
    "high-contrast": {
        class: "high-contrast-mode",
        favicon: "/assets/img/favicons/dark.png",
        buttonText: "Modo Normal",
    },
    code: {
        class: "code-mode",
        favicon: "/assets/img/favicons/dark.png",
        buttonText: "Modo Código",
    },
    colorblind: {
        class: "colorblind-mode",
        favicon: "/assets/img/favicons/light.png",
        buttonText: "Modo Daltónico",
    },
    mistery: {
        class: "mistery-mode",
        favicon: "/assets/img/favicons/dark.png",
        buttonText: "Modo Misterio",
    },
    holidays: {
        class: "holidays-mode",
        favicon: "/assets/img/favicons/light.png",
        buttonText: "Modo Navidad",
    },
    summer: {
        class: "summer-mode",
        favicon: "/assets/img/favicons/light.png",
        buttonText: "Modo Verano",
    },
    pink: {
        class: "pink-mode",
        favicon: "/assets/img/favicons/light.png",
        buttonText: "Modo Rosa",
    },
};

export function initTheme() {
    function updateFavicon(themeKey) {
        const favicon = document.getElementById("favicon");
        if (favicon && THEMES[themeKey]) {
            favicon.href = THEMES[themeKey].favicon;
        }
    }
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
    function applyTheme(themeKey) {
        const body = document.body;
        const html = document.documentElement;
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
        if (THEMES[themeKey] && THEMES[themeKey].class) {
            body.classList.add(THEMES[themeKey].class);
            if (themeKey === "grayscale") {
                html.classList.add("grayscale-mode");
            }
        }
        localStorage.setItem("activeTheme", themeKey);
        updateFavicon(themeKey);
        updateLogo(themeKey);
        setTimeout(updateMetaThemeColor, 50);
        syncUIButtons();
    }
    function setRestMode(enabled) {
        const html = document.documentElement;
        html.classList.toggle("rest-mode", enabled);
        localStorage.setItem("restMode", enabled ? "activado" : "desactivado");
        const buttonRestMode = document.getElementById("button-rest");
        if (buttonRestMode) {
            buttonRestMode.textContent = enabled ? "Modo Normal" : "Modo Descanso";
        }
    }
    function setGrayscaleMode(enabled) {
        const html = document.documentElement;
        html.classList.toggle("grayscale-mode", enabled);
        localStorage.setItem("grayscaleMode", enabled ? "activado" : "desactivado");
        const buttonGrayscale = document.getElementById("button-grayscale");
        if (buttonGrayscale) {
            buttonGrayscale.textContent = enabled ? "Modo Normal" : "Escala de grises";
        }
    }
    function syncUIButtons() {
        const currentTheme = getActiveThemeFromDOM();
        const buttonTheme = document.getElementById("button-theme");
        if (buttonTheme) {
            buttonTheme.textContent = currentTheme === "light" ? "Modo Oscuro" : "Modo Claro";
        }
        const buttonRest = document.getElementById("button-rest");
        if (buttonRest) {
            const isRestActive = document.documentElement.classList.contains("rest-mode");
            buttonRest.textContent = isRestActive ? "Modo Normal" : "Modo Descanso";
        }
    }
    function getCurrentTheme() {
        const seasonalTheme = getSeasonalTheme();
        const lastSeason = localStorage.getItem("lastActiveSeason");
        if (seasonalTheme && THEMES[seasonalTheme]) {
            // Si es una NUEVA estación que acaba de empezar (cambió la fecha/temporada respecto a la última registrada)
            if (seasonalTheme !== lastSeason) {
                localStorage.setItem("lastActiveSeason", seasonalTheme);
                localStorage.removeItem("activeTheme");
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
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    }
    function getSeasonalTheme() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        if ((month === 1 && day >= 7) || (month === 2 && day <= 20)) {
            return "summer";
        }
        if (month === 10 && day >= 1 && day <= 26) {
            return "pink";
        }
        if ((month === 10 && day >= 27) || (month === 11 && day <= 2)) {
            return "mistery";
        }
        if ((month === 12 && day >= 8) || (month === 1 && day <= 6)) {
            return "holidays";
        }
        return null;
    }
    // 1. CARGA INICIAL
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme);
    if (localStorage.getItem("restMode") === "activado") {
        setRestMode(true);
    }
    if (localStorage.getItem("grayscaleMode") === "activado") {
        setGrayscaleMode(true);
    }
    // 2. DELEGACIÓN DE EVENTOS DE CLIC (BOTONES)
    document.addEventListener("click", (e) => {
        if (e.target.closest("#button-theme")) {
            const currentTheme = getActiveThemeFromDOM();
            const nextTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(nextTheme);
        } else if (e.target.closest("#button-rest")) {
            const isRestActive = document.documentElement.classList.contains("rest-mode");
            setRestMode(!isRestActive);
        } else if (e.target.closest("#button-grayscale")) {
            const isGrayscaleActive = document.documentElement.classList.contains("grayscale-mode");
            setGrayscaleMode(!isGrayscaleActive);
        } else if (e.target.closest("[data-set-theme]")) {
            const themeBtn = e.target.closest("[data-set-theme]");
            const targetTheme = themeBtn.dataset.setTheme;
            const currentTheme = getActiveThemeFromDOM();
            if (currentTheme === targetTheme) {
                applyTheme("light");
            } else if (THEMES[targetTheme]) {
                applyTheme(targetTheme);
            }
        }
    });
    // 3. MUTATION OBSERVER (Para botones cargados por fetch en el Aside)
    const observer = new MutationObserver(() => {
        const buttonTheme = document.getElementById("button-theme");
        if (buttonTheme) {
            syncUIButtons();
            observer.disconnect(); // Detiene el observador inmediatamente
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // 4. ESCUCHAR CAMBIOS EN EL SISTEMA OPERATIVO
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (localStorage.getItem("activeTheme") === null) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });
}
