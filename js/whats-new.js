const CURRENT_VERSION = "v0.27"; // La versión activa del sitio

export function initWhatsNew() {
    const savedVersion = localStorage.getItem("siteVersion");
    if (savedVersion !== CURRENT_VERSION) {
        checkAndShowModal();
    }
}

async function checkAndShowModal() {
    const modal = document.getElementById("whats-new-modal");
    const contentBox = document.getElementById("whats-new-content");
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
        closeButton.addEventListener("click", () => {
            modal.classList.add("hidden");
            localStorage.setItem("siteVersion", CURRENT_VERSION);
        });
    }
}

// Función auxiliar para parsear el changelog.txt
function extractLatestVersionChanges(fullText) {
    // 1. Extraemos la versión base sin la 'v' ni parches (ej: de "v0.27" o "v0.27.4" obtenemos "0.27")
    const baseVersion = CURRENT_VERSION.replace(/^v/i, "").split(".").slice(0, 2).join(".");
    // 2. Buscamos dónde empieza el bloque de esta versión (ej: "v0.27" o "0.27")
    const versionRegex = new RegExp(`\\[?v?${baseVersion}(?:\\.\\d+)*\\]?`, "i");
    const match = fullText.match(versionRegex);
    if (!match) {
        return `<p>¡Bienvenido a la versión ${CURRENT_VERSION}! Revisa el sitio para descubrir las últimas mejoras.</p>`;
    }
    // Cortamos el texto desde el primer inicio de esta versión
    const textFromCurrent = fullText.substring(match.index);
    const lines = textFromCurrent.split("\n");
    let currentVersionLines = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Si encontramos el inicio de OTRA versión mayor/menor diferente (ej: v0.26), frenamos la lectura
        if (i > 0 && line.match(/^\[?v?\d+\.\d+/i)) {
            const foundVersion = line.match(/\d+\.\d+/)[0];
            if (!foundVersion.startsWith(baseVersion)) {
                break;
            }
        }
        currentVersionLines.push(line);
    }
    // 3. Convertimos todas las líneas en HTML respetando subtítulos y viñetas
    let htmlResult = "<ul>";
    currentVersionLines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
            // Viñetas / Items de cambios
            htmlResult += `<li>${trimmed.substring(1).trim()}</li>`;
        } else if (trimmed.length > 0) {
            // Títulos de versión o subtítulos (ej: "v0.27.1 - Correcciones")
            htmlResult += `<p style="margin-top: 0.8rem; font-weight: bold; color: var(--azul1, #1e40af);">${trimmed}</p>`;
        }
    });
    htmlResult += "</ul>";
    return htmlResult;
}
