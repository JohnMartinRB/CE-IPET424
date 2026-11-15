/* ==========================================
    CARGA DINÁMICA DE COMISIÓN DIRECTIVA (DINÁMICA)
========================================== */
export async function initMembers() {
    const memberCards = document.querySelectorAll("[data-member]");
    // Si no estamos en la página de nosotros, no hace nada
    if (memberCards.length === 0) return;
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("No se pudo cargar members.json");
        const membersData = await response.json();
        // Agrupamos las tarjetas por su contenedor principal (grilla) para ajustar las columnas dinámicamente
        const gridsToAdjust = new Set();
        memberCards.forEach((card) => {
            const roleKey = card.dataset.member;
            const info = membersData[roleKey];
            const nameEl = card.querySelector(".member-name");
            const yearEl = card.querySelector(".member-year");
            // Validamos si el miembro existe y tiene un nombre válido (no vacío)
            if (info && info.nombre && info.nombre.trim() !== "") {
                if (nameEl) nameEl.textContent = info.nombre;
                if (yearEl) yearEl.textContent = info.curso || "";
                card.style.display = ""; // Aseguramos que sea visible
            } else {
                // Si no hay datos o el nombre está vacío, ocultamos la tarjeta por completo
                card.style.display = "none";
            }
            // Identificamos a qué grilla pertenece esta tarjeta
            const parentGrid = card.closest(".members-grid-5, .members-grid-4");
            if (parentGrid) {
                gridsToAdjust.add(parentGrid);
            }
        });
        // Ajustamos las clases de las grillas según cuántas tarjetas quedaron visibles
        gridsToAdjust.forEach((grid) => {
            const visibleCards = grid.querySelectorAll(".member-card:not([style*='display: none'])");
            const count = visibleCards.length;
            // Limpiamos clases anteriores de tamaño
            grid.classList.remove(
                "members-grid-5",
                "members-grid-4",
                "members-grid-3",
                "members-grid-2",
                "members-grid-1",
            );
            // Asignamos la clase exacta según la cantidad de elementos visibles
            if (count >= 5) {
                grid.classList.add("members-grid-5");
            } else if (count === 4) {
                grid.classList.add("members-grid-4");
            } else if (count === 3) {
                grid.classList.add("members-grid-3");
            } else if (count === 2) {
                grid.classList.add("members-grid-2");
            } else {
                grid.classList.add("members-grid-1");
            }
        });
    } catch (error) {
        console.error("Error cargando los integrantes de la comisión:", error);
    }
}
