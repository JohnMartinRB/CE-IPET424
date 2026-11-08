/* ==========================================
    EASTER EGG: TERMINAL DE CONSOLA
========================================== */
export function initTerminal() {
    // Exponemos el comando principal 'ce' o 'ipet' en el ámbito global window
    window.ce = {
        ayuda: function () {
            console.log(
                "%c 💻 TERMINAL INTERACTIVA CE IPET 424 \n" +
                    "%c Comandos disponibles para ejecutar:\n" +
                    "  • ce.info()       -> Información sobre el sitio web\n" +
                    "  • ce.estatuto()   -> Consultar el estatuto del Centro de Estudiantes\n" +
                    "  • ce.creditos()   -> Equipo de desarrollo\n" +
                    "  • ce.misterio()   -> Desbloquear logro secreto",
                "color: #00ff66; font-weight: bold; font-size: 1.1rem;",
                "color: #00C4FF; font-size: 0.95rem;",
            );
            return "⌨️ Escribí cualquiera de los comandos anteriores con paréntesis y presioná Enter.";
        },
        info: function () {
            return "🏫 Centro de Estudiantes IPET N° 424 - Sitio Oficial desarrollado por y para estudiantes.";
        },
        estatuto: function () {
            return "📜 El estatuto garantiza la representación democrática y participativa de todos los estudiantes del IPET 424.";
        },
        creditos: function () {
            return "🚀 Web estructurada con JS Vanilla Modular, HTML5 y CSS3. ¡Gracias por inspeccionar el código!";
        },
        misterio: function () {
            console.log(
                "%c 🎉 ¡LOGRO DESBLOQUEADO: Hacker del IPET! ",
                "background: #222; color: #bada55; font-size: 1.2rem; padding: 4px; border-radius: 4px;",
            );
            return "🔓 Descubriste la terminal secreta en consola.";
        },
    };
    // Mensaje inicial de invitación en la consola
    console.log(
        "%c ¿Buscando comandos ocultos? Escribí %cce.ayuda()%c y presioná Enter. ",
        "color: #888;",
        "color: #00ff66; font-weight: bold; background: #111; padding: 2px 6px; border-radius: 3px;",
        "color: #888;",
    );
}
