/* ==========================================
    EASTER EGG: MATRIX
========================================== */
export function initMatrix() {
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
