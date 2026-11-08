/* ==========================================
    EASTER EGG: TOAST SECRETO
========================================== */

export function initMenu() {
    let emptyClicks = 0;
    let rightClicks = 0;
    let clickResetTimer = null;
    // Escucha clics izquierdos en áreas vacías
    document.addEventListener("click", (e) => {
        // Solo contamos si hizo clic directo sobre el fondo (body, main, wrappers sin botones ni enlaces)
        const isClickable = e.target.closest("a, button, input, textarea, select, [role='button']");
        if (!isClickable) {
            emptyClicks++;
            checkTriggers();
        }
    });
    // Escucha clics derechos rápidos
    document.addEventListener("contextmenu", (e) => {
        rightClicks++;
        // Si hace ráfaga de clics derechos, evitamos el menú contextual molesto en la ráfaga
        if (rightClicks > 1) {
            e.preventDefault();
        }
        checkTriggers(true);
    });
    function checkTriggers(isRightClick = false) {
        clearTimeout(clickResetTimer);
        clickResetTimer = setTimeout(() => {
            emptyClicks = 0;
            rightClicks = 0;
        }, 1500);
        if (emptyClicks >= 7 || rightClicks >= 4) {
            emptyClicks = 0;
            rightClicks = 0;
            clearTimeout(clickResetTimer);
            showCheekyToast();
        }
    }
    function showCheekyToast() {
        if (document.getElementById("cheeky-toast")) return;
        const toast = document.createElement("div");
        toast.id = "cheeky-toast";
        toast.innerHTML = `
        <div style="font-size: 1.4rem; margin-bottom: 0.5rem;"> <strong>¿Buscando algo oculto?</strong>🕵️</div>
        <p style="margin: 0; font-size: 1rem;">
            Acá no hay botones invisibles... probá escribiendo 'matrix' o 'flip' en el teclado, o abrí la consola (F12) y escribí 'ce.ayuda()' 😉
        </p>
    `;
        Object.assign(toast.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#0088ff",
            color: "#d4f2fd",
            padding: "1rem 1.5rem",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
            zIndex: "99998",
            maxWidth: "360px",
            animation: "toastSlideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
            fontFamily: "Nunito",
        });
        // Inyectamos keyframes dinámicos para la entrada si no existen
        if (!document.getElementById("toast-style")) {
            const style = document.createElement("style");
            style.id = "toast-style";
            style.textContent = `
            @keyframes toastSlideIn {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
            document.head.appendChild(style);
        }
        document.body.appendChild(toast);
        // Se oculta automáticamente a los 8 segundos
        setTimeout(() => {
            toast.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            toast.style.opacity = "0";
            toast.style.transform = "translateY(20px)";
            setTimeout(() => toast.remove(), 500);
        }, 12000);
    }
}
