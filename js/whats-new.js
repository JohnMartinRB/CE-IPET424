const CURRENT_VERSION = "v0.27"; // La versión activa del sitio

export function initWhatsNew() {
    const savedVersion = localStorage.getItem("siteVersion");
    // Si la versión guardada es distinta a la versión actual, mostramos las novedades
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
        // Leemos el changelog.txt directamente desde la raíz
        const response = await fetch("changelog.txt");
        if (!response.ok) throw new Error("No se pudo cargar el changelog");
        const text = await response.text();
        // Extraemos solo el bloque correspondiente a la última versión
        const latestChanges = extractLatestVersionChanges(text);
        contentBox.innerHTML = latestChanges;
        // Mostrar modal quitando la clase hidden
        modal.classList.remove("hidden");
    } catch (error) {
        console.warn("Error al cargar novedades:", error);
    }
    // Evento para cerrar y guardar que el usuario ya vio la versión
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.classList.add("hidden");
            localStorage.setItem("siteVersion", CURRENT_VERSION);
        });
    }
}

// Función auxiliar para parsear el changelog.txt
function extractLatestVersionChanges(fullText) {
    // Busca las líneas desde la versión actual hasta la siguiente versión o el final del archivo
    const versionHeaderIndex = fullText.indexOf(CURRENT_VERSION);
    if (versionHeaderIndex === -1) {
        return `<p>¡Bienvenido a la versión ${CURRENT_VERSION}! Revisa el sitio para descubrir las últimas mejoras.</p>`;
    }
    const textFromCurrent = fullText.substring(versionHeaderIndex);
    // Asumiendo que las versiones viejas están separadas por un encabezado de tipo "v0.XX"
    const nextVersionIndex = textFromCurrent.search(/\nv0\./);
    let currentVersionText = nextVersionIndex !== -1 ? textFromCurrent.substring(0, nextVersionIndex) : textFromCurrent;
    // Convertimos saltos de línea y viñetas (-) en listas HTML sencillas
    const formattedHtml = currentVersionText
        .split("\n")
        .map((line) => {
            if (line.startsWith("-")) {
                return `<li>${line.replace("-", "").trim()}</li>`;
            }
            return `<strong>${line}</strong><br>`;
        })
        .join("");
    return `<ul>${formattedHtml}</ul>`;
}
