/* ==========================================
    TOASTS
========================================== */

/* ==========================================
    TOAST AUTOMÁTICO DE NUEVA VERSIÓN
========================================== */
import { getVersion } from "./version.js";

export async function initUpdateToast() {
    const toast = document.getElementById("toast-update");
    const reloadButton = document.getElementById("button-reload-page");
    const closeButton = document.getElementById("button-close-update");
    if (!toast) return;
    let CURRENT_VERSION;
    try {
        // Obtenemos la versión dinámica igual que en los modales
        const versionData = await getVersion();
        CURRENT_VERSION = versionData.label;
    } catch (error) {
        console.warn("No se pudo obtener la versión para el toast.", error);
        return;
    }
    // Comparamos con la versión que el usuario tiene guardada
    const savedVersion = localStorage.getItem("clientActiveVersion");
    if (!savedVersion) {
        // Primera vez: guardamos la versión actual silenciosamente
        localStorage.setItem("clientActiveVersion", CURRENT_VERSION);
        return;
    }
    // Si la versión actual del sistema difiere de la guardada, mostramos el toast
    if (CURRENT_VERSION !== savedVersion) {
        toast.classList.add("visible");
    }
    // Botón de Reiniciar
    if (reloadButton) {
        reloadButton.addEventListener(
            "click",
            () => {
                localStorage.setItem("clientActiveVersion", CURRENT_VERSION);
                window.location.reload(true);
            },
            { once: true },
        );
    }
    // Botón de Cerrar (Cruz)
    if (closeButton) {
        closeButton.addEventListener(
            "click",
            () => {
                toast.classList.remove("visible");
                localStorage.setItem("clientActiveVersion", CURRENT_VERSION);
            },
            { once: true },
        );
    }
}
