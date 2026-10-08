/* ==========================================
    VENTANAS MODALES EN SECUENCIA
========================================== */
export function initModals() {
    const CURRENT_VERSION = "v0.31.0"; // Actualizar manualmente al subir nueva versión
    // 1. COMPROBACIÓN INICIAL AL CARGAR
    const hasSeenInDev = localStorage.getItem("inDevWarningSeen");
    const savedVersion = localStorage.getItem("siteVersion");
    if (!hasSeenInDev) {
        // Primera vez en el sitio: mostrar In Dev
        showInDevModal();
    } else if (savedVersion !== CURRENT_VERSION) {
        // Ya vio In Dev en el pasado, pero hay una nueva versión: mostrar Whats New directamente
        checkAndShowWhatsNew();
    }

    // 2. MODAL: EN DESARROLLO (ALPHA)
    function showInDevModal() {
        const modal = document.getElementById("modal-in-dev");
        const closeButton = document.getElementById("button-close-in-dev");
        if (!modal) return;
        // Mostramos el modal sacando la clase hidden
        modal.classList.remove("hidden");
        if (closeButton) {
            closeButton.addEventListener(
                "click",
                () => {
                    modal.classList.add("hidden");
                    // Guardar que ya vio el cartel de desarrollo
                    localStorage.setItem("inDevWarningSeen", "true");
                    // Si no ha visto la versión actual de Whats New, mostramos la secuencia inmediatamente
                    if (savedVersion !== CURRENT_VERSION) {
                        checkAndShowWhatsNew();
                    }
                },
                { once: true },
            ); // { once: true } evita múltiples listeners si la función reejecuta
        }
    }

    // 3. MODAL: NOVEDADES (WHATS NEW)
    async function checkAndShowWhatsNew() {
        const modal = document.getElementById("modal-whats-new");
        const contentBox = document.getElementById("whats-new-body");
        const closeButton = document.getElementById("button-close-whats-new");
        const versionTag = document.getElementById("whats-new-version");
        if (!modal || !contentBox) return;
        if (versionTag) versionTag.textContent = CURRENT_VERSION;
        try {
            const response = await fetch("CHANGELOG.md");
            if (!response.ok) throw new Error("No se pudo cargar el changelog");
            const text = await response.text();
            const latestChanges = extractLatestVersionChanges(text);
            contentBox.innerHTML = latestChanges;
            modal.classList.remove("hidden");
        } catch (error) {
            console.warn("Error al cargar novedades:", error);
        }
        if (closeButton) {
            closeButton.addEventListener(
                "click",
                () => {
                    modal.classList.add("hidden");
                    localStorage.setItem("siteVersion", CURRENT_VERSION);
                },
                { once: true },
            );
        }
    }

    // 4. AUXILIAR: PARSEADOR DE CHANGELOG (MODO MARKDOWN)
    function extractLatestVersionChanges(fullText) {
        const baseVersion = CURRENT_VERSION.replace(/^v/i, "").split(".").slice(0, 2).join(".");
        // Buscamos la primera aparición de la versión base (ej: 0.30)
        const versionRegex = new RegExp(`(?:##|###)?\\s*\\[?v?${baseVersion}(?:\\.\\d+)*[^\\]\\n]*\\]?`, "i");
        const match = fullText.match(versionRegex);
        if (!match) return `<p>¡Bienvenido a la versión ${CURRENT_VERSION}!</p>`;

        // Cortamos el texto desde el inicio de la versión actual
        const textFromCurrent = fullText.substring(match.index);
        const lines = textFromCurrent.split("\n");
        let htmlResult = "";
        let inList = false;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            // 1. Omitir líneas vacías y separadores
            if (!line || line === "---") continue;

            // 2. DETECTAR FRENADO: Si encontramos otra versión principal anterior (ej: v0.29 o v0.28)
            if (i > 0 && line.match(/^##\s*\[?v?\d+\.\d+/i)) {
                const foundVersionMatch = line.match(/\d+\.\d+/);
                if (foundVersionMatch) {
                    const foundBase = foundVersionMatch[0];
                    // Si la versión hallada no pertenece al mismo bloque (ej: es 0.29 y estamos en 0.30), frenamos
                    if (!foundBase.startsWith(baseVersion)) {
                        break;
                    }
                }
            }

            // 3. DETECTAR ENCABEZADOS (Títulos principales ## y subversiones ###)
            if (line.startsWith("#")) {
                if (inList) {
                    htmlResult += "</ul>";
                    inList = false;
                }
                // Limpiamos los símbolos de Markdown: #, ##, ###, corchetes [], etc.
                let cleanTitle = line
                    .replace(/^#+\s*/, "") // Quita los #
                    .replace(/^\[\vert{}\]/g, "") // Quita corchetes de inicio y fin si los hay
                    .replace(/\[(.*?)\]/g, "$1"); // Convierte [v0.30.0] en v0.30.0
                htmlResult += `<h3 style="margin: 1.2rem 0 0.5rem; color: var(--azul1, #0284c7); font-size: 1.1rem; font-weight: bold;">${cleanTitle}</h3>`;
            }

            // 4. DETECTAR ÍTEMS DE LISTA (- o *)
            else if (line.startsWith("-") || line.startsWith("*")) {
                if (!inList) {
                    htmlResult += '<ul style="padding-left: 1.2rem; margin: 0 0 1rem 0;">';
                    inList = true;
                }
                // Limpiamos el guión/asterisco inicial y limpiamos corchetes/formato interno
                let cleanItem = line.replace(/^[-*]\s*/, "").replace(/\[(.*?)\]/g, "$1");
                htmlResult += `<li style="margin-bottom: 0.4rem; line-height: 1.4; font-weight: normal;">${cleanItem}</li>`;
            }

            // 5. TEXTO SUELTO / SUBTÍTULOS O NÚMEROS (ej: "1. ARCHITECTURE.md...")
            else {
                if (inList) {
                    htmlResult += "</ul>";
                    inList = false;
                }
                htmlResult += `<p style="margin: 0.4rem 0; line-height: 1.4;">${line}</p>`;
            }
        }

        if (inList) htmlResult += "</ul>";
        return htmlResult;
    }
}
