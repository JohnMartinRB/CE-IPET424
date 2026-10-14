/* ==========================================
    WIDGETS DECORATIVOS
========================================== */

let factsList = [];
let lastIndex = -1;
/* Carga el archivo JSON con los datos curiosos */
export async function initFactsWidget() {
    const factText = document.getElementById("fact-text");
    const rerollBtn = document.getElementById("button-reroll-fact");
    if (!factText || !rerollBtn) return;
    try {
        const response = await fetch("assets/data/facts.json");
        if (!response.ok) throw new Error("No se pudo cargar facts.json");
        factsList = await response.json();
        if (factsList.length > 0) {
            displayRandomFact();
            // Evento para el botón de Reroll
            rerollBtn.addEventListener("click", () => {
                displayRandomFact();
            });
        } else {
            factText.textContent = "No hay datos curiosos disponibles por el momento.";
        }
    } catch (error) {
        console.error("Error al inicializar el widget de datos:", error);
        factText.textContent = "No se pudieron cargar los datos curiosos.";
    }
}

export async function initHolidaysWidget() {
    const container = document.getElementById("next-holiday-container");
    if (!container) return;
    try {
        // Ajustá la ruta según la profundidad de tu página (ej: "../assets/data/ holidays.json" si estás en subpáginas)
        const answer = await fetch("assets/data/holidays.json");
        const holidays = await answer.json();
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Limpiar horas para comparar solo fechas exactas
        // Mapear y filtrar  holidays futuros o el de hoy mismo
        const futureHolidays = holidays
            .map((f) => {
                const [year, month, day] = f.fecha.split("-");
                const holidayDate = new Date(year, month - 1, day);
                return { ...f, fechaObj: holidayDate };
            })
            .filter((f) => f.fechaObj >= today);
        // Ordenar por fecha más cercana
        futureHolidays.sort((a, b) => a.fechaObj - b.fechaObj);
        if (futureHolidays.length === 0) {
            container.innerHTML = `<p class="no-holidays">No hay más  holidays cargados.</p>`;
            return;
        }
        const next = futureHolidays[0];
        // Cálculo de días restantes
        const diferenciaTiempo = next.fechaObj - today;
        const remainingDays = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
        let textoFaltan = "";
        if (remainingDays === 0) {
            textoFaltan = "¡Es hoy!";
        } else if (remainingDays === 1) {
            textoFaltan = "Falta 1 día";
        } else {
            textoFaltan = `Faltan ${remainingDays} días`;
        }
        // Formato de fecha bonita (ej: Lunes, 25 de Mayo)
        const opcionesFecha = { weekday: "long", day: "numeric", month: "long" };
        const fechaFormateada = next.fechaObj.toLocaleDateString("es-AR", opcionesFecha);
        // Inyectar el resultado en el widget
        container.innerHTML = `
            <div class="holiday-info">
                <span class="holiday-badge ${next.tipo}">${next.tipo.toUpperCase()}</span>
                <h4 class="holiday-title">${next.titulo}</h4>
                <p class="holiday-date">${fechaFormateada}</p>
                <span class="holiday-countdown">${textoFaltan}</span>
            </div>
        `;
    } catch (error) {
        console.error("Error al cargar los  holidays:", error);
        container.innerHTML = `<p class="error">No se pudo cargar el próximo  holiday.</p>`;
    }
}

/* Selecciona y muestra un dato aleatorio garantizando que no sea el mismo que el anterior */
function displayRandomFact() {
    const factText = document.getElementById("fact-text");
    if (!factText || factsList.length === 0) return;
    let newIndex;
    // Si hay más de 1 dato, evitamos repetir el dato actual de forma consecutiva
    if (factsList.length > 1) {
        do {
            newIndex = Math.floor(Math.random() * factsList.length);
        } while (newIndex === lastIndex);
    } else {
        newIndex = 0;
    }
    lastIndex = newIndex;
    // Pequeña animación de transición al cambiar el texto
    factText.classList.add("fade-out");
    setTimeout(() => {
        factText.textContent = factsList[newIndex];
        factText.classList.remove("fade-out");
    }, 150);
}
