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

export function matrix() {
    // Variable privada para almacenar el historial de teclas ingresadas
    let matrixBuffer = "";
    /**
     * Escucha la secuencia de teclas para activar la lluvia de código Matrix
     */
    document.addEventListener("keydown", (e) => {
        // Ignoramos si el usuario está escribiendo en un input o textarea
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        matrixBuffer += e.key.toLowerCase();
        // Mantenemos solo los últimos 6 caracteres
        if (matrixBuffer.length > 6) {
            matrixBuffer = matrixBuffer.slice(-6);
        }
        // Si coincide la palabra secreta "matrix"
        if (matrixBuffer === "matrix") {
            matrixBuffer = "";
            launchMatrixRain();
        }
    });
    function launchMatrixRain() {
        // Si ya existe una pantalla Matrix activa, no la volvemos a crear
        if (document.getElementById("matrix-canvas")) return;
        // Creación del canvas flotante
        const canvas = document.createElement("canvas");
        canvas.id = "matrix-canvas";
        // Estilos inline para cubrir toda la pantalla por encima de todo
        Object.assign(canvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            zIndex: "99999",
            backgroundColor: "#000000",
            cursor: "var(--cursor-hover-dark)",
        });
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Caracteres estilo Matrix (Katakana / números / letras)
        const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);
        function draw() {
            // Fondo semi-transparente para dar el efecto de estela/difuminado
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00ff66"; // Verde neón de tu paleta terminal
            ctx.font = `${fontSize}px monospace`;
            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        const intervalId = setInterval(draw, 33); // ~30 FPS
        // Destruir el efecto al hacer clic o presionar Escape
        const stopMatrix = (e) => {
            if (e.type === "click" || (e.type === "keydown" && e.key === "Escape")) {
                clearInterval(intervalId);
                canvas.remove();
                document.removeEventListener("keydown", stopMatrix);
            }
        };
        canvas.addEventListener("click", stopMatrix);
        document.addEventListener("keydown", stopMatrix);
    }
}

export function party() {
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
            "#00c750",
            "#00b9ce",
            "#ffa703",
            "#da2c26",
            "#ae0dca",
            "#87b607",
            "#da8ca3",
            "#5f0dca",
            "#990f0a",
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

export function flip() {
    let flipBuffer = "";
    document.addEventListener("keydown", (e) => {
        // Se ignora el evento si el usuario está tipeando en un input o textarea
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        flipBuffer += e.key.toLowerCase();
        if (flipBuffer.length > 5) {
            flipBuffer = flipBuffer.slice(-5);
        }
        if (flipBuffer.endsWith("flip") || flipBuffer.endsWith("girar") || flipBuffer.endsWith("giro")) {
            flipBuffer = "";
            triggerBarrelRoll();
        }
    });
    function triggerBarrelRoll() {
        const rootElement = document.documentElement; // Elemento <html>
        if (rootElement.classList.contains("barrel-roll")) return;
        rootElement.classList.add("barrel-roll");
        setTimeout(() => {
            rootElement.classList.remove("barrel-roll");
        }, 2500);
    }
}

export function terminal() {
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
            return "🏫 Centro de Estudiantes IPET Nº 424 - Sitio Oficial desarrollado por y para estudiantes.";
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
