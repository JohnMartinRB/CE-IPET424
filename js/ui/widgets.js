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

/* ==========================================
    MÓDULO DE WIDGET DE FERIADOS
========================================== */
export async function initHolidaysWidget() {
    const container = document.getElementById("next-holiday-container");
    if (!container) return;
    try {
        // Usamos ruta absoluta desde la raíz para evitar problemas de carpetas (ajustá si tu proyecto usa otra estructura)
        const response = await fetch("assets/data/holidays.json");
        if (!response.ok) throw new Error("No se pudo cargar holidays.json");
        let holidaysData = await response.json();
        // Manejo por si el JSON viene envuelto en un array doble (ej: [[{...}]])
        const holidays = Array.isArray(holidaysData[0]) ? holidaysData[0] : holidaysData;
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Limpiar horas para comparar fechas exactas
        // Mapear y filtrar feriados futuros o el de hoy mismo
        const futureHolidays = holidays
            .map((holiday) => {
                const [year, month, day] = holiday.fecha.split("-");
                const holidayDate = new Date(year, month - 1, day);
                return { ...holiday, holidayObj: holidayDate };
            })
            .filter((holiday) => holiday.holidayObj >= today);
        // Ordenar por fecha más cercana
        futureHolidays.sort((a, b) => a.holidayObj - b.holidayObj);
        if (futureHolidays.length === 0) {
            container.innerHTML = `<p class="no-holidays">No hay más feriados cargados.</p>`;
            return;
        }
        const nextHoliday = futureHolidays[0];
        // Cálculo de días restantes
        const timeDifference = nextHoliday.holidayObj - today;
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        let remainingText = "";
        if (remainingDays === 0) {
            remainingText = "¡Es hoy!";
        } else if (remainingDays === 1) {
            remainingText = "Falta 1 día";
        } else {
            remainingText = `Faltan ${remainingDays} días`;
        }
        // Formato de fecha (ej: Viernes, 1 de Enero)
        const dateOptions = { weekday: "long", day: "numeric", month: "long" };
        const formattedDate = nextHoliday.holidayObj.toLocaleDateString("es-AR", dateOptions);
        // Inyectar el resultado asegurando clases correctas
        container.innerHTML = `
            <div class="holiday-info">
                <span class="holiday-badge ${nextHoliday.tipo}">${nextHoliday.tipo.toUpperCase()}</span>
                <h4 class="holiday-title">${nextHoliday.nombre}</h4>
                <p class="holiday-date">${formattedDate}</p>
                <span class="holiday-countdown">${remainingText}</span>
            </div>
        `;
    } catch (error) {
        console.error("Error loading holidays:", error);
        container.innerHTML = `<p class="error">No se pudo cargar el próximo feriado.</p>`;
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
