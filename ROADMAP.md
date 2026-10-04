## 🗺️ Roadmap de Desarrollo

### 🚀 Próximas Versiones (Ciclo v0.26 - v0.35)

- [x] **v0.26 - Feedback Sonoro (UI Sound Effects)**
    - Implementación de motor de audio ligero en JavaScript para interacciones de interfaz.
    - Sonidos para switches (modo oscuro/claro), clics en botones principales y apertura de modales.
    - Control de activación/desactivación de sonido con persistencia en `localStorage`.

- [x] **v0.27 - Sistema de Novedades (What's New Modal)**
    - Ventana emergente (modal/toast) interactiva al detectar una actualización de versión.
    - Lectura dinámica del _changelog_ para mostrar las últimas mejoras al usuario al ingresar al sitio.

- [x] **v0.28 - Arquitectura CSS & Rework de Variables**
    - Expansión de `variables.css` para crear un sistema completo de _Design Tokens_.
    - Estandarización de variables para `padding`, `margin`, `gap`, `border-radius`, escalas tipográficas y tiempos de transición.
    - Refactorización de reglas en `base.css` y `desktop.css` eliminando valores estáticos (_hardcodeados_).

- [x] **v0.29 - Suite de Accesibilidad Ampliada**
    - Nuevos controles para ajustar el tamaño del texto (+ / -).
    - Selector de alto contraste e indicador de fuentes para dislexia.
    - Mejoras en la navegación por teclado (`:focus-visible`) y atributos ARIA.

- [x] **v0.30 - Aside Desplegable de Noticias (News Drawer)**
    - Panel lateral deslizante (_drawer_) dedicado a comunicados urgentes e insumos del colegio.
    - Filtrado rápido por etiquetas (_Urgente_, _Centro de Estudiantes_, _Institucional_).

- [ ] **v0.31 - Sección "Sabías qué..." / Datos Curiosos del IPET 424**
    - Widget dinámico de datos curiosos sobre la historia de la escuela, las especialidades técnicas y el Centro de Estudiantes.
    - Generador aleatorio de datos al presionar un botón interactivo.

- [ ] **v0.32 - Efectos Visuales & Micro-interacciones Avanzadas**
    - Integración de animación al hacer scroll (AOS / Animate On Scroll) en tarjetas y proyectos.
    - Efectos de brillo/glow dinámico en bordes al pasar el cursor (Hover UX).

- [ ] **v0.33 - Hub de Utilidades Estudiantiles (Calculadora de Promedios / Materias)**
    - Herramienta interactiva para que los estudiantes calculen sus promedios por trimestre.
    - Indicadores visuales de rendimiento por materia (Técnicas / Físico-Matemáticas / Generales).

- [ ] **v0.34 - Descarga Organizada de Materiales & Formularios**
    - Buscador e indexador de PDFs institucionales (fichas de salud, permisos de salidas de campo, reglamentos).
    - Previsualización rápida de documentos antes de descargar.

- [ ] **v0.35 - Modo Off-Line & Optimización PWA (Progressive Web App)**
    - Registro de _Service Worker_ para habilitar navegación básica sin conexión a Internet.
    - Optimización de caché de recursos estáticos e instalación como app en dispositivos móviles.
