/* ==========================================
    VENTANAS MODALES EN SECUENCIA
========================================== */
export function initModals() {
    const CURRENT_VERSION = "v0.29";
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
            const response = await fetch("changelog.txt");
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

    // 4. AUXILIAR: PARSEADOR DE CHANGELOG
    function extractLatestVersionChanges(fullText) {
        const baseVersion = CURRENT_VERSION.replace(/^v/i, "").split(".").slice(0, 2).join(".");
        const versionRegex = new RegExp(`\\[?v?${baseVersion}(?:\\.\\d+)*\\]?`, "i");
        const match = fullText.match(versionRegex);
        if (!match) return `<p>¡Bienvenido a la versión ${CURRENT_VERSION}!</p>`;
        const lines = fullText.substring(match.index).split("\n");
        let htmlResult = "";
        let inList = false;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            // Frenar al llegar a una versión diferente
            if (i > 0 && line.match(/^\[?v?\d+\.\d+/i)) {
                const foundVersion = line.match(/\d+\.\d+/)[0];
                if (!foundVersion.startsWith(baseVersion)) break;
            }
            if (!line) continue;
            // Detectar si es un título de versión (ej: 0.28 o 0.28.1)
            if (line.match(/^\[?v?\d+\.\d+/i)) {
                if (inList) {
                    htmlResult += "</ul>";
                    inList = false;
                }
                htmlResult += `<h3 style="margin: 1rem 0 0.4rem;">${line}</h3>`;
            } else {
                // Es un ítem de la lista
                if (!inList) {
                    htmlResult += '<ul style="padding-left: 1.2rem; margin: 0;">';
                    inList = true;
                }
                const cleanText = line.replace(/^[-*]\s*/, ""); // Limpia guión si tuviera
                htmlResult += `<li style="margin-bottom: 0.4rem; line-height: 1.4; font-weight: normal;">${cleanText}</li>`;
            }
        }
        if (inList) htmlResult += "</ul>";
        return htmlResult;
    }
}
