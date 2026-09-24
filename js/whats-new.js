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
    // Busca coincidencias flexibles como "v0.27", "[v0.27]", "0.27", etc.
    const cleanVersion = CURRENT_VERSION.replace(/^v/i, ""); // Ej: "0.27"
    const regex = new RegExp(`(?:\\[?v?${cleanVersion}\\]?)(.*?)(?=(?:\\n\\[?v?\\d+\\.\\d+|\\n#+ |$))`, "si");
    const match = fullText.match(regex);
    if (!match || !match[1].trim()) {
        return `<p>¡Bienvenido a la versión ${CURRENT_VERSION}! Revisa el sitio para descubrir las últimas mejoras.</p>`;
    }
    const versionContent = match[1].trim();
    // Convertimos viñetas (-) o (*) en elementos de lista <li>
    const lines = versionContent.split("\n");
    let htmlResult = "<ul>";
    lines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
            htmlResult += `<li>${trimmed.substring(1).trim()}</li>`;
        } else if (trimmed.length > 0) {
            htmlResult += `<p><strong>${trimmed}</strong></p>`;
        }
    });
    htmlResult += "</ul>";
    return htmlResult;
}
