/* ==========================================
    EASTER EGGS: IMPORTACIÓN Y ACTIVACIÓN
========================================== */
import { initFlip } from "./flip.js";
import { initKonami } from "./konami.js";
import { initMatrix } from "./matrix.js";
import { initMenu } from "./menu.js";
import { initPaint } from "./paint.js";
import { initParty } from "./party.js";
import { initTerminal } from "./terminal.js";

export function initExtras() {
    initFlip();
    initKonami();
    initMatrix();
    initMenu();
    initPaint();
    initParty();
    initTerminal();
}
