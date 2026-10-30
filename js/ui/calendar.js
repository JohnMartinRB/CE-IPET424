/* ==========================================
    MÓDULO DE CALENDARIO DESCARGABLE
========================================== */
export function initCalendar() {
    const calendarContainer = document.getElementById("calendar-container");
    if (!calendarContainer) return;

    const selectYear = document.getElementById("select-year");
    const selectView = document.getElementById("select-view");
    const selectFont = document.getElementById("select-font");
    const accentColor = document.getElementById("accent-color");
    const buttonDownload = document.getElementById("button-download-calendar");

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
    const dayNames = ["L", "M", "X", "J", "V", "S", "D"]; // Lunes a Domingo

    // Función principal para renderizar el calendario completo
    function renderCalendar() {
        const selectedYear = parseInt(selectYear.value) || 2026;
        const formatoVista = selectView.value; // "12-hojas" o "1-hoja"
        // Aplicar clase de vista al contenedor
        calendarContainer.className = `calendar-grid-${formatoVista}`;
        calendarContainer.innerHTML = "";
        // Generar los 12 meses
        for (let month = 0; month < 12; month++) {
            const monthDiv = document.createElement("div");
            monthDiv.className = "month-card";
            // Título del Mes
            const monthTitle = document.createElement("h3");
            monthTitle.className = "month-title";
            monthTitle.style.color = accentColor.value;
            monthTitle.textContent = `${monthNames[month]} ${selectedYear}`;
            monthDiv.appendChild(monthTitle);
            // Grilla de días de la semana
            const daysGrid = document.createElement("div");
            daysGrid.className = "grid-month-days";
            // Cabeceras de días (L, M, X, J, V, S, D)
            dayNames.forEach((day) => {
                const headerDay = document.createElement("div");
                headerDay.className = "header-day";
                headerDay.textContent = day;
                daysGrid.appendChild(headerDay);
            });
            // Calcular días del mes
            // En JS, getDay() devuelve 0 para Domingo, 1 para Lunes, etc. Ajustamos para que la semana empiece en Lunes (0)
            const firstDayOfMonth = new Date(selectedYear, month, 1).getDay();
            const weekStartMonday = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
            const totalMonthDays = new Date(selectedYear, month + 1, 0).getDate();
            // Espacios vacíos antes del primer día del mes
            for (let i = 0; i < weekStartMonday; i++) {
                const emptySpace = document.createElement("div");
                emptySpace.className = "cell-day empty";
                daysGrid.appendChild(emptySpace);
            }
            // Días del mes
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
    selectFont.addEventListener("change", (e) => {
        calendarContainer.style.fontFamily = e.target.value;
    });
    accentColor.addEventListener("input", (e) => {
        const titles = calendarContainer.querySelectorAll(".month-title");
        titles.forEach((title) => {
            title.style.color = e.target.value;
        });
    });

    // Función de descarga dual (PDF o Imagen)
    buttonDownload.addEventListener("click", () => {
        const downloadFormat = document.getElementById("select-format").value;
        buttonDownload.textContent = "Generando archivo...";
        buttonDownload.disabled = true;
        html2canvas(calendarContainer, { scale: 2 })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                if (downloadFormat === "image") {
                    // Opción A: Descargar como Imagen PNG
                    const enlace = document.createElement("a");
                    enlace.download = `Calendario_Anual_${selectYear.value}.png`;
                    enlace.href = imgData;
                    enlace.click();
                } else {
                    // Opción B: Descargar como PDF real usando jsPDF
                    const { jsPDF } = window.jspdf;
                    // Definimos si es orientación vertical u horizontal según la vista
                    const isSinglePage = selectView.value === "1-hoja";
                    const pdfOrientation = isSinglePage ? "portrait" : "landscape";
                    const pdf = new jsPDF({
                        orientation: pdfOrientation,
                        unit: "mm",
                        format: "a4",
                    });
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                    pdf.save(`Calendario_Anual_${selectYear.value}.pdf`);
                }
                buttonDownload.textContent = "Descargar Calendario";
                buttonDownload.disabled = false;
            })
            .catch((error) => {
                console.error("Error al generar la descarga:", error);
                buttonDownload.textContent = "Descargar Calendario";
                buttonDownload.disabled = false;
            });
    });

    // Renderizado inicial al cargar la página
    renderCalendar();
}
