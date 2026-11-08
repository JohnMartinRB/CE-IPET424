/* ==========================================
    PARSEADOR DEL CHANGELOG PARA EL MODAL DE NOVEDADES
    Convierte la sección de una versión del CHANGELOG.md en HTML seguro.
========================================== */

// "v0.41.0-alpha" o "0.41" -> "0.41"
function getBaseVersion(version) {
    const match = version.match(/(\d+)\.(\d+)/);
    return match ? `${match[1]}.${match[2]}` : version;
}

// Devuelve "0.41" si la línea es un encabezado de versión (## v0.41.0-alpha ...), o null
function getHeadingVersion(line) {
    const match = line.match(/^#{2,3}\s*\[?v?(\d+\.\d+)/i);
    return match ? match[1] : null;
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Escapa primero y después aplica formato, así el texto del changelog nunca se interpreta como HTML
function formatInline(text) {
    return escapeHtml(text)
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export function extractLatestVersionChanges(markdown, currentVersion) {
    const base = getBaseVersion(currentVersion);
    const lines = markdown.replace(/\r\n?/g, "\n").split("\n");

    const start = lines.findIndex((line) => getHeadingVersion(line.trim()) === base);
    if (start === -1) return `<p>¡Bienvenido a la versión ${escapeHtml(currentVersion)}!</p>`;

    const html = [];
    let listTag = null;

    const closeList = () => {
        if (listTag) {
            html.push(`</${listTag}>`);
            listTag = null;
        }
    };

    const openList = (tag) => {
        if (listTag !== tag) {
            closeList();
            html.push(`<${tag} class="whats-new-list">`);
            listTag = tag;
        }
    };

    for (let i = start; i < lines.length; i++) {
        const line = lines[i].trim();

        if (!line || line === "---") continue;

        // Otra versión principal: termina la sección actual
        const headingVersion = getHeadingVersion(line);
        if (i > start && headingVersion && headingVersion !== base) break;

        if (line.startsWith("#")) {
            closeList();
            html.push(`<h3 class="whats-new-title">${formatInline(line.replace(/^#+\s*/, ""))}</h3>`);
        } else if (/^[-*]\s+/.test(line)) {
            openList("ul");
            html.push(`<li>${formatInline(line.replace(/^[-*]\s+/, ""))}</li>`);
        } else if (/^\d+\.\s+/.test(line)) {
            openList("ol");
            html.push(`<li>${formatInline(line.replace(/^\d+\.\s+/, ""))}</li>`);
        } else {
            closeList();
            html.push(`<p class="whats-new-text">${formatInline(line)}</p>`);
        }
    }

    closeList();
    return html.join("");
}
