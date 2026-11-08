/* ==========================================
    VENTANAS MODALES EN SECUENCIA
========================================== */
import { getVersion } from "./version.js";
import { extractLatestVersionChanges } from "../utils/changelog.js";

export async function initModals() {
    let CURRENT_VERSION;
    try {
        ({ label: CURRENT_VERSION } = await getVersion());
    } catch (error) {
        console.warn("No se pudo leer la versión. No se muestran los modales.", error);
        return;
    }
    const hasSeenInDev = localStorage.getItem("inDevWarningSeen");
    const savedVersion = localStorage.getItem("siteVersion");
    const termsAccepted = localStorage.getItem("ceipet424_terms_accepted");
    // 1. COMPROBACIÓN INICIAL AL CARGAR
    if (!termsAccepted) {
        showTermsModal();
    } else if (!hasSeenInDev) {
        showInDevModal();
    } else if (savedVersion !== CURRENT_VERSION) {
        checkAndShowWhatsNew();
    }

    // MODAL: TÉRMINOS Y CONDICIONES
    function showTermsModal() {
        const modal = document.getElementById("modal-terms");
        const acceptButton = document.getElementById("button-accept-terms");
        if (!modal || !acceptButton) return;
        modal.classList.remove("hidden");
        acceptButton.addEventListener(
            "click",
            () => {
                localStorage.setItem("ceipet424_terms_accepted", "true");
                modal.classList.add("hidden");
                if (!hasSeenInDev) {
                    showInDevModal();
                } else if (savedVersion !== CURRENT_VERSION) {
                    checkAndShowWhatsNew();
                }
            },
            { once: true },
        );
    }

    // MODAL: EN DESARROLLO (ALPHA)
    function showInDevModal() {
        const modal = document.getElementById("modal-in-dev");
        const closeButton = document.getElementById("button-close-in-dev");
        if (!modal) return;
        modal.classList.remove("hidden");
        if (!closeButton) return;
        closeButton.addEventListener(
            "click",
            () => {
                modal.classList.add("hidden");
                localStorage.setItem("inDevWarningSeen", "true");
                if (savedVersion !== CURRENT_VERSION) {
                    checkAndShowWhatsNew();
                }
            },
            { once: true },
        );
    }

    // MODAL: NOVEDADES (WHATS NEW)
    async function checkAndShowWhatsNew() {
        const modal = document.getElementById("modal-whats-new");
        const contentBox = document.getElementById("whats-new-body");
        const closeButton = document.getElementById("button-close-whats-new");
        if (!modal || !contentBox) return;
        try {
            const response = await fetch("CHANGELOG.md");
            if (!response.ok) throw new Error("No se pudo cargar el changelog");
            const text = await response.text();
            contentBox.innerHTML = extractLatestVersionChanges(text, CURRENT_VERSION);
        } catch (error) {
            console.warn("Error al cargar novedades:", error);
            contentBox.innerHTML = `<p>¡Bienvenido a la versión ${CURRENT_VERSION}!</p>`;
        }
        modal.classList.remove("hidden");
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
}
