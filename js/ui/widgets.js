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
    const container = document.getElementById("holiday-container");
    if (!container) {
        console.warn("⚠️ Widget Feriados: No se encontró el contenedor #next-holiday-container en el DOM.");
        return;
    }
    try {
        console.log("✅ Widget Feriados: Contenedor encontrado. Cargando JSON...");
        // Cargar el JSON de feriados
        const response = await fetch("assets/data/holidays.json");
        if (!response.ok) throw new Error("No se pudo cargar holidays.json");
        let holidaysData = await response.json();
        // Corregir si el JSON viene dentro de una matriz anidada [[...]]
        const holidays = Array.isArray(holidaysData[0]) ? holidaysData[0] : holidaysData;
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Limpiar horas para comparación limpia
        // Mapear y procesar fechas
        let futureHolidays = holidays
            .map((holiday) => {
                const [year, month, day] = holiday.fecha.split("-");
                // Crear objeto fecha nativo
                const holidayDate = new Date(Number(year), Number(month) - 1, Number(day));
                return { ...holiday, holidayObj: holidayDate };
            })
            .filter((holiday) => holiday.holidayObj >= today);
        // Ordenar de menor a mayor por la fecha más cercana
        futureHolidays.sort((a, b) => a.holidayObj - b.holidayObj);
        // Si no se encuentran feriados para el año en curso, notificar en el widget
        if (futureHolidays.length === 0) {
            container.innerHTML = `<p class="no-holidays">No hay más feriados programados para este año.</p>`;
            return;
        }
        const nextHoliday = futureHolidays[0];
        // Cálculo de días faltantes
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
        // Formato legible de fecha en español (ej: Viernes, 1 de Enero)
        const dateOptions = { weekday: "long", day: "numeric", month: "long" };
        let formattedDate = nextHoliday.holidayObj.toLocaleDateString("es-AR", dateOptions);
        // Capitalizar la primera letra del día
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        // Renderizar el contenido final
        container.innerHTML = `
            <div class="holiday-info">
                <span class="holiday-badge ${nextHoliday.tipo}">${nextHoliday.tipo.toUpperCase()}</span>
                <h4 class="holiday-title">${nextHoliday.nombre}</h4>
                <p class="holiday-date">${formattedDate}</p>
                <span class="holiday-countdown">${remainingText}</span>
            </div>
        `;
    } catch (error) {
        console.error("Error al cargar el widget de feriados:", error);
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
