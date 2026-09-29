/* ==========================================
    EASTER EGGS: KONAMI CODE Y MOSTRAR MENSAJE EN LA CONSOLA
========================================== */
export function config() {
    console.log(
        "%c ¡Hola usuario! 🚀 %c\n¿Te interesa la programación o querés colaborar en la web del Centro de Estudiantes? ¡Sumate al equipo!",
        "font-size: 1.5rem; font-weight: bold; color: #00C4FF;",
        "font-size: 1rem; color: #ccc;",
    );
    const konamiCode = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "6", "7"];
    let konamiIndex = 0;
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("🚀 ¡Descubriste el modo desarrollador del CE IPET 424!");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}
