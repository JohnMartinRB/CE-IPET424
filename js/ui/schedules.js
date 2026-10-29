/* ==========================================
    MÓDULO DE DESCARGA DE HORARIOS
========================================== */
export function initSchedules() {
    const selectYear = document.getElementById("select-year");
    const selectFont = document.getElementById("select-font");
    const toggleTeachers = document.getElementById("toggle-teachers");
    const container = document.getElementById("schedule-container");
    const buttonDownload = document.getElementById("button-download-schedule");
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
            subjectUpper.includes("TELECOMUNICACIONES");
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
    // Eventos de interacción
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
    // 3. Descargar imagen con html2canvas
    buttonDownload.addEventListener("click", () => {
        if (!selectYear.value) {
            alert("Por favor, seleccioná un curso antes de descargar.");
            return;
        }
        html2canvas(container).then((canvas) => {
            const link = document.createElement("a");
            link.download = `Horario_${selectYear.value}_IPET424.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });
    loadData();
}
