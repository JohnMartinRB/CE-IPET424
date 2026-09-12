// Funciones de accesibilidad web para la página
(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1) Crear enlace "saltar al contenido" para navegación por teclado
function createSkipLink() {
    const skip = document.createElement('a');
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Saltar al contenido principal';
    skip.setAttribute('aria-label', 'Saltar al contenido principal');
    skip.style.position = 'absolute';
    skip.style.left = '-999px';
    skip.style.top = 'auto';
    skip.style.width = '1px';
    skip.style.height = '1px';
    skip.style.overflow = 'hidden';
    document.body.insertBefore(skip, document.body.firstChild);

    skip.onfocus = function () {
        skip.style.left = '1rem';
        skip.style.top = '1rem';
        skip.style.width = 'auto';
        skip.style.height = 'auto';
        skip.style.zIndex = '9999';
    };

    skip.onblur = function () {
        skip.style.left = '-999px';
        skip.style.top = 'auto';
        skip.style.width = '1px';
        skip.style.height = '1px';
    };
}

// 2) Añadir foco visible mejorado al navegar con teclado
function improveFocusVisibility() {
    document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard-navigation');
});

const style = document.createElement('style');
style.textContent = `
    body.keyboard-navigation a:focus,
    body.keyboard-navigation button:focus,
    body.keyboard-navigation input:focus,
    body.keyboard-navigation textarea:focus,
    body.keyboard-navigation select:focus,
    body.keyboard-navigation [tabindex]:focus {
    outline: 3px solid #ffcc00;
    outline-offset: 3px;
    box-shadow: 0 0 0 4px #000;
    }
    `;
    document.head.appendChild(style);
}

// 3) Alternar alto contraste
function toggleHighContrast() {
    const body = document.body;
    const enabled = body.classList.toggle('high-contrast');
    localStorage.setItem('accessibility-high-contrast', enabled ? 'true' : 'false');
}

function applyHighContrast() {
    if (localStorage.getItem('accessibility-high-contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
}

// 4) Ajustar tamaño de texto
function setFontScale(scale) {
    const body = document.body;
    const current = parseFloat(getComputedStyle(body).fontSize) || 16;
    const next = Math.min(Math.max(current + scale, 14), 24);
    body.style.fontSize = next + 'px';
    localStorage.setItem('accessibility-font-size', String(next));
}

function restoreFontScale() {
    const saved = Number(localStorage.getItem('accessibility-font-size'));
    if (saved && saved >= 14 && saved <= 24) {
        document.body.style.fontSize = saved + 'px';
    }
}

// 5) Activar modo lectura / legibilidad simplificada
function setReadingMode(on) {
    const body = document.body;
    if (on) {
        body.classList.add('reading-mode');
        localStorage.setItem('accessibility-reading-mode', 'true');
    } else {
        body.classList.remove('reading-mode');
        localStorage.setItem('accessibility-reading-mode', 'false');
    }
}

// 6) Mejorar semántica de imágenes usando aria-label y alt
function improveImages() {
    const images = Array.from(document.images);
    images.forEach(function (img) {
    if (!img.getAttribute('alt')) {
        img.setAttribute('alt', 'Imagen de la página');
    }
    if (!img.getAttribute('aria-label')) {
        img.setAttribute('aria-label', img.getAttribute('alt') || 'Imagen');
    }
    });
}

// 7) Validar enlaces y botones con textos accesibles
function validateInteractiveText() {
    const interactives = Array.from(document.querySelectorAll('a, button, input[type="button"], input[type="submit"]'));
    interactives.forEach(function (item) {
    if (!item.textContent.trim() && !item.getAttribute('aria-label') && !item.getAttribute('title')) {
        item.setAttribute('aria-label', 'Acción disponible');
    }
    });
}

// 8) Desactivar animaciones si el usuario prefiere menos movimiento
function applyReducedMotion() {
    if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// 9) Generar un panel de accesibilidad en la página
function createAccessibilityPanel() {
    const panel = document.createElement('div');
    panel.className = 'accessibility-panel';
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Herramientas de accesibilidad');
    panel.innerHTML = `
        <button type="button" id="contrastToggle" aria-label="Alternar alto contraste">A/C</button>
        <button type="button" id="fontPlus" aria-label="Aumentar tamaño de texto">A+</button>
        <button type="button" id="fontMinus" aria-label="Disminuir tamaño de texto">A-</button>
        <button type="button" id="readingMode" aria-label="Modo lectura">Leer</button>
    `;

    panel.style.position = 'fixed';
    panel.style.right = '1rem';
    panel.style.bottom = '1rem';
    panel.style.zIndex = '1000';
    panel.style.display = 'flex';
    panel.style.gap = '0.5rem';
    panel.style.padding = '0.5rem';
    panel.style.background = '#fff';
    panel.style.border = '1px solid #ccc';
    panel.style.borderRadius = '8px';
    panel.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';

    const buttons = panel.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.style.border = 'none';
        button.style.background = '#0a6cbd';
        button.style.color = '#fff';
        button.style.padding = '0.5rem 0.8rem';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
    });

    document.body.appendChild(panel);

    document.getElementById('contrastToggle').addEventListener('click', toggleHighContrast);
    document.getElementById('fontPlus').addEventListener('click', function () {
        setFontScale(2);
    });
    document.getElementById('fontMinus').addEventListener('click', function () {
        setFontScale(-2);
    });
    document.getElementById('readingMode').addEventListener('click', function () {
        const active = document.body.classList.toggle('reading-mode');
        setReadingMode(active);
    });
}

// 10) Crear textos alternativos para iconos SVG o imágenes con role img
function improveSvgAccessibility() {
    const svgs = Array.from(document.querySelectorAll('svg'));
    svgs.forEach(function (svg) {
        if (!svg.getAttribute('role')) {
            svg.setAttribute('role', 'img');
        }
        if (!svg.getAttribute('aria-label') && !svg.getAttribute('aria-labelledby')) {
            svg.setAttribute('aria-label', 'Icono visual');
        }
    });
}

// 11) Inicialización principal
function initAccessibility() {
    createSkipLink();
    improveFocusVisibility();
    applyHighContrast();
    restoreFontScale();
    if (localStorage.getItem('accessibility-reading-mode') === 'true') {
        document.body.classList.add('reading-mode');
    }
    improveImages();
    validateInteractiveText();
    improveSvgAccessibility();
    createAccessibilityPanel();
    applyReducedMotion();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
    initAccessibility();
}

// Exponer API pública opcional
window.accessibility = {
    toggleHighContrast: toggleHighContrast,
    setFontScale: setFontScale,
    setReadingMode: setReadingMode,
    createAccessibilityPanel: createAccessibilityPanel,
    improveImages: improveImages,
    validateInteractiveText: validateInteractiveText,
    improveSvgAccessibility: improveSvgAccessibility
    };
})();