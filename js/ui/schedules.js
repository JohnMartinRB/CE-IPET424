/* ==========================================
    MÓDULO DE DESCARGA DE HORARIOS
========================================== */
export function initSchedules() {
    // 🛡️ Guardia: Si no estamos en la página de horarios (no existe el contenedor), salimos sin romper nada
    const scheduleContainer = document.getElementById("schedule-container"); // (o el ID principal que uses en horarios)
    if (!scheduleContainer) return;

    const selectYear = document.getElementById("select-year");
    const selectFont = document.getElementById("select-font");
    const toggleTeachers = document.getElementById("toggle-teachers");
    const container = document.getElementById("schedule-container");
    const buttonDownload = document.getElementById("button-download-schedule");

    // Configuración para los selectores de color con cuadrícula desplegable
    const colorPickersConfig = [
        { id: "color-header", buttonId: "button-color-header", dropdownId: "dropdown-header", cssVar: "--header-bg" },
        { id: "color-time", buttonId: "button-color-time", dropdownId: "dropdown-time", cssVar: "--time-bg" },
        { id: "color-break", buttonId: "button-color-break", dropdownId: "dropdown-break", cssVar: "--break-bg" },
        {
            id: "color-subjects",
            buttonId: "button-color-subjects",
            dropdownId: "dropdown-subjects",
            cssVar: "--subject-bg",
        },
        { id: "color-grid", buttonId: "button-color-grid", dropdownId: "dropdown-grid", cssVar: "--grid-bg" },
    ];

    let dataSchedules = {};

    // 1. Cargar el JSON con fetch
    async function loadData() {
        try {
            const answer = await fetch("../assets/data/schedules.json");
            dataSchedules = await answer.json();
            // Popular el selector de cursos dinámicamente si existieran varios
            selectYear.innerHTML = '<option value="">Seleccioná tu curso...</option>';
            for (const key in dataSchedules) {
                selectYear.innerHTML += `<option value="${key}">${dataSchedules[key].year}</option>`;
            }
        } catch (error) {
            console.error("Error al cargar los horarios:", error);
        }
    }

    // Función auxiliar para detectar nombres largos y ajustar celdas
    function renderCell(dayData) {
        if (!dayData || !dayData.subject) {
            return `<div class="schedule-cell"></div>`;
        }
        const subjectUpper = dayData.subject.toUpperCase();
        // Detecta si incluye PROGRAMACIÓN o EMPRENDIMIENTO
        const isLongName =
            subjectUpper.includes("PROGRAMACIÓN") ||
            subjectUpper.includes("EMPRENDIMIENTO") ||
            subjectUpper.includes("TECNOLOGÍAS") ||
            subjectUpper.includes("ORGANIZACIONES") ||
            subjectUpper.includes("APLICACIONES") ||
            subjectUpper.includes("TELECOMUNICACIONES") ||
            subjectUpper.length > 30;
        const cellClass = isLongName ? "schedule-cell subject-small" : "schedule-cell";
        return `
            <div class="${cellClass}">
                <span class="subject-name">${dayData.subject}</span>
                <span class="teacher-name">${dayData.teacher}</span>
            </div>
        `;
    }

    // 2. Renderizar la grilla en pantalla
    function renderSchedule(claveCurso) {
        if (!claveCurso || !dataSchedules[claveCurso]) {
            container.innerHTML = `<p class="placeholder-text">Seleccioná un curso arriba para ver su horario.</p>`;
            return;
        }
        const yearData = dataSchedules[claveCurso];
        // Armar la estructura de la grilla con las cabeceras
        let html = `
            <div class="schedule-header schedule-header-time">HORARIO</div>
            <div class="schedule-header">LUNES</div>
            <div class="schedule-header">MARTES</div>
            <div class="schedule-header">MIÉRCOLES</div>
            <div class="schedule-header">JUEVES</div>
            <div class="schedule-header">VIERNES</div>
        `;
        // Recorrer las filas del JSON
        yearData.rows.forEach((row) => {
            if (row.type === "break") {
                html += `<div class="schedule-break-row">${row.text}</div>`;
            } else {
                html += `
                    <div class="schedule-time">${row.time}</div>
                    ${renderCell(row.monday)}
                    ${renderCell(row.tuesday)}
                    ${renderCell(row.wednesday)}
                    ${renderCell(row.thursday)}
                    ${renderCell(row.friday)}
                `;
            }
        });
        container.innerHTML = html;
    }
    // ==========================================
    // EVENTOS DE INTERACCIÓN
    // ==========================================
    selectYear.addEventListener("change", (e) => {
        renderSchedule(e.target.value);
    });
    selectFont.addEventListener("change", (e) => {
        container.style.fontFamily = e.target.value;
    });
    toggleTeachers.addEventListener("change", (e) => {
        if (e.target.checked) {
            container.classList.add("no-teachers");
        } else {
            container.classList.remove("no-teachers");
        }
    });

    // Configuración de la cuadrícula de colores desplegable para los 4 elementos
    colorPickersConfig.forEach((item) => {
        const input = document.getElementById(item.id);
        const button = document.getElementById(item.buttonId);
        const dropdown = document.getElementById(item.dropdownId);
        if (input && button && dropdown) {
            // Abrir / cerrar menú flotante al hacer clic en el botón principal
            button.addEventListener("click", (e) => {
                e.stopPropagation();
                // Cerrar otros dropdowns abiertos por si acaso
                document.querySelectorAll(".color-dropdown").forEach((d) => {
                    if (d !== dropdown) d.classList.remove("show");
                });
                dropdown.classList.toggle("show");
            });
            // Al hacer clic en un color de la cuadrícula de los 10 pastel
            dropdown.querySelectorAll(".color-swatch[data-color]").forEach((swatch) => {
                swatch.addEventListener("click", () => {
                    const selectedColor = swatch.getAttribute("data-color");
                    container.style.setProperty(item.cssVar, selectedColor);
                    button.style.backgroundColor = selectedColor;
                    input.value = selectedColor;
                    dropdown.classList.remove("show");
                });
            });
            // Si el usuario usa el selector personalizado (el botón de engranaje)
            input.addEventListener("input", (e) => {
                const customColor = e.target.value;
                container.style.setProperty(item.cssVar, customColor);
                button.style.backgroundColor = customColor;
                dropdown.classList.remove("show");
            });
        }
    });
    // Cerrar los menús flotantes de colores si se hace clic fuera de ellos
    document.addEventListener("click", () => {
        document.querySelectorAll(".color-dropdown").forEach((d) => {
            d.classList.remove("show");
        });
    });

    // ==========================================
    // CONTROL DE TAMAÑO DE TEXTO DEL HORARIO
    // ==========================================
    const LEVELS = [80, 90, 100, 110, 120]; // Porcentajes de escala
    let currentLevelIndex = 2; // Por defecto 100% (índice 2)
    const buttonDecrease = document.getElementById("controls-button-font-decrease");
    const buttonIncrease = document.getElementById("controls-button-font-increase");
    const buttonReset = document.getElementById("controls-button-font-reset");
    const indicator = document.getElementById("controls-font-size-indicator");
    function updateScheduleFontSize() {
        const scalePercent = LEVELS[currentLevelIndex];
        // Aplicamos la variable de escala al contenedor principal de la grilla
        container.style.setProperty("--schedule-font-scale", `${scalePercent}%`);
        if (indicator) indicator.textContent = `${scalePercent}%`;
        if (buttonDecrease) buttonDecrease.disabled = currentLevelIndex === 0;
        if (buttonIncrease) buttonIncrease.disabled = currentLevelIndex === LEVELS.length - 1;
    }
    if (buttonDecrease) {
        buttonDecrease.addEventListener("click", () => {
            if (currentLevelIndex > 0) {
                currentLevelIndex--;
                updateScheduleFontSize();
            }
        });
    }
    if (buttonIncrease) {
        buttonIncrease.addEventListener("click", () => {
            if (currentLevelIndex < LEVELS.length - 1) {
                currentLevelIndex++;
                updateScheduleFontSize();
            }
        });
    }
    if (buttonReset) {
        buttonReset.addEventListener("click", () => {
            currentLevelIndex = 2;
            updateScheduleFontSize();
        });
    }
    // 3. Descargar horario (Imagen PNG o PDF)
    buttonDownload.addEventListener("click", () => {
        if (!selectYear.value) {
            alert("Por favor, seleccioná un curso antes de descargar.");
            return;
        }
        const downloadFormat = document.getElementById("select-format")?.value || "image";
        buttonDownload.textContent = "Generando archivo...";
        buttonDownload.disabled = true;
        html2canvas(container, { scale: 2 })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                if (downloadFormat === "image") {
                    // Opción A: Descargar como Imagen PNG
                    const enlace = document.createElement("a");
                    enlace.download = `Horario_${selectYear.value}_CE_IPET_424_2026.png`;
                    enlace.href = imgData;
                    enlace.click();
                } else {
                    // Opción B: Descargar como PDF usando jsPDF
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF({
                        orientation: "portrait", // Vertical para que el horario encaje perfecto
                        unit: "mm",
                        format: "a4",
                    });
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
                    pdf.save(`Horario_${selectYear.value}_CE_IPET_424_2026.pdf`);
                }
                buttonDownload.textContent = "Descargar Horario";
                buttonDownload.disabled = false;
            })
            .catch((error) => {
                console.error("Error al generar la descarga:", error);
                alert("Ocurrió un error al generar el archivo.");
                buttonDownload.textContent = "Descargar Horario";
                buttonDownload.disabled = false;
            });
    });

    loadData();
}
