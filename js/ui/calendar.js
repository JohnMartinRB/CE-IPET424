/* ==========================================
    MÓDULO DE CALENDARIO DESCARGABLE
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const selectYear = document.getElementById("select-year");
    const selectView = document.getElementById("select-view");
    const selectFont = document.getElementById("select-font");
    const accentColor = document.getElementById("accent-color");
    const calendarContainer = document.getElementById("calendar-container");
    const buttonDownload = document.getElementById("button-download-calendar");

    const nombresMeses = [
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

    const nombresDias = ["L", "M", "X", "J", "V", "S", "D"]; // Lunes a Domingo

    // Función principal para renderizar el calendario completo
    function renderCalendar() {
        const anioSeleccionado = parseInt(selectYear.value) || 2026;
        const formatoVista = selectView.value; // "12-hojas" o "1-hoja"

        // Aplicar clase de vista al contenedor
        calendarContainer.className = `calendar-grid-${formatoVista}`;
        calendarContainer.innerHTML = "";

        // Generar los 12 meses
        for (let mes = 0; mes < 12; mes++) {
            const mesElemento = document.asistenteCrearMes ? null : document.createElement("div"); // O un div normal
            const mesDiv = document.createElement("div");
            mesDiv.className = "mes-card";

            // Título del Mes
            const tituloMes = document.createElement("h3");
            tituloMes.className = "mes-titulo";
            tituloMes.style.color = accentColor.value;
            tituloMes.textContent = `${nombresMeses[mes]} ${anioSeleccionado}`;
            mesDiv.appendChild(tituloMes);

            // Grilla de días de la semana
            const grillaDias = document.createElement("div");
            grillaDias.className = "mes-grilla-dias";

            // Cabeceras de días (L, M, X, J, V, S, D)
            nombresDias.forEach((dia) => {
                const diaHeader = document.createElement("div");
                diaHeader.className = "dia-header";
                diaHeader.textContent = dia;
                grillaDias.appendChild(diaHeader);
            });

            // Calcular días del mes
            // En JS, getDay() devuelve 0 para Domingo, 1 para Lunes, etc. Ajustamos para que la semana empiece en Lunes (0)
            const primerDiaDelMes = new Date(anioSeleccionado, mes, 1).getDay();
            const inicioSemanaLunes = primerDiaDelMes === 0 ? 6 : primerDiaDelMes - 1;

            const totalDiasMes = new Date(anioSeleccionado, mes + 1, 0).getDate();

            // Espacios vacíos antes del primer día del mes
            for (let i = 0; i < inicioSemanaLunes; i++) {
                const espacioVacio = document.createElement("div");
                espacioVacio.className = "dia-celda vacio";
                grillaDias.appendChild(espacioVacio);
            }

            // Días del mes
            for (let dia = 1; dia <= totalDiasMes; dia++) {
                const diaCelda = document.createElement("div");
                diaCelda.className = "dia-celda";

                const spanNum = document.createElement("span");
                spanNum.className = "dia-numero";
                spanNum.textContent = dia;
                diaCelda.appendChild(spanNum);

                grillaDias.appendChild(diaCelda);
            }

            mesDiv.appendChild(grillaDias);
            calendarContainer.appendChild(mesDiv);
        }
    }

    // Eventos para actualizar en tiempo real
    selectYear.addEventListener("change", renderCalendar);
    selectView.addEventListener("change", renderCalendar);

    selectFont.addEventListener("change", (e) => {
        calendarContainer.style.fontFamily = e.target.value;
    });

    accentColor.addEventListener("input", (e) => {
        const titulos = calendarContainer.querySelectorAll(".mes-titulo");
        titulos.forEach((titulo) => {
            titulo.style.color = e.target.value;
        });
    });

    // Función de descarga usando html2canvas
    buttonDownload.addEventListener("click", () => {
        buttonDownload.textContent = "Generando PDF / Imagen...";
        buttonDownload.disabled = true;

        html2canvas(calendarContainer, { scale: 2 })
            .then((canvas) => {
                const enlace = document.createElement("a");
                enlace.download = `Calendario_Anual_${selectYear.value}.png`;
                enlace.href = canvas.toDataURL("image/png");
                enlace.click();

                buttonDownload.textContent = "Descargar Calendario en PDF";
                buttonDownload.disabled = false;
            })
            .catch((error) => {
                console.error("Error al generar la descarga:", error);
                buttonDownload.textContent = "Descargar Calendario en PDF";
                buttonDownload.disabled = false;
            });
    });

    // Renderizado inicial al cargar la página
    renderCalendar();
});
