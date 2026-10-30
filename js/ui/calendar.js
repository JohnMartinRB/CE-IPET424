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
        { id: "color-title", btnId: "button-color-title", dropdownId: "dropdown-title", cssVar: "--title-color" },
        {
            id: "color-dayheader",
            btnId: "button-color-dayheader",
            dropdownId: "dropdown-dayheader",
            cssVar: "--dayheader-color",
        },
        { id: "color-cell", btnId: "button-color-cell", dropdownId: "dropdown-cell", cssVar: "--cell-bg" },
        {
            id: "color-monthbg",
            btnId: "button-color-monthbg",
            dropdownId: "dropdown-monthbg",
            cssVar: "--monthbg-color",
        },
        {
            id: "color-calendarbg",
            btnId: "button-color-calendarbg",
            dropdownId: "dropdown-calendarbg",
            cssVar: "--calendar-bg",
        },
    ];
    colorPickersConfig.forEach((item) => {
        const input = document.getElementById(item.id);
        const btn = document.getElementById(item.btnId);
        const dropdown = document.getElementById(item.dropdownId);
        if (input && btn && dropdown) {
            btn.addEventListener("click", (e) => {
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
                    btn.style.backgroundColor = selectedColor;
                    input.value = selectedColor;
                    dropdown.classList.remove("show");
                });
            });
            input.addEventListener("input", (e) => {
                const customColor = e.target.value;
                calendarContainer.style.setProperty(item.cssVar, customColor);
                btn.style.backgroundColor = customColor;
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
    selectFont.addEventListener("change", (e) => {
        calendarContainer.style.fontFamily = e.target.value;
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
                    const enlace = document.createElement("a");
                    enlace.download = `Calendario_Anual_${selectYear.value}.png`;
                    enlace.href = imgData;
                    enlace.click();
                } else {
                    const { jsPDF } = window.jspdf;
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
