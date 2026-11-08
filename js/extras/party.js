/* ==========================================
    EASTER EGG: MODO FIESTA
========================================== */
export function initParty() {
    let clicks = 0;
    let clickTimer = null;
    document.addEventListener("click", (e) => {
        const titulo = e.target.closest("h1, .header-title");
        if (titulo) {
            clicks++;
            if (clicks > 2) {
                e.preventDefault();
            }
            // Reiniciamos el temporizador si transcurre más de 1 segundo entre clics
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                // Si el usuario hizo solo 1 clic y esperó, permitimos que sea un clic normal. Pero si estaba haciendo una ráfaga, reseteamos el contador a 0.
                if (clicks === 1) {
                }
                clicks = 0;
            }, 1000);
            // Al 5º clic rápido lanzamos el confeti
            if (clicks >= 5) {
                e.preventDefault();
                clicks = 0;
                clearTimeout(clickTimer);
                triggerPartyMode();
            }
        }
    });
    function triggerPartyMode() {
        const colors = [
            "#00db58",
            "#00cde4",
            "#ffa703",
            "#ebe700",
            "#f03029",
            "#c20ee2",
            "#a1da07",
            "#008516",
            "#f89ab6",
            "#6e0feb",
            "#c5140e",
            "#221fff",
            "#3597c5",
        ];
        const confettiCount = 60;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti-piece";
            // Propiedades aleatorias para cada trozo de confeti
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomLeft = Math.random() * 100; // Porcentaje de ancho
            const randomDelay = Math.random() * 1.5; // Retraso en segundos
            const randomSize = Math.random() * 8 + 6; // Tamaño entre 6px y 14px
            Object.assign(confetti.style, {
                backgroundColor: randomColor,
                left: `${randomLeft}vw`,
                width: `${randomSize}px`,
                height: `${randomSize * 1.2}px`,
                animationDelay: `${randomDelay}s`,
            });
            document.body.appendChild(confetti);
            // Se limpian los elementos del DOM automáticamente después de finalizar la animación
            setTimeout(() => {
                confetti.remove();
            }, 4500);
        }
    }
}
