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
    DAILY QUOTE WIDGET MODULE
========================================== */
export async function initDailyQuoteWidget() {
    const quoteTextContainer = document.getElementById("quote-text");
    const quoteAuthorContainer = document.getElementById("quote-author");
    if (!quoteTextContainer) return;
    try {
        const response = await fetch("assets/data/quotes.json");
        if (!response.ok) throw new Error("Failed to load quotes.json");
        const quotesList = await response.json();
        if (!quotesList || quotesList.length === 0) {
            quoteTextContainer.textContent = "No quotes available at the moment.";
            return;
        }
        // Calculate the current day of the year (0 - 365)
        const currentDate = new Date();
        const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
        const timeDifference = currentDate - startOfYear;
        const oneDayInMs = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(timeDifference / oneDayInMs);
        // Select a quote deterministically based on today's date
        const selectedIndex = dayOfYear % quotesList.length;
        const dailyQuote = quotesList[selectedIndex];
        // Render to DOM
        quoteTextContainer.textContent = `"${dailyQuote.quote}"`;
        if (quoteAuthorContainer) {
            quoteAuthorContainer.textContent = dailyQuote.author ? `— ${dailyQuote.author}` : "";
        }
    } catch (error) {
        console.error("Error loading the daily quote:", error);
        quoteTextContainer.textContent = "Today's effort is tomorrow's success.";
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
