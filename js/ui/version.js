/* ==========================================
    NÚMERO DE VERSIÓN DESDE JSON
========================================== */
let cachedVersion = null;

export async function getVersion() {
    if (cachedVersion) return cachedVersion;
    const response = await fetch("data/version.json");
    if (!response.ok) throw new Error("No se pudo cargar version.json");
    cachedVersion = await response.json();
    return cachedVersion;
}

export async function initVersion() {
    const targets = document.querySelectorAll("[data-version]");
    if (!targets.length) return;
    try {
        const data = await getVersion();
        targets.forEach((el) => {
            const value = data[el.dataset.version];
            if (value) el.textContent = value;
        });
    } catch {
        // Si falla la carga, queda el texto de respaldo del HTML
    }
}
