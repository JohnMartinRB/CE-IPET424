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
