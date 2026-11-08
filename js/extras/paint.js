/* ==========================================
    EASTER EGG: MODO PAINT
========================================== */


export function initPaint() {
    let paintCanvas = null;
    let paintCtx = null;
    let isPaintingActive = false;
    document.addEventListener("keydown", (e) => {
        // Ignoramos si el usuario está escribiendo en un input o textarea
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        // Combinación Alt + P para alternar el modo
        if (e.altKey && e.key.toLowerCase() === "p") {
            e.preventDefault();
            togglePaintMode();
        }
        // Escape cancela el dibujo
        if (e.key === "Escape" && isPaintingActive) {
            togglePaintMode(false);
        }
    });
    function togglePaintMode(forceState) {
        isPaintingActive = forceState !== undefined ? forceState : !isPaintingActive;
        if (isPaintingActive) {
            setupPaintCanvas();
            console.log(
                "%c 🎨 Modo Paint Activado: Mové el mouse para dibujar. Presioná Escape o Alt+P para salir. ",
                "color: #ff007f; font-weight: bold;",
            );
        } else {
            removePaintCanvas();
        }
    }
    function setupPaintCanvas() {
        if (document.getElementById("paint-canvas")) return;
        paintCanvas = document.createElement("canvas");
        paintCanvas.id = "paint-canvas";
        Object.assign(paintCanvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            zIndex: "99998",
            pointerEvents: "none", // Permite seguir cliqueando botones debajo si se desea
        });
        document.body.appendChild(paintCanvas);
        paintCtx = paintCanvas.getContext("2d");
        paintCanvas.width = window.innerWidth;
        paintCanvas.height = window.innerHeight;
        document.addEventListener("mousemove", drawCursorTrail);
    }
    function removePaintCanvas() {
        document.removeEventListener("mousemove", drawCursorTrail);
        if (paintCanvas) {
            paintCanvas.remove();
            paintCanvas = null;
            paintCtx = null;
        }
    }
    function drawCursorTrail(e) {
        if (!paintCtx) return;
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
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        paintCtx.beginPath();
        paintCtx.arc(e.clientX, e.clientY, 6, 0, Math.PI * 2);
        paintCtx.fillStyle = randomColor;
        paintCtx.shadowColor = randomColor;
        //paintCtx.shadowBlur = 10;
        paintCtx.fill();
    }
}