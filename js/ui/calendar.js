/* ==========================================
    MÓDULO DE CALENDARIO DESCARGABLE
========================================== */
export function initCalendar() {
    const calendarContainer = document.getElementById("calendar-container");
    if (!calendarContainer) return;
    const selectYear = document.getElementById("select-year");
    const selectView = document.getElementById("select-view");
    const selectFont = document.getElementById("select-font");
    const buttonDownload = document.getElementById("button-download-calendar");

    // NOTA: El botón "Personalizar" (#button-toggle-customize) y el panel
    // ya se manejan automáticamente de forma global en buttons.js,
    // por lo que no hace falta duplicar su listener aquí.
    // Configuración para los 5 selectores de color personalizados con cuadrícula
    const colorPickersConfig = [
        { id: "color-title", buttonId: "button-color-title", dropdownId: "dropdown-title", cssVar: "--title-color" },
        {
            id: "color-dayheader",
            buttonId: "button-color-dayheader",
            dropdownId: "dropdown-dayheader",
            cssVar: "--dayheader-color",
        },
        { id: "color-cell", buttonId: "button-color-cell", dropdownId: "dropdown-cell", cssVar: "--cell-bg" },
        {
            id: "color-monthbg",
            buttonId: "button-color-monthbg",
            dropdownId: "dropdown-monthbg",
            cssVar: "--monthbg-color",
        },
        {
            id: "color-calendarbg",
            buttonId: "button-color-calendarbg",
            dropdownId: "dropdown-calendarbg",
            cssVar: "--calendar-bg",
        },
    ];
    colorPickersConfig.forEach((item) => {
        const input = document.getElementById(item.id);
        const button = document.getElementById(item.buttonId);
        const dropdown = document.getElementById(item.dropdownId);
        if (input && button && dropdown) {
            button.addEventListener("click", (e) => {
                e.stopPropagation();
                document.querySelectorAll(".color-dropdown").forEach((d) => {
                    if (d !== dropdown) d.classList.remove("show");
                });
                dropdown.classList.toggle("show");
            });
            dropdown.querySelectorAll(".color-swatch[data-color]").forEach((swatch) => {
                swatch.addEventListener("click", () => {
                    const selectedColor = swatch.getAttribute("data-color");
                    calendarContainer.style.setProperty(item.cssVar, selectedColor);
                    button.style.backgroundColor = selectedColor;
                    input.value = selectedColor;
                    dropdown.classList.remove("show");
                });
            });
            input.addEventListener("input", (e) => {
                const customColor = e.target.value;
                calendarContainer.style.setProperty(item.cssVar, customColor);
                button.style.backgroundColor = customColor;
                dropdown.classList.remove("show");
            });
        }
    });
    document.addEventListener("click", () => {
        document.querySelectorAll(".color-dropdown").forEach((d) => {
            d.classList.remove("show");
        });
    });
    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const dayNames = ["L", "M", "X", "J", "V", "S", "D"];

    // Función principal para renderizar el calendario completo
    function renderCalendar() {
        const selectedYear = parseInt(selectYear.value) || 2026;
        const formatoVista = selectView.value;
        // Mantener la clase base y actualizar la vista dinámicamente sin borrar clases previas
        calendarContainer.className = `calendar-container calendar-grid-${formatoVista}`;
        calendarContainer.innerHTML = "";
        // Generar los 12 meses
        for (let month = 0; month < 12; month++) {
            const monthDiv = document.createElement("div");
            monthDiv.className = "month-card";
            // Título del Mes (toma el color directamente de la clase CSS conectada a la variable)
            const monthTitle = document.createElement("h3");
            monthTitle.className = "month-title";
            monthTitle.textContent = `${monthNames[month]} ${selectedYear}`;
            monthDiv.appendChild(monthTitle);
            // Grilla de días de la semana
            const daysGrid = document.createElement("div");
            daysGrid.className = "grid-month-days";
            dayNames.forEach((day) => {
                const headerDay = document.createElement("div");
                headerDay.className = "header-day";
                headerDay.textContent = day;
                daysGrid.appendChild(headerDay);
            });
            const firstDayOfMonth = new Date(selectedYear, month, 1).getDay();
            const weekStartMonday = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
            const totalMonthDays = new Date(selectedYear, month + 1, 0).getDate();
            for (let i = 0; i < weekStartMonday; i++) {
                const emptySpace = document.createElement("div");
                emptySpace.className = "cell-day empty";
                daysGrid.appendChild(emptySpace);
            }
            for (let day = 1; day <= totalMonthDays; day++) {
                const cellDay = document.createElement("div");
                cellDay.className = "cell-day";
                const spanNum = document.createElement("span");
                spanNum.className = "number-day";
                spanNum.textContent = day;
                cellDay.appendChild(spanNum);
                daysGrid.appendChild(cellDay);
            }
            monthDiv.appendChild(daysGrid);
            calendarContainer.appendChild(monthDiv);
        }
    }
    // Eventos para actualizar en tiempo real
    selectYear.addEventListener("change", renderCalendar);
    selectView.addEventListener("change", renderCalendar);
    // Evento para cambiar la tipografía en todo el calendario
    selectFont.addEventListener("change", (e) => {
        const chosenFont = e.target.value;
        calendarContainer.style.fontFamily = chosenFont;
        // Forzamos la tipografía a todas las tarjetas y textos hijos creados dinámicamente
        const cards = calendarContainer.querySelectorAll(".month-card, .month-title, .header-day, .cell-day");
        cards.forEach((el) => {
            el.style.fontFamily = chosenFont;
        });
    });
    // ==========================================
    // CONTROL DE TAMAÑO DE TEXTO ESPECÍFICO DEL CALENDARIO
    // ==========================================
    const LEVELS = [80, 90, 100, 110, 120, 130, 140]; // Porcentajes de escala
    let currentLevelIndex = 2; // Por defecto 100% (índice 2)
    const buttonDecrease = document.getElementById("controls-button-font-decrease");
    const buttonIncrease = document.getElementById("controls-button-font-increase");
    const buttonReset = document.getElementById("controls-button-font-reset");
    const indicator = document.getElementById("controls-font-size-indicator");
    function updateCalendarFontSize() {
        const scalePercent = LEVELS[currentLevelIndex];
        // Aplicamos una variable CSS local al contenedor del calendario para escalar las fuentes
        calendarContainer.style.setProperty("--calendar-font-scale", `${scalePercent}%`);
        if (indicator) indicator.textContent = `${scalePercent}%`;
        if (buttonDecrease) buttonDecrease.disabled = currentLevelIndex === 0;
        if (buttonIncrease) buttonIncrease.disabled = currentLevelIndex === LEVELS.length - 1;
    }
    if (buttonDecrease) {
        buttonDecrease.addEventListener("click", () => {
            if (currentLevelIndex > 0) {
                currentLevelIndex--;
                updateCalendarFontSize();
            }
        });
    }
    if (buttonIncrease) {
        buttonIncrease.addEventListener("click", () => {
            if (currentLevelIndex < LEVELS.length - 1) {
                currentLevelIndex++;
                updateCalendarFontSize();
            }
        });
    }
    if (buttonReset) {
        buttonReset.addEventListener("click", () => {
            currentLevelIndex = 2;
            updateCalendarFontSize();
        });
    }
    // Función de descarga dual (PDF multipágina o Imagen)
    buttonDownload.addEventListener("click", async () => {
        const downloadFormat = document.getElementById("select-format").value;
        const formatoVista = selectView.value; // "12-hojas" o "1-hoja"
        buttonDownload.textContent = "Generando archivo...";
        buttonDownload.disabled = true;
        try {
            if (downloadFormat === "image") {
                // OPCCIÓN A: DESCARGAR COMO IMAGEN PNG
                const canvas = await html2canvas(calendarContainer, { scale: 2 });
                const imgData = canvas.toDataURL("image/png");
                const enlace = document.createElement("a");
                enlace.download = `Calendario_Anual_${selectYear.value}_CE_IPET_424.png`;
                enlace.href = imgData;
                enlace.click();
            } else {
                // OPCIÓN B: DESCARGAR COMO PDF CON jspdf
                const { jsPDF } = window.jspdf;
                if (formatoVista === "12-hojas") {
                    // --- MODO MULTIPÁGINA: 1 PÁGINA A4 POR MES (12 PÁGINAS) ---
                    const monthCards = calendarContainer.querySelectorAll(".month-card");
                    // Creamos el PDF en formato A4 Horizontal (Landscape)
                    const pdf = new jsPDF({
                        orientation: "landscape",
                        unit: "mm",
                        format: "a4",
                    });
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();
                    for (let i = 0; i < monthCards.length; i++) {
                        const card = monthCards[i];
                        // Capturamos cada tarjeta de mes individualmente
                        const canvas = await html2canvas(card, { scale: 2 });
                        const imgData = canvas.toDataURL("image/png");
                        // Calculamos dimensiones para centrar el mes en la página A4 con margen
                        const imgWidth = pdfWidth - 20; // 10mm de margen a cada lado
                        const imgHeight = (canvas.height * imgWidth) / canvas.width;
                        const yPosition = (pdfHeight - imgHeight) / 2; // Centrado vertical
                        // Si no es la primera página (Enero), agregamos una nueva hoja al PDF
                        if (i > 0) {
                            pdf.addPage();
                        }
                        // Dibujamos la imagen del mes centreada
                        pdf.addImage(imgData, "PNG", 10, Math.max(yPosition, 10), imgWidth, imgHeight);
                    }
                    pdf.save(`Calendario_Mensual_${selectYear.value}_CE_IPET_424.pdf`);
                } else {
                    // --- MODO 1 HOJA: TODO EL AÑO EN UNA SOLA PÁGINA A4 VERTICAL ---
                    const canvas = await html2canvas(calendarContainer, { scale: 2 });
                    const imgData = canvas.toDataURL("image/png");
                    const pdf = new jsPDF({
                        orientation: "portrait",
                        unit: "mm",
                        format: "a4",
                    });
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
                    pdf.save(`Calendario_Anual_${selectYear.value}_IPET_424.pdf`);
                }
            }
        } catch (error) {
            console.error("Error al generar el archivo de descarga:", error);
            alert("Ocurrió un error al generar la descarga.");
        } finally {
            buttonDownload.textContent = "Descargar Calendario";
            buttonDownload.disabled = false;
        }
    });
    // Renderizado inicial al cargar la página
    renderCalendar();
}
